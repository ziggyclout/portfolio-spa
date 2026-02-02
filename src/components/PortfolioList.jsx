import PortfolioItem from "./PortfolioItem"

function PortfolioList({ items, query }) {
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="list">
      {filteredItems.map(item => (
        <PortfolioItem key={item.id} data={item} />
      ))}
    </div>
  )
}

export default PortfolioList
