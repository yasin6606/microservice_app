import React from "react";
import CustomButton from "../Components/CustomButton";
import axios from "axios";

const Rabbit = () => {
    const rabbitConn = async () => {
        try {
            const res = await axios.get("/api/rabbit");
            console.log(res.status)
            console.log(res.data)
        } catch (e) {
            console.error(e)
        }
    }

    return <>
        <div className="h-full flex justify-center items-center">
            <CustomButton title="Connect to Rabbit" handler={rabbitConn}/>
        </div>
    </>;
}

export default Rabbit;
