const Card = ({ values, func, index }) => {
    const { name, profession, img, freind } = values; // Note: using `freind` instead of `friends`

    return (
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-40 bg-sky-200">
                <img className="w-full h-full object-center" src={img} alt="Image of person" />
            </div>
            <div className="w-full p-3">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                <button
                    onClick={() => func(index)}
                    className={`px-3 py-1 text-xs text-white  ${freind ? 'bg-blue-500' : 'bg-green-500'} rounded-md mt-3`}
                >
                    {freind ? "Friends" : "Add Friends"}
                </button>
            </div>
        </div>
    );
};

export default Card;
