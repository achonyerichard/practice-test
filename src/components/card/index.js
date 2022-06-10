import React from 'react'

const Card = () => {
    return (
      <div>
        <div className="">
          <div className="pb-5">
            <h1 className="text-xl  font-semibold">Payment Information</h1>
            <p className="text-sm text-gray-500 font-semibold">
              Choose your payment method
            </p>
          </div>

          <div className="w-full md:w-3/4 h-72  bg-gradient-to-bl from-indigo-600 to-red-400 rounded-lg p-10">
            <h1 className="text-sm font-semibold text-gray-100 pb-4 uppercase">
              card number
            </h1>

            <h1 className="text-sm text-gray-300 font-bold">
              1234 4567 8901 2345
            </h1>
            <img
              src="https://img.icons8.com/offices/80/000000/sim-card-chip.png"
              alt=""
            />
            <h1 className="text-sm text-gray-300 font-bold uppercase">
              expiration date
            </h1>
            <h1 className="text-sm pt-3 text-gray-300 font-bold">03/24</h1>
            <div className="flex flex-wrap pt-2">
              <div className=" w-1/2  md:mb-0">
                <h1 className="text-sm text-gray-300 font-bold uppercase">
                  John Doe
                </h1>
              </div>
              <div className='flex flex-grow'></div>
              <div className="circle">
                <div className="circle1"></div>
                <div className="circle2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Card
