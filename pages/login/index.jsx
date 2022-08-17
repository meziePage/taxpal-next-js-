import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import Button from '../../components/ui/Button';
import Head from 'next/head';

function LoginPage() {
  return (
    <div className="lg:flex lg:flex-grow pl-8 lg:pl-0 pr-8 lg:pr-0 md:bg-gradient-to-bl from-violet-500 to-blue-500 w-[full]">
          <Head>
              <title>Login</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
              <div className="md:max-w-lg lg:max-w-2xl min-h-screen md:mx-auto grid lg:w-1/2 items-center flex-grow lg:mx-0  py-8 bg-white">
              <div className="max-w-md mx-auto w-full">
          <div className="!mb-20">
        <Link href="/">
        <Image className="cursor-pointer " src="/images/download.png" width={100} height={25} />
        </Link>
              </div>
              <div className="mb-10">
              <h5 className="text-xl font-medium">Sign in to your account</h5>
                  <p className="text-gray-600 pt-4">Don't have an account? <Link href="register"><a className="text-md text-blue-600 font-medium hover:underline"> Sign up </a></Link> for free trial.</p>
                  </div>
          <div>
              <form>
                  <div className="flex flex-col mb-5">
                      <label htmlFor="email" className="text-gray-600 font-medium">Email address</label>
                          <input type="email" id="email" required className='my-2 h-12 rounded-lg pl-5 bg-gray-100 outline-blue-500 focus:bg-white border-[1px] border-gray-200' />
                  </div>
                  <div className="flex flex-col mb-5">
                      <label htmlFor="email" className="text-gray-600 font-medium" >Password</label>
                          <input type="password" id="password" required className='my-2 h-12 rounded-lg pl-5 bg-gray-100 outline-blue-500 focus:bg-white border-[1px] border-gray-200' />
                  </div>
                  <Button link={"/sign-up"}>Sign in <ArrowRightAltIcon className="mx-2 !text-xl !text-white mt-px" /> </Button>
              </form>
          </div>
              </div>
              </div>
              <div className="hidden lg:flex w-1/2"></div>
          </div>
  )
}

export default LoginPage