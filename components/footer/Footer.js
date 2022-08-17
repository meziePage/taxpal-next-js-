import Image from "next/image"
import Link from "next/link"

import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/Github";

function Footer() {
  return (
      <div className="h-20 w-full mt-40  para">
        <div className="flex items-center flex-col justify-center gap-10">
           <div>
        <Image src="/images/download.png" width={100} height={25} />
      </div>
      <nav className="mx-10 mb-2">
        <ul className="flex items-center capitalize">
          <li>
            <Link href="../features">
              <a className="text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
                features
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
                testimonials
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
                pricing
              </a>
            </Link>
          </li>
        </ul>
      </nav>
          </div>
          <div className="flex justify-center flex-col sm:flex-row sm:justify-between w-full space-y-8 items-center  mt-20">
              <div className="space-x-4 sm:order-2">
              <TwitterIcon className="text-gray-500 cursor-pointer" />
                  <GithubIcon className="text-gray-500 cursor-pointer" />
              </div>
              <div className="text-gray-600 pb-8">Copyright &copy; 2021 TaxPal. All rights reserved.</div>
          </div>
    </div>
  )
}

export default Footer