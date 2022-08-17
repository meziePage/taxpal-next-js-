import Image from 'next/image'

function LargeCard() {
  return (
      <div className="relative hidden md:block h-[400px] w-full z-10 max-w-6xl mx-auto mt-32 mb-64 ">
          <div className='border-2 border-black'>
              <Image src="/images/profit-loss.webp" className=" z-10 max-w-2xl" layout="fill" />
              </div>
          <div className="absolute h-[500px] bg-gray-100 border-2 border-gray-200 red-600 w-full -mt-12 rounded-none lg:rounded-3xl"></div>
    </div>
  )
}

export default LargeCard