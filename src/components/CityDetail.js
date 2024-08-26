import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import data from '../data.json'
import AnimationLoading from './home-components/AnimationLoading';
const CityDetail = () => {
    const {path} = useParams()
    console.log(path)
    const [city, setCity] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const cityId = parseInt(path, 10);
        const filteredData = data.filter((city) => city.id == cityId);
        const [filteredCity] = filteredData;
        setCity(filteredCity);
        setIsLoading(false); 
    }, [path]);

    if (isLoading) {
        return <AnimationLoading />;
    }

    if (!city) {
        return <div>City not found.</div>; // Handle the case where the city is not found
    }

    return (
        <div>
            <div>
                <img src={city.photoUrl} alt={city.cityName} className='rounded-full w-96 h-96 object-cover object-center'/>
            </div>
            <h1>{city.cityName}</h1>
            
        </div>
    );
}

export default CityDetail