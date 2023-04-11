import AppNavigationBar from '../../Components/General Components/AppNavigationBar';
import { Helmet } from 'react-helmet';
import { Routes, Route, Link } from 'react-router-dom';
import MyStakes from './MyStakes';

const Treasury = () => {

    return (
        <>
        <Helmet>
            <title>My Stakes</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className=" w-fit p-[5px] gap-[5px] rounded-[25px] mx-auto bg-[#1F1F1E] flex text-[14px] text-[#D9D9D9] ">
                    <Link to="/treasury/my-stakes" 
                        className="active navigate-treasury-page w-[140px] py-[13px] rounded-[25px] text-center bg-[#121313] text-[#CCFF01] ">My Stakes
                    </Link>
                    <Link to="/treasury/treasury-market" 
                        className="navigate-treasury-page w-[140px] py-[13px] rounded-[25px] text-center hover:bg-[#121313] hover:text-[#CCFF01] ">Treasury Market
                    </Link>
                </div>
                <Routes>
                    <Route path="/my-stakes" element={<MyStakes />} />
                </Routes>
            </div>

            <div className="w-full sticky bottom-[-1px] ">
                <AppNavigationBar activePage="treasury" />
            </div>
        </div>
        </> 
    );
}
 
export default Treasury;