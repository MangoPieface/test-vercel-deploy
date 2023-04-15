import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number;
  name: string;
  image_url: string;
  category_id: number;
};

type Data = Product[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const productFetch = await fetch(`${process.env.API_URL}`);

  const data = await productFetch.json();
  console.log(data);

  const productsArray = Object.values(data as Record<string, Product>); // Convert the data object to an array with a type assertion
  res.status(200).send(productsArray); // Send the products array in the response
}
