import { useState } from "react"

const Select = ({selectId, optionsArray, label, onChange}) => {
    const [selectedOption, setSelectedOption] = useState('')
    const handleChange = (e) => {
        setSelectedOption(e.target.value)
        console.log(`selected option is ${e.target.value}`)
        onChange(e.target.value)
    }
    return (
        <div className="flex flex-row max-sm:flex-col items-center justify-center m-3 w-96">
            <label htmlFor={selectId} className="flex justify-center my-3 text-md font-medium text-white-900 font-noto pr-2 w-96">{label}</label>
            <select 
                id={selectId} 
                className="block w-full max-sm:w-60 h-9 p-1 bg-green-100 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                // onChange={(e) => setSelectedOption(e.target.value)}
                onChange={handleChange}
            >
                {optionsArray.map((item) => {
                    return <option key={item.value} value={item.value}>{item.text}</option>
                })}
            </select>
        </div>
    )
}

export default Select

