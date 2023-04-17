import ActionIcon from './ActionIcon';
import { createBrowserHistory } from 'history';

interface Props {
    main: string;
    details?: string;
    dontGoBackInHistory?: boolean
}
const PageInformation = ({main, details, dontGoBackInHistory}: Props) => {
    const history = createBrowserHistory();

    function returnToPreviousPage() {
        if (!dontGoBackInHistory) {
            history.go(-1)
        }
    }

    return ( 
         <div>
            {details ?
                <div>
                    <div className="w-fit" onClick={returnToPreviousPage}>
                        <ActionIcon imageSource="Icons\backtrack.svg" />
                    </div>
                    <div className="mt-[10px] mb-[30px] ">
                        <div className="text-[24px] font-semibold ">{main}</div>
                        <div className="text-[12px] text-12 ">{details}</div>
                    </div> 
                </div>
                :
                <div className="flex items-center mb-[20px] ">
                    <div onClick={returnToPreviousPage}>
                        <ActionIcon imageSource="Icons\backtrack.svg" />
                    </div>
                    <div className="text-[24px] font-semibold grow text-center ">{main}</div>
                </div>
            }
         </div>
    );
}
 
export default PageInformation;