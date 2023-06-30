import { FormEvent, useState } from 'react'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')
  function handleNewTodo(e: FormEvent) {
    e.preventDefault()
    console.log(newTodo)
  }
  return (
    <form action="" onSubmit={handleNewTodo}>
      <input
        type="text"
        placeholder="Novo To-Do"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  )
}
