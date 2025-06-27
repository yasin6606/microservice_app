import React from "react";

const CustomInput = ({title, state, setState}) => {
    return <>
        <div className="w-full max-w-md space-y-2 py-2 px-3 flex">
            <label className="block text-bold font-medium text-blue-800 content-center text-left pr-4 capitalize flex-1">{title}</label>
            <input
                type={title}
                value={state}
                onChange={(e) => setState(e.target.value)}
                required={true}
                className="w-fit px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-300 shadow-xl hover:shadow-2xl"
            />
        </div>
    </>
}

export default CustomInput;
