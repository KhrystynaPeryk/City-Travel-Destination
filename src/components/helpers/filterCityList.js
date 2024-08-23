import data from '../../data.json'

const getSeason = () => {
    const month = new Date().getMonth() + 1; // getMonth() is zero-based
    if (month >= 3 && month <= 5) return 'spring';
    if (month >= 6 && month <= 8) return 'summer';
    if (month >= 9 && month <= 11) return 'autumn';
    return 'winter';
};

const getTemperatureRange = (weather) => {
    switch (weather) {
        case 'hot':
            return { min: 30, max: Infinity };
        case 'warm':
            return { min: 15, max: 30 };
        case 'chilly':
            return { min: 0, max: 15 };
        case 'cold':
            return { min: -Infinity, max: 0 };
        default:
            return { min: -Infinity, max: Infinity };
    }
};

export const filterCityList = (formValuesObj) => {
    const season = getSeason();
    console.log('season ---> ', season)
    const temperatureField = `average_temperature_in_${season}`;
    const temperatureRange = getTemperatureRange(formValuesObj.weather);
    console.log('temperatureRange ---> ', temperatureRange)
    const filteredCities = data.filter((city) => {
        // Filter by continent if specified
        if (formValuesObj.continent !== 'Any' && city.continent !== formValuesObj.continent) {
            return false;
        }

        // Filter by weather if specified
        if (formValuesObj.weather !== 'Any') {
            const cityTemp = parseInt(city[temperatureField], 10);
            if (cityTemp < temperatureRange.min || cityTemp >= temperatureRange.max) {
                return false;
            }
        }

        // Filter by boolean properties
        for (const [key, value] of Object.entries(formValuesObj)) {
            if (typeof value === 'boolean' && value && city[key] !== value) {
                return false;
            }
        }

        return true;
    });

    return filteredCities;
};
