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
        // PROBLEM IS BELOW - IT DOES NOT FIND CORRECT CITY.ID SEE THE CONSOLE
        const filteredData = data.filter((city) => {
            console.log('city.id', city.id)
            return city.id === path
        });
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
            <h1>{city.cityName}</h1>
            {/* Other city details here */}
        </div>
    );
}

export default CityDetail