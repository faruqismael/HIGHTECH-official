const Contact = () => {
  return (
    <div className="contact">
      <div class="bg-white mx-auto sm:px-6 lg:px-8">
        <div class="mt-8 overflow-hidden">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2  sm:rounded-lg">
              <h1 class="text-4xl sm:text-5xl text-indigo-900 dark:text-white font-extrabold tracking-tight">
                Contact Us
              </h1>
              <p class="text-normal text-lg sm:text-2xl font-medium text-indigo-600 dark:text-gray-400 mt-2">
                using the following addresses.
              </p>

              <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  HighTech , Street, State, Postal Code
                </div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  +251 922 899 2987
                </div>
              </div>

              <div class="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  class="w-8 h-8 text-gray-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">
                  info@hightech.com
                </div>
              </div>
            </div>

            <form class="p-6 flex flex-col justify-center">
              <h2 className="text-3xl font-extrabold text-indigo-900">
                Send Us Feedback
              </h2>
              <div class="flex flex-col">
                <label for="name" class="hidden">
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="email" class="hidden">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">
                  Message
                </label>
                <textarea
                  type="tel"
                  name="tel"
                  id="tel"
                  placeholder="Your Message"
                  class="w-100 h-40 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-indigo-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                class="md:w-32 hover:bg-indigo-900 bg-white text-indigo-900 border border-indigo-900 hover:text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
