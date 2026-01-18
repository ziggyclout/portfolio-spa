const SearchBar = ({ searchTerm, setSearchTerm }) => (
  <input
    className="search"
    type="text"
    placeholder="Search projects..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
);

export default SearchBar;
