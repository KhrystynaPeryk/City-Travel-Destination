import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import data from '../data.json'
import AnimationLoading from './home-components/AnimationLoading';
import { FaCheckCircle } from 'react-icons/fa';

const TrueBox = ({label}) => {
    return (
        <div className='flex justify-center items-center'>
            <FaCheckCircle className="text-green-500 w-5 h-5" />
            <div className='ml-2 text-black-600/75'>{label}</div>
        </div>
    )
}

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
        <div className='m-3'>
            <h1 className='mt-8 mb-6 mx-3 flex justify-center items-center text-4xl font-bold font-noto'>{city.cityName}</h1>
            <div className='flex justify-center items-center'>
                <img src={city.photoUrl} alt={city.cityName} className='w-96 h-96 m-4 rounded-md object-cover'/>
            </div>
            <div className='flex justify-center items-center flex-col leading-10 font-moto'>
                <div><span className='text-green-600/75 font-bold'>Country:</span> {city.country}</div>
                <div><span className='text-green-600/75 font-bold'>Continent:</span> {city.continent}</div>
                <div><span className='text-green-600/75 font-bold'>Best month to visit:</span> {city.best_month_to_visit}</div>
                {city.travel_with_low_budget && <TrueBox label={'Low budget'}/>}
                {city.visa_is_required && <TrueBox label={'Visa requirement'}/>}
                {city.hiking && <TrueBox label={'Hiking'}/>}
                {city.mountain && <TrueBox label={'Mountains'}/>}
                {city.forest && <TrueBox label={'Forest'}/>}
                {city.beach && <TrueBox label={'Beach'}/>}
                {city.island && <TrueBox label={'Island'}/>}
                {city.city && <TrueBox label={'City sightseeing'}/>}
                {city.wine && <TrueBox label={'Wine'}/>}
                {city.wilderness && <TrueBox label={'Wilderness'}/>}
                {city.desert && <TrueBox label={'Desert'}/>}
                {city.family_friendly && <TrueBox label={'Family-friendly'}/>}
                {city.pet_friendly && <TrueBox label={'Pet-friendly'} />}
            </div>
        </div>
    );
}

export default CityDetail