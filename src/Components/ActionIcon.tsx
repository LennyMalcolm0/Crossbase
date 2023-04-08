interface Props {
    imageSource: string
}
const ActionIcon = ({imageSource}: Props) => {
    return ( 
        <div className="rounded-full h-[44px] w-[44px] bg-[#1F1F1E] flex items-center justify-center ">
            <img src={imageSource} alt="" />
        </div>
     );
}
 
export default ActionIcon;