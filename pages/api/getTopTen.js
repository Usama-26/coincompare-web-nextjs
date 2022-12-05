// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
process.env.NEXT_BACKEND_CMC_API_KEY = "640cb9cf-64ef-42e0-894c-35aa3f280d62";

export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${process.env.NEXT_BACKEND_CMC_API_KEY}`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
        },
      }
    );
    const data = await response.json();
    return res.status(200).json({ data });
  };
  getData();
}
