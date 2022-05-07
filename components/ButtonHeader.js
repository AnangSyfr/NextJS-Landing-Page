const ButtonHeader = (props) => {
    const { className, variant, pill, children, withAction } = props;
    const addClassName = className ? ` ${className} ` : "";
    const variants = {
        "outline-yellow":
            "border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black",
        yellow: "bg-yellow-500 hover:bg-yellow-600 text-black",
        black: "bg-gray-800 hover:bg-gray-500 text-white",
    };
    const pickedVariant = variants[variant];
    const pilled = pill ? "rounded-full" : "";
    // console.log(action);
    const handleClick = () => {
        props.showPopUp();
    };
    return withAction ? (
        <a
            className={`transition cursor-pointer py-3 px-10 font-semibold text-lg  inline-block ${pilled} ${pickedVariant} ${addClassName}`}
            onClick={handleClick}
        >
            {children}
        </a>
    ) : (
        <a
            className={`transition cursor-pointer py-3 px-10 font-semibold text-lg  inline-block ${pilled} ${pickedVariant} ${addClassName}`}
        >
            {children}
        </a>
    );
};

export default ButtonHeader;
