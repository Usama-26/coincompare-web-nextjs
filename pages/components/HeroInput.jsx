function HeroInput() {
  return (
    <div className="flex justify-center items-center drop-shadow-md">
      <div>
        <input
          type="email"
          id="email"
          name="email"
          className="w-64 bg-gray-100 border-none focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-2 leading-8 transition-colors duration-200 ease-in-out rounded-tl-md rounded-bl-md"
          placeholder="Email"
        />
      </div>
      <button
        type="button"
        className="py-3 px-3 md:block bg-purple-500 font-semibold text-white hover:text-white hover:bg-purple-700 rounded-br-md rounded-tr-md transition-colors"
      >
        Get Started
      </button>
    </div>
  );
}

export default HeroInput;
