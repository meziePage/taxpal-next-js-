import Button from "../ui/Button"

function GetStarted() {
  return (
      <div className="w-full flex flex-col justify-center items-center bg-gradient-to-tr from-fuchsia-500 text-white to-blue-500 para text-center">
           <div className="max-w-3xl pt-20">
            <h3 className="md:text-center text-white font-medium text-4xl">
            Get started today
      </h3>
      <p className="py-5 md:text-center !max-w-full text-medium font-lg text-white text-xl text-medium">
      It’s time to take control of your books. Buy our software so you can feel like you’re doing something productive.
          </p>
          </div>
          <div className="text-center flex justify-center pb-20">
              <Button link={"register"} className="bg-white text-black w-fit hover:bg-gray-100 transition duration-200 font-bold text-base">Get 6 months free</Button>
              </div>
    </div>
  )
}

export default GetStarted