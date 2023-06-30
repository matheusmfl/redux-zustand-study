'use client'
import { add } from '@/store'
import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

export function AddTodo() {
  const [newTodo, setNewTodo] = useState('')

  const dispatch = useDispatch()
  function handleNewTodo(e: FormEvent) {
    e.preventDefault()
    dispatch(add(newTodo))
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
