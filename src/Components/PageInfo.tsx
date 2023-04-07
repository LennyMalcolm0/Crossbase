import Backtrack from './Backtrack';

interface Props {
    main: string;
    details?: string;
}
const PageAction = ({main, details}: Props) => {
    return ( 
         <div>
            {details ?
                <div>
                    <Backtrack />
                    <div className="mt-[10px] mb-[30px] ">
                        <div className="text-[24px] font-semibold ">{main}</div>
                        <div className="text-[12px] ">{details}</div>
                    </div> 
                </div>
                :
                <div className="flex items-center">
                    <Backtrack />
                    <div className="text-[24px] font-semibold grow text-center ">{main}</div>
                </div>
            }
         </div>
    );
}
 
export default PageAction;