const Category = () => {
  return (
    <div class="">
      

      <div class="w-56 bg-gray-100 border border-none rounded-lg shadow-md dark:bg-white-800 dark:border-gray-700">
        <a href="#">
          <img
            class="rounded-t-lg object-cover h-48 w-56"
            src="https://www.netmeds.com/images/category/v1/547/thumb/hair_care_2.jpg"
            alt=""
            // size="fit"
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-xl font-bold tracking-tight dark:text-gray text-center">
              Hair Care
            </h5>
            <h5 class="mb-1 text-lg font-bold tracking-tight dark:text-green-600 text-center">
              flat 20% Off
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {/* Here are the biggest enterprise technology acquisitions of 2021 so */}
            {/* far, in reverse chronological order. */}
          </p>
          {/* <a
            href="#"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Category;
