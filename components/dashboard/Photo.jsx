

const Photo=({userInfo})=>{

    return (
        <>
            <img src={userInfo.photoUrl} className=" rounded-full  border-3 border-black dark:border-white w-[250px] h-[250px] mx-auto mb-3" />
        </>
    )
}

export default Photo