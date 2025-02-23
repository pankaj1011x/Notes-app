import React from "react";

const NavigationBar = () => {
  return (
    <div className="flex items-center w-full h-16 px-4 border-b border-gray-300 justify-between">
      <div className="flex gap-3 items-center">
        <div className="flex items-center hover:bg-gray-300 h-10 w-10 justify-evenly rounded-3xl transition-all duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div>
          <img
            className="size-10"
            src="src/assets/keep_2020q4_48dp.png"
            alt="logo"
          />
        </div>
        <p className="text-xl text-gray-600"> Don't Keep</p>
      </div>

      <form className="w-full max-w-lg">
        <label
          for="default-search"
          className="mb-2 text-lg font-medium text-gray-900 sr-only "
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
            <div className="flex items-center  justify-center h-8 w-8 rounded-full transition-all duration-200 hover:bg-gray-200">
              <svg
                className="w-4 h-4th text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 py-3 ps-14  text-sm text-gray-800 rounded-lg bg-gray-100  placeholder-gray-600 focus:shadow-md  focus:outline-none focus:shadow-gray-200 focus:bg-white "
            placeholder="Search"
            required
          />
        </div>
      </form>

      <div className="h-9 w-9 rounded-full bg-gray-400 flex items-center justify-center">
        <p className="text-white">P</p>
      </div>
    </div>
  );
};

export default NavigationBar;
