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
                    className={`  ${!freind ? 'text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2' : 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2'} mt-3`}
                >
                    {freind ? "Friends" : "Add Friends"}
                </button>
            </div>
        </div>
    );
};

export default Card;
