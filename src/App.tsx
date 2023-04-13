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
import TransferAmount from './Pages/HomeFlow/TransferAmount'
import RecieverDetails from './Pages/HomeFlow/RecieverDetails'
import AuthorizeTransaction from './Pages/HomeFlow/AuthorizeTransaction'
import MyStakes from './Pages/TreasuryFlow/MyStakes'
import TreasuryMarket from './Pages/TreasuryFlow/TreasuryMarket'
import NewStake from './Pages/TreasuryFlow/NewStake'
import ActiveStakes from './Pages/TreasuryFlow/ActiveStakes'
import ViewStake from './Pages/TreasuryFlow/ViewStake'
import WithdrawStake from './Pages/TreasuryFlow/WithdrawStake'
import Account from './Pages/AccountFLow/Account'
import EditProfile from './Pages/AccountFLow/EditProfile'
import CompleteKYC from './Pages/AccountFLow/CompleteKYC'
import ChangePassword from './Pages/AccountFLow/ChangePassword'
import NewPin from './Pages/AccountFLow/ChangePin/NewPIN'
import CurrentPin from './Pages/AccountFLow/ChangePin/CurrentPIN'
import ConfirmPin from './Pages/AccountFLow/ChangePin/ConfirmPIN'

function App() {

  return (
    <div className="App-background h-screen w-screen flex justify-center bg-black transition-all duration-300 ">
      <div className="App h-full max-h-[1000px] w-full max-w-[400px] relative text-white bg-[#121313] px-[20px] py-[35px] ">
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
              <Route path="/transfer-amount" element={<TransferAmount />} />
              <Route path="/reciever-details" element={<RecieverDetails />} />
              <Route path="/authorize-transfer" element={<AuthorizeTransaction />} />

              {/* Treasury Flow Pages */}
              <Route path="/my-stakes" element={<MyStakes />} />
              <Route path="/treasury-market" element={<TreasuryMarket />} />
              <Route path="/new-stake" element={<NewStake />} />
              <Route path="/active-stakes" element={<ActiveStakes />} />
              <Route path="/view-stakes" element={<ViewStake />} />
              <Route path="/withdraw-stake" element={<WithdrawStake />} />

              {/* Account Flow Pages */}
              <Route path="/account" element={<Account />} />
              <Route path="/edit-profile" element={<EditProfile />} />
              <Route path="/complete-kyc" element={<CompleteKYC />} />
              <Route path="/change-password" element={<ChangePassword />} />
              <Route path="/current-pin" element={<CurrentPin />} />
              <Route path="/new-pin" element={<NewPin />} />
              <Route path="/confirm-pin" element={<ConfirmPin />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  )
}

export default App
