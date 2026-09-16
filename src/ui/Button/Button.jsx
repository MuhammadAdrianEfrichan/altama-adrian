const Button =(props)=>{
    const {children,className} = props;
    return <button className={`bg-primary text-white text-[24px] w-50.75 h-15.25 rounded-[72px] cursor-pointer ${className}`}>
        {children} {">"}
    </button>
}

export default Button