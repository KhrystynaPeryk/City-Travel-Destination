import Select from "./home-components/Select";
import Checkbox from "./home-components/Checkbox";
const Home = () => {
    return (
        <div>
            <div className="relative">
                <div className="h-96 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"></div>
                <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-[#23310C]">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-4xl font-bold font-cabin">Travel Destinations</h1>
                    </div>
                </div>
            </div>
            <div className="bg-[#23310C] py-8 px-20 text-white font-cabin flex-column">
                <form className="px-10 flex flex-wrap gap-3 justify-center">
                    <div className="flex flex-wrap justify-center">
                    <Select
                        label="Choose a continent"
                        selectId="Continent"
                        optionsArray={[
                            {
                                value: "anyContinent",
                                text: "Any"
                            },
                            {
                                value: "africa",
                                text: "Africa"
                            },
                            {
                                value: "asia",
                                text: "Asia"
                            },
                            {
                                value: "europe",
                                text: "Europe"
                            },
                            {
                                value: "northamerica",
                                text: "North America"
                            },
                            {
                                value: "oceania",
                                text: "Oceania"
                            },
                            {
                                value: "southamerica",
                                text: "South America"
                            },
                        ]}
                    />
                    <Select
                        label="Choose a temperature"
                        selectId="Weather"
                        optionsArray={[
                            {
                                value: "anyTemperature",
                                text: "Any"
                            },
                            {
                                value: ">30",
                                text: "HOT - above +30C"
                            },
                            {
                                value: "15-30",
                                text: "WARM - from +15C to +30C"
                            },
                            {
                                value: "0-15",
                                text: "CHILLY - from 0C to +15C"
                            },
                            {
                                value: "<0",
                                text: "COLD - below 0"
                            },
                        ]}
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
                </form>
                <div className="w-1/2 px-10">
                        Animation
                </div>
            </div>
        </div>
    );
}

export default Home;
