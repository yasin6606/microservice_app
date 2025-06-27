import React from "react";

const BackCardContent = ({children}) => {
    return <>
        <div
            className={`flex ${children.length > 2 ? "flex-col" : "max-md:flex-col"} items-center justify-center max-md:justify-start max-md:w-full overflow-y-auto`}
        >
            {children}
        </div>
    </>;
}

export default BackCardContent;
