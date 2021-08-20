import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredIcon from './ColouredIcon.js';
import './styles.css';

export default function AnalysedTweets(props) {

    useEffect(() => console.log(props.label.identity_attack));

    return (
        <>
            <Card
            //bg="dark"
            //text="white"
            >
                <Card.Title>Analysed Tweet</Card.Title>
                <Card.Body>
                    <Card.Text>
                        <Card.Title>
                            <span id="tweets">{props.text + '\n'}</span>
                        </Card.Title>
                        <span id="tweets">Identity Attack: {props.label.identity_attack ? <ColoredIcon color="red" /> : '\n'}</span>
                        <span id="tweets">Insult: {props.label.insult ? <ColoredIcon color="red" /> : '\n'}</span>
                        <span id="tweets">Obscene: {props.label.obscene ? <ColoredIcon color="red" /> : '\n'}</span>
                        <span id="tweets">Severe Toxicity: {props.label.severe_toxicity ? <ColoredIcon color="red" /> : '\n'}</span>
                        <span id="tweets">Sexual Explicit: {props.label.sexual_explicit ? <ColoredIcon color="red" /> : '\n'}</span>
                        <span id="tweets">Threat: {props.label.threat ? <ColoredIcon color="red" /> : '\n'}</span>
                        <span id="tweets">Toxicity: {props.label.toxicity ? <ColoredIcon color="red" /> : ''}</span>
                    </Card.Text>
                    <Button href={"https://twitter.com/draynilla/status/" + props.id}>Link</Button>
                </Card.Body>
            </Card>

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