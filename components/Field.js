const Field = ({ label, type, name, className }) => {
    const inputClass = className ? ` ${className} ` : "";

    return (
        <div className="mt-5">
            <h2 className="block font-bold">{label}</h2>
            {type == "text" ? (
                <input
                    id={name}
                    name={name}
                    className={`w-full p-3 mt-2 outline-none ${inputClass}`}
                />
            ) : type == "textarea" ? (
                <textarea
                    id={name}
                    name={name}
                    className={`w-full p-3 mt-2 outline-none ${inputClass}`}
                />
            ) : (
                ""
            )}
        </div>
    );
};

export default Field;
