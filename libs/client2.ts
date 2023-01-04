import { createClient } from "microcms-js-sdk";

export const client2 = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN2 || "",
  apiKey: process.env.API_KEY2 || "",
});
