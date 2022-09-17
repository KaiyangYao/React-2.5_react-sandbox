import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <h1 className='mb-3'>React Sandbox</h1>
      <ul class='list-group'>
        <Link
          className='list-group-item list-group-item-action'
          to='useref-example-1'
        >
          useRef Example 1
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='useref-example-2'
        >
          useRef Example 2
        </Link>
        <Link
          className='list-group-item list-group-item-action'
          to='useref-example-3'
        >
          useRef Example 3
        </Link>
      </ul>
    </>
  )
}

export default Home