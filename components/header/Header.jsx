import Image from 'next/image';
import { Menu } from '@headlessui/react';
import Link from 'next/link';
import Button from '../ui/Button';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
// import { useRef } from 'react';

// const menuRef = useRef();

const menuHandler = () => {
// alert("hello")
}

function Header() {
  return (
    <div className="h-20 w-full flex items-center para">
      <div>
        <Link href="/">
        <Image className="cursor-pointer" src="/images/download.png" width={100} height={25} />
        </Link>
      </div>
      <nav className="hidden md:flex mx-10 mb-2">
        <ul className="flex items-center capitalize">
          <li>
            <Link href="../features">
              <a className="text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
                features
              </a>
            </Link>
          </li>
          <li>
            <Link href="../testimonials">
              <a className="text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
                testimonials
              </a>
            </Link>
          </li>
          <li>
            <Link href="../pricing">
              <a className="text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
                pricing
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto flex  mb-2">
        <button>
          <Link href="../login">
            <a className="hidden lg:inline-flex text-gray-600 text-sm hover:bg-gray-100 hover:rounded-lg p-2 transition duration-75 mx-5">
              Sign in
            </a>
          </Link>
        </button>
        <Button link={'register'}>
          Get started <span className="hidden lg:flex"> &nbsp;today</span>
        </Button>
        <div className="lg:hidden ml-2">
          <IconButton onClick={menuHandler}>
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
