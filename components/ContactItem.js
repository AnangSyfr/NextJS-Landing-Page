const ContactItem = ({ icon, title, subtitle }) => {
    return (
        <div className="flex items-center mt-8">
            <div className="w-1/12">
                <img src={icon} className="w-full" />
            </div>
            <div className="w-9/12 ml-5">
                <h1 className="font-bold">{title}</h1>
                <p className="text-gray-600">{subtitle}</p>
            </div>
        </div>
    );
};

export default ContactItem;
