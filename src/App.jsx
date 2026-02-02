import { useState } from "react"
import Header from "./components/Header"
import SearchInput from "./components/SearchInput"
import PortfolioList from "./components/PortfolioList"
import AddItemForm from "./components/AddItemForm"
import "./App.css"

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "Personal Website", description: "Simple HTML portfolio" },
    { id: 2, title: "React App", description: "Single Page Application" }
  ])

  const [search, setSearch] = useState("")

  function handleAddItem(newItem) {
    setItems(prev => [...prev, newItem])
  }

  return (
    <div className="container">
      
      <Header />

      <AddItemForm onAdd={handleAddItem} />

      <SearchInput value={search} onChange={setSearch} />

      <PortfolioList items={items} query={search} />
    </div>
  )
}

export default App
