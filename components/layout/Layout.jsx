import Head from 'next/head';
import Footer from '../footer/Footer';
import Header from '../header/Header';

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>{title ? title + ' TaxPal' : 'TaxPal'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className='flex flex-col min-h-screen justify-between'>
        <header className=""><Header /></header>
        <main className="flex-grow">{children}</main>
        <footer><Footer /></footer>
      </div>
    </div>
  );
}
