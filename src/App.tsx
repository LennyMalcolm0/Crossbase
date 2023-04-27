import './App.css'
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import CreateAccount from './Pages/Authentication/SignUp/CreateAccount'
import CompleteProfile from './Pages/Authentication/SignUp/CompleteProfile'
import SetTransactionPin from './Pages/Authentication/SignUp/SetTransactionPin'
import ConfirmTransactionPin from './Pages/Authentication/SignUp/ConfirmTransactionPin'
import LogIn from './Pages/Authentication/SignIn/LogIn'
import ForgotPassword from './Pages/Authentication/SignIn/ForgotPassword'
import ResetPassword from './Pages/Authentication/SignIn/ResetPassword'
import Home from './Pages/HomeFlow/Home'
import AllActivities from './Pages/HomeFlow/Features/Notifications & Activities/AllActivites'
import Notifications from './Pages/HomeFlow/Features/Notifications & Activities/Notifications'
import TopUp from './Pages/HomeFlow/Features/TopUp'
import WithdrawMoney from './Pages/HomeFlow/Features/Transactions/WithdrawMoney'
import AuthorizeWithdrawal from './Pages/HomeFlow/Features/Transactions/AuthorizeWithdrawal'
import SelectDestination from './Pages/HomeFlow/Features/Transactions/SelectDestination'
import TransferAmount from './Pages/HomeFlow/Features/Transactions/TransferAmount'
import RecieverDetails from './Pages/HomeFlow/Features/Transactions/RecieverDetails'
import AuthorizeTransaction from './Pages/HomeFlow/Features/Transactions/AuthorizeTransaction'
import MyStakes from './Pages/TreasuryFlow/MyStakes'
import TreasuryMarket from './Pages/TreasuryFlow/Features/TreasuryMarket'
import NewStake from './Pages/TreasuryFlow/Features/NewStake'
import ActiveStakes from './Pages/TreasuryFlow/Features/ActiveStakes'
import ViewStake from './Pages/TreasuryFlow/Features/ViewStake'
import WithdrawStake from './Pages/TreasuryFlow/Features/WithdrawStake'
import Account from './Pages/AccountFLow/Account'
import EditProfile from './Pages/AccountFLow/Features/EditProfile'
import CompleteKYC from './Pages/AccountFLow/Features/CompleteKYC'
import ChangePassword from './Pages/AccountFLow/Features/ChangePassword'
import NewPin from './Pages/AccountFLow/Features/ChangePin/NewPin'
import CurrentPin from './Pages/AccountFLow/Features/ChangePin/CurrentPin'
import ConfirmPin from './Pages/AccountFLow/Features/ChangePin/ConfirmPin'
import { useEffect, useState } from 'react'
import { createBrowserHistory } from 'history'

function App() {
  const [animationState, setAnimationState] = useState(false);
  const [location, setLocation] = useState(window.location.pathname);
  // const location = useLocation();
  
  // useEffect(() => {
  //   const links = document.querySelectorAll('a');
  //   const app = document.querySelector('.App') as HTMLElement;
  //   links.forEach(link => {
  //     link.addEventListener('click', () => {
  //       setAnimationState(true);
  //       setLocation(window.location.pathname);

  //       setTimeout(() => {
  //         setAnimationState(false);
  //       }, 500);

  //     });
  //   });
  // }, [animationState, location]);

  return (
    <div className="App-background h-full absolute inset-0 w-screen flex justify-center bg-black transition-all duration-300 ">
      <div className={`App ${animationState ? 'animate' : ''} h-full max-h-[1000px] w-full max-w-[400px] relative text-white bg-[#121313] px-[10px] py-[15px] pb-[20px] `}>
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
              <Route path="/authorize-transaction" element={<AuthorizeTransaction />} />

              {/* Treasury Flow Pages */}
              <Route path="/my-stakes" element={<MyStakes />} />
              <Route path="/treasury-market" element={<TreasuryMarket />} />
              <Route path="/new-stake" element={<NewStake />} />
              <Route path="/active-stakes" element={<ActiveStakes />} />
              <Route path="/view-stake" element={<ViewStake />} />
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
