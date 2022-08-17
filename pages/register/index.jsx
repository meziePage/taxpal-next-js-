import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import Button from '../../components/ui/Button';
import Head from 'next/head';

function LoginPage() {
  return (
    <div className="lg:flex lg:flex-grow pl-8 lg:pl-0 pr-8 lg:pr-0 md:bg-gradient-to-bl from-violet-500 to-blue-500 w-[full]">
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="md:max-w-lg lg:max-w-2xl min-h-screen md:mx-auto grid lg:w-1/2 items-center flex-grow lg:mx-0  py-8 bg-white">
        <div className="max-w-md mx-auto w-full">
          <div className="!mb-20">
            <Link href="/">
              <Image
                className="cursor-pointer "
                src="/images/download.png"
                width={100}
                height={25}
              />
            </Link>
          </div>
          <div className="mb-10">
            <h5 className="text-xl font-medium">Get started for free</h5>
            <p className="text-gray-600 pt-4">
              Already registered?
              <Link href="login">
                <a className="text-md text-blue-600 font-medium hover:underline">
                  {' '}
                  Sign in{' '}
                </a>
              </Link>{' '}
              to your account
            </p>
          </div>
          <div>
            <form>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="first-name"
                  className="text-gray-600 font-medium capitalize"
                >
                  first name
                </label>
                <input
                  type="text"
                  id="first-name"
                  required
                  className="my-2 h-12 rounded-lg pl-5 bg-gray-100 outline-blue-500 focus:bg-white border-[1px] border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label
                  htmlFor="last-name"
                  className="text-gray-600 font-medium"
                >
                  last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  required
                  className="my-2 h-12 rounded-lg pl-5 bg-gray-100 outline-blue-500 focus:bg-white border-[1px] border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="email" className="text-gray-600 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="my-2 h-12 rounded-lg pl-5 bg-gray-100 outline-blue-500 focus:bg-white border-[1px] border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="pasword" className="text-gray-600 font-medium">
                  password
                </label>
                <input
                  type="password"
                  id="password"
                  required
                  className="my-2 h-12 rounded-lg pl-5 bg-gray-100 outline-blue-500 focus:bg-white border-[1px] border-gray-200"
                />
              </div>
              <div className="flex flex-col mb-5">
                <label htmlFor="select" className="text-gray-600 font-medium">
                  How did you hear about us?
                              </label>
                              <div className="inline-block relative w-full">
                <select
                  id="select"
                  className="my-2 leading-tight w-full h-12 rounded-lg pl-5 bg-gray-100 block appearance-none outline-none focus:bg-white border-[1px] border-gray-200 text-lg"
                >
                  <option value="AltVista-search">AltVista search</option>
                  <option value="Super-Bowel-commercial">
                    Super Bowel commercial
                  </option>
                  <option value="Our-route">Our route 34 city bus ad</option>
                  <option value="podcast">The "Never Use This" podcast</option>
                                  </select>
                                  <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
  </div>
                                  </div>
              </div>
              <Button link={'/sign-up'}>
                Sign up
                <ArrowRightAltIcon className="mx-2 !text-xl !text-white mt-px" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2"></div>
    </div>
  );
}

export default LoginPage;
