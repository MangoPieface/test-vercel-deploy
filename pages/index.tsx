import Image from 'next/image'
import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next';

const inter = Inter({ subsets: ['latin'] })

type Product = {
  id: number;
  name: string;
  image_url: string;
  category_id: number;
};


type HomePageProps = {
  products: Product[];
};

export const getServerSideProps : GetServerSideProps = async () => {
  const request = await fetch('https://test-vercel-deploy-eta.vercel.app/api/hello')
  const products = await request.json(); 
  console.log(products);
  return {
    props: {
      products,
    },
  };
};

const Home = ({ products }: HomePageProps) => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">{product.name}</h2>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Home;
