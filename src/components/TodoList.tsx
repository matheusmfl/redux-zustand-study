import { useSelector } from 'react-redux'

export function TodoList() {
  const todos: any = useSelector((store) => {
    return store.todo
  })

  console.log(todos)
  return (
    <ul>
      {todos.map((todo: any) => {
        return <li key={todo}> {todo}</li>
      })}
    </ul>
  )
}
