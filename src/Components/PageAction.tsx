interface paProps {
    main: string;
    details: string;
}
const PageAction = ({main, details}: paProps) => {
    return ( 
         <div className="mt-[20px] mb-[40px] ">
            <div className="text-[24px] font-semibold ">{main}</div>
            <div className="text-[12px] ">{details}</div>
         </div>
    );
}
 
export default PageAction;