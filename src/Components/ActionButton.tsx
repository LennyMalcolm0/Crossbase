import { Link } from 'react-router-dom'

interface Props {
    buttonText: string;
    link: string;
}
const ActionButton = ({ buttonText, link }: Props) => {
    return ( 
        <div>
            <Link to={link}>
                <div className="w-full h-[48px] leading-[48px] rounded-[10px] bg-[#CCFF01] text-[#121313] font-bold text-center ">{buttonText}</div>
            </Link>
        </div>
    );
}
 
export default ActionButton;