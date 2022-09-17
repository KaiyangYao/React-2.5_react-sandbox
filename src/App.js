import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import UseRefExample1 from './components/UseRefExample1'
import UseRefExample2 from './components/UseRefExample2'
import UseRefExample3 from './components/UseRefExample3'
import UseMemoExample from './components/UseMemoExample'
import UseCallbackExample from './components/UseCallbackExample'

function App() {
  return (
    <Router>
      <div className='container mt-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/useref-example-1' element={<UseRefExample1 />} />
          <Route path='/useref-example-2' element={<UseRefExample2 />} />
          <Route path='/useref-example-3' element={<UseRefExample3 />} />
          <Route path='/usememo-example' element={<UseMemoExample />} />
          <Route path='/usecallback-example' element={<UseCallbackExample />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
