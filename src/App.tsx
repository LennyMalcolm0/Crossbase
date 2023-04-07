import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CreateAccount from './Pages/Authentication/CreateAccount'

function App() {

  return (
    <div className="App flex justify-center bg-black">
      <div className="h-screen w-screen max-w-[400px] bg-[#121313] text-[#D9D9D9] px-[20px] py-[40px] ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CreateAccount />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
