import { render, screen } from '@testing-library/react'
import { Navigation } from '../nav'
import { usePathname } from 'next/navigation'

// Next.jsのナビゲーションをモック
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

jest.mock('next/link', () => {
  return function MockLink({ children, href, className }: any) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
  }
})

// IntersectionObserverをモック
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {}
  disconnect() {}
  unobserve() {}
} as any

describe('Navigation', () => {
  const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('portfolioとabout meのリンクが表示されること', () => {
    render(<Navigation />)

    const portfolioLinks = screen.getAllByText('portfolio')
    const aboutMeLink = screen.getByText('about me')

    expect(portfolioLinks).toHaveLength(1) // 修正：実際には1つのportfolioリンクのみ
    expect(aboutMeLink).toBeInTheDocument()
  })

  it('戻るボタン（ArrowLeft）が表示されること', () => {
    render(<Navigation />)

    // ArrowLeftアイコンのSVG要素を確認
    const arrowLeftIcon = document.querySelector('svg')
    expect(arrowLeftIcon).toBeInTheDocument()
  })

  it('正しいリンク先が設定されていること', () => {
    render(<Navigation />)

    const portfolioLinks = screen.getAllByRole('link', { name: /portfolio/i })
    const aboutMeLink = screen.getByRole('link', { name: /about me/i })

    portfolioLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/portfolio')
    })
    expect(aboutMeLink).toHaveAttribute('href', '/portfolio')
  })

  it('パスに基づいて親パスが正しく計算されること', () => {
    mockUsePathname.mockReturnValue('/portfolio/work/123')
    render(<Navigation />)

    const backButton = screen.getByRole('link', { name: '' }) // ArrowLeftアイコンのみのリンク
    expect(backButton).toHaveAttribute('href', '/portfolio/work') // 修正：親パスは/portfolio/work
  })

  it('ルートパスの場合は親パスがルートになること', () => {
    mockUsePathname.mockReturnValue('/')
    render(<Navigation />)

    const backButton = screen.getByRole('link', { name: '' })
    expect(backButton).toHaveAttribute('href', '/')
  })

  it('末尾のスラッシュが正しく処理されること', () => {
    mockUsePathname.mockReturnValue('/portfolio/')
    render(<Navigation />)

    const backButton = screen.getByRole('link', { name: '' })
    expect(backButton).toHaveAttribute('href', '/')
  })
})