import Select from "./home-components/Select";
import Checkbox from "./home-components/Checkbox";
import { useState, useRef } from "react";
import { filterCityList } from "./helpers/filterCityList";
import AnimationLoading from "./home-components/AnimationLoading";
import Card from "./home-components/Card";

const Home = () => {
    const [formValues, setFormValues] = useState({
        continent: 'Any',
        weather: 'Any',
        travel_with_low_budget: false,
        hiking: false,
        city: false,
        mountain: false,
        beach: false,
        wine: false,
        wilderness: false,
        desert: false,
        forest: false,
        island: false,
        family_friendly: false,
        pet_friendly: false
    })
    const [filteredData, setFilteredData] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

    const animationRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()

        // Use requestAnimationFrame to ensure the scroll happens after the layout update
        requestAnimationFrame(() => {
            if (animationRef.current) {
                setTimeout(() => {
                    animationRef.current.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Small delay to ensure proper rendering before scroll
            }
        });

        setIsLoading(true);
        setShowResults(false);

        const filteredCities = filterCityList(formValues);
        setFilteredData(filteredCities);
        console.log(filteredCities)

        setTimeout(() => {
            setIsLoading(false);
            setShowResults(true);
        }, 2000);
    }
    const changeBoolValue = (keyName, bool) => {
        setFormValues((prev) => {
            return {...prev, [keyName]: bool}
        })
    }
    return (
        <div>
            <div className="relative">
                <div className="h-96 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#23310C]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold font-noto">Travel Destinations</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#23310C] relative mb-28 text-white font-noto flex-column"> 
                <form 
                    className="py-8 px-20 flex flex-wrap gap-3 justify-center"
                    onSubmit={handleSubmit}
                >
                    <div className="flex flex-wrap justify-center w-full gap-10 max-lg:gap-2">
                        <Select
                            label="Choose a continent"
                            selectId="continent"
                            optionsArray={[
                                {value: "Any", text: "Any"},
                                {value: "Africa", text: "Africa"},
                                {value: "Asia", text: "Asia"},
                                {value: "Europe", text: "Europe"},
                                {value: "North America", text: "North America"},
                                {value: "Oceania", text: "Oceania"},
                                {value: "South America", text: "South America"},
                            ]}
                            onChange={(selectedContinent) => setFormValues((prev) => {
                                return {...prev, continent: selectedContinent}
                            })}
                        />
                        <Select
                            label="Choose a temperature"
                            selectId="weather"
                            optionsArray={[
                                {value: "Any", text: "Any"},
                                {value: "hot", text: "HOT (above +30°C)"},
                                {value: "warm", text: "WARM (+15°C to +30°C)"},
                                {value: "chilly", text: "CHILLY (0°C to +15°C)"},
                                {value: "cold", text: "COLD (below 0°C)"},
                            ]}
                            onChange={(selectedWeather) => setFormValues((prev) => {
                                return {...prev, weather: selectedWeather}
                            })}
                        />
                    </div>
                    <div className="flex flex-wrap justify-center">
                        <Checkbox label="Low budget" onChange={(bool) => changeBoolValue('travel_with_low_budget', bool)} />
                        <Checkbox label="Hiking" onChange={(bool) => changeBoolValue('hiking', bool)}/>
                        <Checkbox label="City sightseeing" onChange={(bool) => changeBoolValue('city', bool)}/>
                        <Checkbox label="Mountain" onChange={(bool) => changeBoolValue('mountain', bool)} />
                        <Checkbox label="Beach" onChange={(bool) => changeBoolValue('beach', bool)} />
                        <Checkbox label="Wine" onChange={(bool) => changeBoolValue('wine', bool)} />
                        <Checkbox label="Wilderness" onChange={(bool) => changeBoolValue('wilderness', bool)}/>
                        <Checkbox label="Desert" onChange={(bool) => changeBoolValue('desert', bool)} />
                        <Checkbox label="Forest" onChange={(bool) => changeBoolValue('forest', bool)} />
                        <Checkbox label="Island" onChange={(bool) => changeBoolValue('island', bool)} />
                        <Checkbox label="Family-friendly" onChange={(bool) => changeBoolValue('family_friendly', bool)} />
                        <Checkbox label="Pet-friendly" onChange={(bool) => changeBoolValue('pet_friendly', bool)} />
                    </div>
                    <div className="my-10">
                        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-3xl max-sm:text-2xl px-10 py-4 m-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Let's Go!</button>
                    </div>
                </form>
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-[#23310C] to-transparent" />
            </div>
                {/* Loading Animation */}
                <div ref={animationRef}>
                    {isLoading && (
                        <AnimationLoading />
                    )}
                </div>

                {/* Display Filtered Cities */}
                {showResults && (
                    <>
                        <h2 className="w-full p-10 text-center text-4xl font-bold font-noto">Cities that match your selected criteria</h2>
                        <div className="flex flex-wrap justify-center gap-6 p-6">
                            {filteredData.length > 0 ? (
                                filteredData.map((city, index) => (
                                    <Card key={index} city={city} />
                                ))
                            ) : (
                                <p>Sorry, no cities match your criteria.</p>
                            )}
                        </div>
                    </>
                )}
        </div>
    );
}

export default Home;
