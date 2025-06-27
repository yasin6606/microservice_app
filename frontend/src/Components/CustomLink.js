import React from "react";
import {Link} from "react-router-dom";

const CustomLink = ({title, to}) => {
    return <>
        <div className="py-2">
            <Link
                to={to}
                className="text-green-800 hover:text-blue-600 transition-colors duration-300 font-light text-lg tracking-wide">
                {title}
            </Link>
        </div>
    </>
}

export default CustomLink;
