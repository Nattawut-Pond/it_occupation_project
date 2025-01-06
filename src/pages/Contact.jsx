import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact({ loginStatus }) {

  return (
    <>
      <div className=" find-sec flex flex-col min-h-screen backdrop-blur-sm">
        <Navbar />
        <div className="welcome-sec flex flex-col items-center justify-center px-6 py-12 lg:px-8 backdrop-blur-md bg-white/5">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-20 text-center text-2xl/9 font-bold tracking-tight text-gray-100">
              ติดต่อเรา
            </h2>
          </div>

          <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className="relative max-lg:row-start-1">
              <div className="bg-white shadow-2xl relative h-full flex-col overflow-hidden rounded-2xl max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="block grid-cols-1 gap-1 p-4 sm:grid-cols-2 sm:grid">
                  <div className="flex sm:hidden">
                    <img
                      src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="px-8 pt-8 self-center sm:px-5 sm:pt-5">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      อีเมล
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      CareerPathIT.Co@gmail.com
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      &nbsp;
                    </p>

                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      ช่องทางอื่น ๆ
                    </p>
                    <p className="m-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Facebook : CareerPathBUIT
                    </p>
                    <p className="m-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Line : CareerPathBUIT
                    </p>
                    <p className="m-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      Instragram : CareerPathBUIT
                    </p>
                  </div>

                  <div className="hidden rounded-xl sm:flex">
                    <img
                      src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="px-5 pt-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="name"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          ชื่อ
                        </label>
                      </div>
                      <div className="mt-2 mb-2">
                        <input type="text" placeholder="ชื่อ" className="input input-bordered w-full max-w-xs" />
                      </div>
                    </div>
                  </div>
                  <div className="px-5 pt-5 ">
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          อีเมล
                        </label>
                      </div>
                      <div className="mt-2 mb-2">
                        <input type="text" placeholder="อีเมล" className="input input-bordered w-full max-w-xs" />
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pt-5 col-span-2">
                    <div>
                      <div className="flex items-center justify-between">
                        <label
                          htmlFor="password"
                          className="block text-sm/6 font-medium text-gray-900"
                        >
                          รายละเอียด
                        </label>
                      </div>
                      <div className="mt-2 mb-2">
                        <textarea className="textarea textarea-bordered w-full" placeholder="รายระเอียด"></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="flex mt-10 w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                    >
                      ติดต่อเรา
                    </button>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none absolute inset-px rounded-2xl shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem]">
              </div>

              
            </div>
            
          </div>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
