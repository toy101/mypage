import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAINE ? process.env.SERVICE_DOMAINE : "",
  apiKey: process.env.API_KEY ? process.env.API_KEY : "",
});

export const getWorks = async () => {
  try {
    const res = await client.get({
      endpoint: "works",
      queries: { limit: 100, orders: "-priority" },
    });
    return res.contents;
  } catch (error) {
    console.log("====getWorks error====");
    console.log(error);
  }
};

export const getWorkbyId = async (id: string) => {
  try {
    const res = await client.getListDetail({
      endpoint: "works",
      contentId: id,
    });

    return res;
  } catch (error) {
    console.log("====getWork error====");
    console.log(error);
  }
};
