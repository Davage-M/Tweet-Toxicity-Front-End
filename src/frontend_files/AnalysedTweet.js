import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredIcon from './ColouredIcon.js';
import ListGroup from 'react-bootstrap/ListGroup';

export default function AnalysedTweet(props) {

    if (!(props.error)) {
        return (
            <>
                <Card
                    //bg="dark"
                    //text="white"
                    className="text-center"
                >
                    <Card.Title>Analysed Tweet</Card.Title>
                    <Card.Title>
                        <span id="tweets">{props.text + ''}</span>
                    </Card.Title>
                    <Card.Body>
                        <ListGroup>
                            <ListGroup.Item><span>Identity Attack: {props.label.identity_attack ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                            <ListGroup.Item><span>Insult: {props.label.insult ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                            <ListGroup.Item><span>Obscene: {props.label.obscene ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                            <ListGroup.Item><span>Severe Toxicity: {props.label.severe_toxicity ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                            <ListGroup.Item><span>Sexual Explicit: {props.label.sexual_explicit ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                            <ListGroup.Item><span>Threat: {props.label.threat ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                            <ListGroup.Item><span>Toxicity: {props.label.toxicity ? <ColoredIcon color="red" /> : null}</span></ListGroup.Item>
                        </ListGroup>
                        <Button href={"https://twitter.com/" + props.username + "/status/" + props.id}>Link to tweet</Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
    else {
        return (
            <>
                <Card
                    bg="danger"
                    text="white"
                    className="text-center"
                >
                    <Card.Header>Error</Card.Header>
                    <Card.Title>{props.errorMessage}</Card.Title>
                </Card>
            </>
        )
    }
}