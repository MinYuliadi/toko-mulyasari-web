const SearchComponent = () => {
  return (
    <>
      <div className="flex w-full h-20 justify-center items-center px-20">
        <div className="flex-row hidden sm:flex gap-3 shadow-md p-3 border">
          <select className="focus:outline-none">
            <option value="">Kategori</option>
            <option value="Susu">Susu</option>
            <option value="Kopi">Kopi</option>
            <option value="Creamer">Creamer</option>
            <option value="Gula">Gula</option>
            <option value="Teh">Teh</option>
          </select>
          <input
            className="border border-zinc-300 px-2 md:w-[20rem] lg:w-[30rem] focus:outline-none w-full"
            value=""
          />
        </div>
      </div>
      <div className="flex w-full h-20 justify-center items-center px-5 pb-24">
        <div className="flex flex-col sm:hidden sm:scale-0 gap-3 shadow-md p-3 border">
          <input className="border border-zinc-300 focus:outline-none w-[14em]" value="" />
          <select className="focus:outline-none">
            <option value="">Kategori</option>
            <option value="Susu">Susu</option>
            <option value="Kopi">Kopi</option>
            <option value="Creamer">Creamer</option>
            <option value="Gula">Gula</option>
            <option value="Teh">Teh</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
