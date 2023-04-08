import ActionIcon from './ActionIcon';

interface Props {
    main: string;
    details?: string;
}
const PageInfo = ({main, details}: Props) => {
    return ( 
         <div>
            {details ?
                <div>
                    <ActionIcon imageSource="Icons\backtrack.svg" />
                    <div className="mt-[10px] mb-[30px] ">
                        <div className="text-[24px] font-semibold ">{main}</div>
                        <div className="text-[12px] ">{details}</div>
                    </div> 
                </div>
                :
                <div className="flex items-center mb-[30px] ">
                    <ActionIcon imageSource="Icons\backtrack.svg" />
                    <div className="text-[24px] font-semibold grow text-center ">{main}</div>
                </div>
            }
         </div>
    );
}
 
export default PageInfo;