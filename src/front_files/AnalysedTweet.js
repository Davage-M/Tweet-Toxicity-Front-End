import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
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
                        <span id="tweets">Identity Attack: {props.label.identity_attack + '\n'}</span>
                        <span id="tweets">Insult: {props.label.insult + '\n'}</span>
                        <span id="tweets">Obscene: {props.label.obscene + '\n'}</span>
                        <span id="tweets">Severe Toxicity: {props.label.severe_toxicity + '\n'}</span>
                        <span id="tweets">Sexual Explicit: {props.label.sexual_explicit + '\n'}</span>
                        <span id="tweets">Threat: {props.label.threat + '\n'}</span>
                        <span id="tweets">Toxicity: {props.label.toxicity + '\n'}</span>
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