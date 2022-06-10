import React from "react";
import Nav from "../../components/nav";
import Form from "../../components/form";
import Card from "../../components/card";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-wrap md:mx-10 mb-10 mt-10 ">
        <div className="w-full md:w-1/2 px-3 mb-8 md:mb-0">
          <Card />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <Form />
        </div>
      </div>
      <div className="mx-5 mb-20">
        <div className="flex flex-wrap  md:mx-10 mb-3  ">
          <div className="flex flex-grow">
            <h1 className="text-lg font-semibold">Subtotal</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">&#x20A6;2497.00</h1>
          </div>
        </div>
        <div className="flex flex-wrap md:mx-10 mb-3  ">
          <div className="flex flex-grow">
            <h1 className="text-lg font-semibold">Estimated TAX</h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">&#x20A6;119.64</h1>
          </div>
        </div>
        <div className="flex flex-wrap md:mx-10 pb-20 border-b  ">
          <div className="flex flex-grow">
            <h1 className="text-lg font-semibold">
              Promotional Code:{" "}
              <span className="text-gray-400 uppercase font-semibold">
                Z4KXLM9A
              </span>
            </h1>
          </div>
          <div>
            <h1 className="text-lg font-semibold">&#x20A6;-60.00</h1>
          </div>
        </div>
        <div className="flex flex-wrap md:mx-10 mb-3 mt-10 ">
          <div className="flex flex-grow">
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium  md:text-lg px-5 md:px-10 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Complete Payment
            </button>
          </div>
          <div>
            <h1 className="md:text-xl font-extrabold pt-2 md:pt-0">
              TOTAL: &#x20A6;2556.64
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
