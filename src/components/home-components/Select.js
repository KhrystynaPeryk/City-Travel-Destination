import { useState } from "react"

const Select = ({selectId, optionsArray, label}) => {
    return (
        <>
            <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 text-white">{label}</label>
            <select id={selectId} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {optionsArray.map((item) => {
                    return <option key={item.value} value={item.value}>{item.text}</option>
                })}
            </select>
        </>
    )
}

export default Select

