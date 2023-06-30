import { useSelector } from 'react-redux'

export function TodoList() {
  const todos = useSelector((store) => {
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
