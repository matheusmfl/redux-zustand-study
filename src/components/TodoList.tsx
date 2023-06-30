import { useAppSelector } from '@/store'

export function TodoList() {
  const todos = useAppSelector((store) => {
    return store.todo
  })

  console.log(todos)
  return (
    <ul>
      {todos.map((todo, index) => {
        return <li key={index}> {todo}</li>
      })}
    </ul>
  )
}
