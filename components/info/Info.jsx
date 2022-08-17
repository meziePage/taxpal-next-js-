import PlayArrowIcon from "@material-ui/icons/PlayArrow"
import Button from "../ui/Button"


function Info() {
  return (
      <div className="mt-10 mb-20 md:max-w-4xl lg:max-w-5xl md:mx-auto w-full text-center px-4 py-16 sm:px-8 lg:px-16">
          <div>
              <h1 className="text-5xl md:text-7xl font-medium text-gray-900">Accounting <span className="text-blue-500">made simple</span> for small businesses.</h1>
              <p className="py-6 text-gray-800 text-lg sm:mx-8 md:mx-16">Most book-keeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited.</p>
              <div className="flex justify-center items-center space-x-4">
                  <Button link={""} className="bg-gray-800 hover:bg-gray-700">Get 6 months free</Button>
                  <Button link={""} className="bg-transparent border-2 !text-gray-500 border-blue-100 hover:border-blue-200 py-2"><PlayArrowIcon className="pr-2 text-blue-600" /> Watch video</Button>
          </div>
          </div>
    </div>
  )
}

export default Info