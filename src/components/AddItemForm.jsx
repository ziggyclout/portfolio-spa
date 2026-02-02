import { useState } from "react"

function AddItemForm({ onAdd }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function submitForm(e) {
    e.preventDefault()

    if (!title || !description) return

    onAdd({
      id: Date.now(),
      title,
      description
    })

    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        placeholder="Project title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Project description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button type="submit">Add Project</button>
    </form>
  )
}

export default AddItemForm
