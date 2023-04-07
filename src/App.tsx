import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CreateAccount from './Pages/Authentication/SignUp/CreateAccount'
import CompleteProfile from './Pages/Authentication/SignUp/CompleteProfile'
import SetTransactionPin from './Pages/Authentication/SignUp/SetTransactionPin'
import ConfirmTransactionPin from './Pages/Authentication/SignUp/ConfirmTransactionPin'
import LogIn from './Pages/Authentication/SignIn/LogIn'
import ForgotPassword from './Pages/Authentication/SignIn/ForgotPassword'
import ResetPassword from './Pages/Authentication/SignIn/ResetPassword'

function App() {

  return (
    <div className="App flex justify-center bg-black">
      <div className="h-screen w-screen max-w-[400px] bg-[#121313] text-[#D9D9D9] px-[20px] py-[40px] ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/create-account" />} />
            {/* Authentication Pages */}
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/complete-profile" element={<CompleteProfile />} />
            <Route path="/set-transaction-pin" element={<SetTransactionPin />} />
            <Route path="/confirm-transaction-pin" element={<ConfirmTransactionPin />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
