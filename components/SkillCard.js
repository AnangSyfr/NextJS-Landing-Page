const SkillCard = ({ name, level, image, imageClassName }) => {
    const imgClass = imageClassName ? `${imageClassName}` : "";
    return (
        <div className="md:w-3/12 w-full box-skills py-3 px-2 mx-4 mt-8">
            <div className="flex items-center">
                <div className="mr-5">
                    <img src={image} className={imgClass} />
                </div>
                <div>
                    <h1 className="font-bold text-xl">{name}</h1>
                    <p className="text-gray-600">{level}</p>
                </div>
            </div>
        </div>
    );
};

export default SkillCard;
