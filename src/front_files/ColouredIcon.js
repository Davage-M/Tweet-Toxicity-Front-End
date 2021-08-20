import React, { useState, useEffect } from 'react';
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import './styles.css';

export default function ColoredIcon(props) {

    return (
        <>
            <IconContext.Provider value={{ color: props.color, size: 20 }}>
                <BsFillExclamationTriangleFill />
            </IconContext.Provider>
        </>
    );
}

/*
<Card
                                bg="dark"
                                text="white"
                            >
                                <Card.Title>Analysed Tweets</Card.Title>
                                <Card.Text>
                                    <span id="tweets">{this.state.analysedData}</span>
                                </Card.Text>
                            </Card> */