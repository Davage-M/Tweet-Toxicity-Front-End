import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredIcon from './ColouredIcon.js';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css';

export default function AnalysedTweets(props) {

    useEffect(() => console.log(props.username));

    return (
        <>
            <Card
                //bg="dark"
                //text="white"
                className="text-center"
            >
                <Card.Title>Analysed Tweet</Card.Title>
                <Card.Title>
                    <span id="tweets">{props.text + '\n'}</span>
                </Card.Title>
                <Card.Body>
                    <ListGroup>
                        <ListGroup.Item><span id="tweets">Identity Attack: {props.label.identity_attack ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                        <ListGroup.Item><span id="tweets">Insult: {props.label.insult ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                        <ListGroup.Item><span id="tweets">Obscene: {props.label.obscene ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                        <ListGroup.Item><span id="tweets">Severe Toxicity: {props.label.severe_toxicity ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                        <ListGroup.Item><span id="tweets">Sexual Explicit: {props.label.sexual_explicit ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                        <ListGroup.Item><span id="tweets">Threat: {props.label.threat ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                        <ListGroup.Item><span id="tweets">Toxicity: {props.label.toxicity ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                    </ListGroup>
                    <Button href={"https://twitter.com/" + props.username + "/status/" + props.id}>Link to tweet</Button>
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
/*
<Card.Text>
                        <span id="tweets">Identity Attack: {props.label.identity_attack ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                        <span id="tweets">Insult: {props.label.insult ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                        <span id="tweets">Obscene: {props.label.obscene ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                        <span id="tweets">Severe Toxicity: {props.label.severe_toxicity ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                        <span id="tweets">Sexual Explicit: {props.label.sexual_explicit ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                        <span id="tweets">Threat: {props.label.threat ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                        <span id="tweets">Toxicity: {props.label.toxicity ? <ColoredIcon color="red" /> : null}{'\n'}</span>
                    </Card.Text>



*/