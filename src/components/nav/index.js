/* This Nav requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";



export default function Nav() {
  return (
    <Disclosure as="nav" className="hero border-b z-20 top-0 ">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:pb-20">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex text-gray-500 items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 pl-10 flex items-center justify-center sm:items-stretch sm:justify-start ">
                <div className="flex-shrink-0 hidden items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="block lg:hidden h-8 w-auto"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                  </svg>
                  <div>
                    <Link className="flex space-x-2 mr-20" to={"/"}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden lg:block h-8 w-auto"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                      </svg>

                      <p className="text-gray-500  text-xl font-bold">TVUS</p>
                    </Link>
                  </div>
                </div>
                <div className="hidden sm:block flex-grow "></div>
              </div>
              <div className="hidden md:flex absolute inset-y-0 right-0  items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className=" px-10 font-semibold uppercase rounded-full hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Link to="/" className="text-gray-500 ">
                    trips
                  </Link>
                </button>
                <button
                  type="button"
                  className=" px-10 font-semibold uppercase rounded-full hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Link to="/" className="text-gray-500">
                    recently viewed
                  </Link>
                </button>
                <button
                  type="button"
                  className=" px-10 font-semibold uppercase rounded-full hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Link to="/" className="text-gray-500">
                    bookings
                  </Link>
                </button>

                <div className="px-10">
                  <img
                    class="w-10 h-10 rounded-full"
                    src="https://townsquare.media/site/812/files/2018/03/cardi-b-invasion-of-privacy.jpg?w=980&q=75"
                    alt="Rounded avatar"
                  ></img>
                </div>

                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 ">
              <Disclosure.Button className="block px-3 py-2 text-gray-500 rounded-md text-base font-medium ">
                <ul
                  class="py-1 text-lg font-semibold text-gray-500 dark:text-gray-500"
                  aria-labelledby="dropdownDefault"
                >
                  <li>
                    <a
                      href="#1"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Trips
                    </a>
                  </li>
                  <li>
                    <a
                      href="#1"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Recently Viewed
                    </a>
                  </li>
                  <li>
                    <a
                      href="#1"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Bookings
                    </a>
                  </li>
                  <li>
                    <a
                    
                      href="#1"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Profile
                    </a>
                  </li>
                </ul>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
