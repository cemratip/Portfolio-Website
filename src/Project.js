export default function Project(props) {
    const details = props.props;
    return (
        <div className='projectItems grid-item relative w-[275px] h-[235px] flex flex-col space-y-3 p-5 border-[10px] border-[#EA4C89] rounded-[25px]'>
            <p>{details.name}</p>
            <div className='flex space-x-3 justify-center absolute inset-x-0 bottom-24'>
                {details.skillIcons}
            </div>
            <div className='flex space-x-3 justify-center absolute inset-x-0 bottom-5'>
                {details.thirdPartyButtons}
            </div>
        </div>
    );
}