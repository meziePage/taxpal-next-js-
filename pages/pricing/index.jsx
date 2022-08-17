import Layout from '../../components/layout/Layout';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Link from 'next/link';

function PricingPage() {
  return (
    <Layout title="Pricing">
      <div className="">
        <Link href="/">
          <ArrowBack className="text-gray-800 !text-5xl cursor-pointer p-2 rounded-full hover:bg-gray-100" />
        </Link>
        <div className="flex flex-col bg-gray-100 para justify-center font-mono items-center mt-20 font-bold text-2xl text-gray-800">
        Pricing Page
        </div>
      </div>
    </Layout>
  );
}

export default PricingPage;
