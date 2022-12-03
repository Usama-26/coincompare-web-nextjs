// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
process.env.NEXT_BACKEND_CMC_API_KEY = "f3118b41-f048-485c-afbb-113625cd9232";
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
    res.status(200).json({ data });
  };
  getData();
}
