import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
    return (
        <div className="relative">
          <input type="text" placeholder="Masukan judul" className="p-1 rounded w-full"/>
          <button className="absolute right-1 top-1 bg-white">
            <IoIosSearch size={25}/>
          </button>
        </div>
    )
}

export default SearchInput