const PageNotFound = () => {
  return (
    <div className="lg:text-5xl sm:text-3xl text-gray-700 font-Ubuntu min-h-full font-medium flex w-full justify-center items-center">
      <span>Sorry, 404 : Page Not Found&nbsp;</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="sm:h-8 sm:w-8 w-6 h-6 lg:h-12 lg:w-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default PageNotFound;
