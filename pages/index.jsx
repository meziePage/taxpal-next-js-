import { Fragment } from 'react';
import BusinessTask from '../components/business-task/BusinessTask';
import Cards from '../components/cards/Cards';
import Info from '../components/info/Info';
import LargeCard from '../components/large-card/LargeCard';
import Layout from '../components/layout/Layout';
import Motive from '../components/motive/Motive';
import GetStarted from '../components/Starting/Starting';
// import Payment from '../components/payment/Payment';
import Trusted from '../components/trusted/Trusted';
// import ContactPage from './contact';

export default function Home() {
  return (
    <Fragment>
      <Layout title="Home">
        <Info />
        <Trusted />
        {/* <Payment /> */}
        <BusinessTask />
        <LargeCard />
        <GetStarted />
        <Motive />
        <Cards />
      </Layout>
    </Fragment>
  );
}
