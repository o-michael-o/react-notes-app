import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3rem" />
      <input
        type="text"
        className="search-input"
        placeholder="Type to search through your notes"
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  );
};

export default Search;
