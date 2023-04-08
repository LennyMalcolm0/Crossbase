import ActionIcon from './ActionIcon';
import { createBrowserHistory } from 'history';

interface Props {
    main: string;
    details?: string;
}
const PageInformation = ({main, details}: Props) => {
    const history = createBrowserHistory();
    function returnToPreviousPage() {
        history.go(-1)
    };

    return ( 
         <div>
            {details ?
                <div>
                    <div onClick={returnToPreviousPage}>
                        <ActionIcon imageSource="Icons\backtrack.svg" />
                    </div>
                    <div className="mt-[10px] mb-[30px] ">
                        <div className="text-[24px] font-semibold ">{main}</div>
                        <div className="text-[12px] ">{details}</div>
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