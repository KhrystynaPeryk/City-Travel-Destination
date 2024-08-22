const Checkbox = ({label}) => {
    return (
        <div className="flex items-center m-3 ">
            <input id={label} type="checkbox" value={label} className="w-9 h-9 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
            <label htmlFor={label} className="pl-3 text-sm font-medium text-white-900 dark:text-gray-300">{label}</label>
            </div>
    )
}

export default Checkbox