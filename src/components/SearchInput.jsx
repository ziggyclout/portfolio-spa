function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}

export default SearchInput
