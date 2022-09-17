import React, { useState, useCallback } from 'react'

function UseCallbackExample() {
  const [tasks, setTasks] = useState([])

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'Some Task'])
  }, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  )
}

// React.memo: the higher order component
// const EnhancedComponent = higherOrderComponent(WrappedComponent);
// const MyComponent2 = React.memo(function MyComponent(props) {
      /* render using props */
// });
const Button = React.memo(({ addTask }) => {
  console.log('Button rendered')
  return (
    <div>
      <button className='btn btn-primary' onClick={addTask}>
        Add Task
      </button>
    </div>
  )
})

export default UseCallbackExample
