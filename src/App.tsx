import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CreateAccount from './Pages/Authentication/SignUp/CreateAccount'
import CompleteProfile from './Pages/Authentication/SignUp/CompleteProfile'
import SetTransactionPin from './Pages/Authentication/SignUp/SetTransactionPin'
import ConfirmTransactionPin from './Pages/Authentication/SignUp/ConfirmTransactionPin'
import LogIn from './Pages/Authentication/SignIn/LogIn'
import ForgotPassword from './Pages/Authentication/SignIn/ForgotPassword'
import ResetPassword from './Pages/Authentication/SignIn/ResetPassword'
import Home from './Pages/HomeFlow/Home'
import AllActivities from './Pages/HomeFlow/AllActivites'
import Notifications from './Pages/HomeFlow/Notifications'
import TopUp from './Pages/HomeFlow/TopUp'
import WithdrawMoney from './Pages/HomeFlow/WithdrawMoney'
import AuthorizeWithdrawal from './Pages/HomeFlow/AuthorizeWithdrawal'
import SelectDestination from './Pages/HomeFlow/SelectDestination'

function App() {

  return (
    <div className="App-background h-screen w-screen flex justify-center bg-black transition-all duration-300 ">
      <div className="App h-full max-h-[1000px] w-full max-w-[400px] relative bg-[#121313] text-[#D9D9D9] px-[20px] py-[35px] ">
        <div className="h-full w-full overflow-auto ">
          <BrowserRouter>
            <Routes>
              {/* <Route path="/" element={<Navigate to="/create-account" />} /> */}
              {/* Authentication Pages */}
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/complete-profile" element={<CompleteProfile />} />
              <Route path="/set-transaction-pin" element={<SetTransactionPin />} />
              <Route path="/confirm-transaction-pin" element={<ConfirmTransactionPin />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />

              {/* Home Flow Pages*/}
              <Route path="/" element={<Home />} />
              <Route path="/all-activities" element={<AllActivities />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/top-up" element={<TopUp />} />
              <Route path="/withdraw-money" element={<WithdrawMoney />} />
              <Route path="/authorize-withdrawal" element={<AuthorizeWithdrawal />} />
              <Route path="/select-destination" element={<SelectDestination />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
