const Checkbox = ({label}) => {
    return (
        <div className="flex items-center m-3 w-40">
            <input id={label} type="checkbox" value={label} className="w-9 h-9 appearance-none bg-green-100 border border-green-300 rounded focus:ring-green-500 checked:bg-green-600 checked:border-green-600 focus:ring-2 focus:ring-offset-0 checked:ring-0 checked:before:content-['✓'] checked:before:block checked:before:text-white checked:before:text-center checked:before:font-bold checked:before:text-lg"/>
            <label htmlFor={label} className="pl-3 text-sm font-medium text-white-900 dark:text-gray-300">{label}</label>
            </div>
    )
}

export default Checkbox