import AppNavigationBar from '../../Components/AppNavigationBar';
import { Helmet } from 'react-helmet';

const TreasuryDefault = () => {

    return (
        <> 
        <Helmet>
            <title>Treasury</title>
        </Helmet>
        <div className="h-full flex flex-col justify-between">
            <div>
                <div className=" w-fit p-[5px] gap-[5px] rounded-[25px] mx-auto bg-[#1F1F1E] flex text-[14px] text-[#D9D9D9] ">
                    <div className="active navigate-treasury-page w-[140px] py-[13px] rounded-[25px] text-center bg-[#121313] text-[#CCFF01] ">My Stakes</div>
                    <div className="navigate-treasury-page w-[140px] py-[13px] rounded-[25px] text-center hover:bg-[#121313] hover:text-[#CCFF01] ">Treasury Market</div>
                </div>
            </div>

            <div className="w-full sticky bottom-[-1px] ">
                <AppNavigationBar activePage="treasury" />
            </div>
        </div>
        </> 
    );
}
 
export default TreasuryDefault;