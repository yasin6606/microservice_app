const CustomButton = ({title, handler}) => {
    return <>
        <div className="py-2">
            <button
                type="button"
                className="px-6 py-3 w-auto rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-101 focus:outline-none focus:ring-4 focus:ring-pink-300"
                onClick={() => handler()}
            >
                {title}
            </button>
        </div>
    </>
}

export default CustomButton;
