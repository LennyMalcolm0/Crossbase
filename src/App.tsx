import './App.css'
import LoginInput from './Components/LoginInput'
import PageAction from './Components/PageInfo'

function App() {

  return (
    <div className="App flex justify-center">
      <div className="h-screen w-screen bg-[#121313] text-[#D9D9D9] px-[20px] py-[40px] ">
        <PageAction main="Create Account" details="Begin your journey with Crossbase by signing up." />
        <LoginInput  />
      </div>
    </div>
  )
}

export default App
