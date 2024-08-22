import { useState } from "react"

const Select = ({selectId, optionsArray, label}) => {
    return (
        <div className="flex flex-row max-sm:flex-col items-center justify-center max-sm:items-start m-3 w-80 lg:w-96">
            <label htmlFor={selectId} className="block my-3 text-sm font-medium text-white-900 font-cabin pr-3 w-64">{label}</label>
            <select id={selectId} className="block w-full max-sm:w-64 h-9 p-2 bg-green-100 border border-gray-300 text-gray-700 text-sm rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {optionsArray.map((item) => {
                    return <option key={item.value} value={item.value}>{item.text}</option>
                })}
            </select>
        </div>
    )
}

export default Select

