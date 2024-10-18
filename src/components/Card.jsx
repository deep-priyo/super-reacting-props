
const Card = ({ name, profession, img }) => {

    return (
        <div className="w-52 bg-white rounded-md overflow-hidden">
            <div className="w-full h-40 bg-sky-200">
                <img className='w-full h-full object-center' src={img} alt="Image of person" />
            </div>
            <div className="w-full p-3 ">
                <h3 className="text-xl font-semibold">{name}</h3>
                <h5 className="text-xs">{profession}</h5>
                <button className="px-3 py-1 text-xs text-white bg-blue-500 rounded-md mt-3">Add Friend</button>
            </div>


        </div>
    );
};
src/
export default Card;
