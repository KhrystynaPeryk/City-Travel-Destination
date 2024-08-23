import Select from "./home-components/Select";
import Checkbox from "./home-components/Checkbox";
import { useState } from "react";

const Home = () => {
    const [formValues, setFormValues] = useState({
        continent: 'Any',
        weather: 'Any',
        lowBudget: false,
        hiking: false,
        citySightseeing: false,
        mountain: false,
        wine: false,
        wilderness: false,
        desert: false,
        forest: false,
        island: false,
        familyFriendly: false,
        petFriendly: false
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Let's go")
        console.log(formValues)
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
            <div className="bg-[#23310C] relative text-white font-noto flex-column"> 
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
                                {value: "africa", text: "Africa"},
                                {value: "asia", text: "Asia"},
                                {value: "europe", text: "Europe"},
                                {value: "northamerica", text: "North America"},
                                {value: "oceania", text: "Oceania"},
                                {value: "southamerica", text: "South America"},
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
                        <Checkbox label="Low budget" />
                        <Checkbox label="Hiking" />
                        <Checkbox label="City sightseeing" />
                        <Checkbox label="Mountain" />
                        <Checkbox label="Wine" />
                        <Checkbox label="Wilderness" />
                        <Checkbox label="Desert" />
                        <Checkbox label="Forest" />
                        <Checkbox label="Island" />
                        <Checkbox label="Family-friendly" />
                        <Checkbox label="Pet-friendly" />
                    </div>
                    <div>
                        <button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-md text-3xl max-sm:text-2xl px-10 py-4 m-5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Let's Go!</button>
                    </div>
                </form>
                <div className="absolute inset-x-0 h-24 bg-gradient-to-b from-[#23310C] to-transparent" />
            </div>
        </div>
    );
}

export default Home;
