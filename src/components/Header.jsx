// eslint-disable-next-line react/prop-types
const Header = ({ children }) => {
  return (
    <header className="bg-[#032541] flex flex-col lg:flex-row justify-between py-5 px-10 lg:items-center">
      <h1 className="text-center font-bold text-white text-4xl lg:mb-0">
        THE MOVIE LIST
      </h1>
      {children}
    </header>
  );
};

export default Header;