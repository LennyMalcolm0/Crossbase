import './App.css'
import Backtrack from './Components/Backtrack'
import PageAction from './Components/PageAction'

function App() {

  return (
    <div className="App flex justify-center">
      <div className="h-screen w-screen bg-[#121313] text-[#D9D9D9] px-[20px] py-[40px] ">
        <Backtrack />
        <PageAction main="Create Account" details="Begin your journey with Crossbase by signing up." />
      </div>
    </div>
  )
}

export default App
