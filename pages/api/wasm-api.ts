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
  var startTime = performance.now()
  const productFetch = await fetch(`${process.env.API_URL}`);

  const data = await productFetch.json();

  const productsArray = Object.values(data as Record<string, Product>); // Convert the data object to an array with a type assertion
  
  var endTime = performance.now()
  console.log(`Call to wasm api took ${endTime - startTime} milliseconds`)
  res.status(200).send(productsArray); // Send the products array in the response
}
