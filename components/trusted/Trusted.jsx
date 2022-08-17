import Image from "next/image"

function Trusted() {
  return (
      <div className="text-center py-20 px-8 text-lg text-gray-800">
          <h2>Trusted by these six companies so far</h2> 
          <div className="my-10 md:max-w-xl xl:max-w-6xl md:mx-auto gap-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
              <div>
                  <Image src="/images/transistor.svg" width={150} height={50} />
              </div>
              <div>
                  <Image src="/images/mirage.svg" width={150} height={50} />
              </div>
              <div>
                  <Image src="/images/tuple.svg" width={150} height={50} />
              </div>
              <div>
                  <Image src="/images/laravel.svg" width={150} height={50} />
              </div>
              <div>
                  <Image src="/images/statickit.svg" width={150} height={50} />
              </div>
              <div>
                  <Image src="/images/statamic.svg" width={150} height={50} />
                  </div>
          </div>
    </div>
  )
}

export default Trusted