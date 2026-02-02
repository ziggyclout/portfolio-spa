function PortfolioItem({ data }) {
  return (
    <div className="card">
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  )
}

export default PortfolioItem
