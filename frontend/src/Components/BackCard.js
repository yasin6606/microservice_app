import React from "react";

const BackCard = ({children}) => {
    return <>
        <div className="h-full flex flex-row justify-center items-center">
            <div
                className={`border-2 border-blue-900 rounded shadow-2xl w-auto h-fit ${children[1] && children[1].props && children[1].props.children.length > 2 ? "max-xl:h-3/4" : ""} max-md:w-full p-2 mx-3 flex flex-col text-center`}>
                {children}
            </div>
        </div>
    </>;
}

export default BackCard;
