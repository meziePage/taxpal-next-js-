import PollIcon from "@material-ui/icons/Poll";
import StorageIcon from "@material-ui/icons/Storage";
import ContactMailIcon from "@material-ui/icons/ContactMail";

function BusinessTask() {
  return (
      <div className="para">
          <div className="lg:max-w-3xl lg:mx-auto md:text-center">
            <h3 className="text-gray-900 font-medium text-4xl md:text-5xl">
            Simplify everyday business tasks.
      </h3>
      <p className="py-5 !max-w-full text-gray-700 text-base md:text-lg">
      Because you’d probably be a little confused if we suggested you complicate your everyday business tasks instead.
              </p>
              </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
          <div>
                  <div>
                      <div><PollIcon className="!text-5xl !text-blue-600 my-5" /></div>
                  <p className="text-blue-500 font-bold">Reporting</p>
              </div>
              <h2 className="font-medium text-xl text-gray-800 pt-3 pb-5">Stay on top of things with always up-to-date reporting features.</h2>
              <div className="text-gray-500">We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.</div>
          </div>
{/* Card 2 */}
          <div className="group max-w-lg md:w-full md:max-w-7xl group">
                  <div>
                  <div><StorageIcon className="!text-5xl !text-gray-600 my-5 !group-hover-text-gray-800" /></div>
                  <p className="text-gray-500 font-bold group-hover:text-gray-600">Inventory</p>
              </div>
              <h2 className="font-medium text-xl text-gray-600 group-hover:text-gray-800 pt-3 pb-5"> Never lose track of what’s in stock with accurate inventory tracking.</h2>
              <div className="text-gray-400 group-hover:text-gray-500">We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.</div>
          </div>
{/* Card 3 */}
          <div className="group max-w-lg md:w-full md:max-w-7xl">
                  <div>
                  <div><ContactMailIcon className="!text-5xl !text-gray-600 my-5 !group-hover-text-gray-800" /></div>
                  <p className="text-gray-500 font-bold group-hover:text-gray-600">Contacts</p>
              </div>
              <h2 className="font-medium text-xl text-gray-600 hover:text-gray-400 pt-3 pb-5 group-hover:text-gray-800">Organize all of your contacts, service providers, and invoices in one place.</h2>
              <div className="text-gray-400 hover:text-gray-500 group-hover:text-gray-600">This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.</div>
              </div>
              </div>
    </div>
  )
}

export default BusinessTask

