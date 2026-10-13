
import './App.css'
import Card from './component/Card'
import Navbar from './component/Navbar'
import Signup from './component/Signup'

function App() {
  
  return (
    <>
     <div className="min-h-screen bg-white text-black dark:bg-slate-900 dark:text-white">
      <Navbar />
      <Card/>
      <Signup/>
      <h1 className="text-3xl font-bold">Hello World</h1>
    </div>
    </>
  )
}

export default App
