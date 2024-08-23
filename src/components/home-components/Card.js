const Card = ({ city }) => {
    return (
        <div className="bg-white mb-10 w-1/3 shadow rounded-lg overflow-hidden relative group">
            <div className="relative">
                <img src={city.photoUrl} className="object-cover h-52 w-full" alt={city.cityName} />
                <div className="absolute inset-0 bg-gray-800 opacity-50 group-hover:opacity-0 transition-opacity duration-300"></div>
                <h3 className="absolute inset-0 flex items-center justify-center text-white font-bold text-3xl font-noto">{city.cityName}</h3>
            </div>
        </div>
    );
};

export default Card