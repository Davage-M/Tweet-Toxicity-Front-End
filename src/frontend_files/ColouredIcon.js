import React from 'react';
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { IconContext } from "react-icons";


export default function ColoredIcon(props) {

    return (
        <>
            <IconContext.Provider value={{ color: props.color, size: 20 }}>
                <BsFillExclamationTriangleFill />
            </IconContext.Provider>
        </>
    );
}