import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ColoredIcon from './ColouredIcon.js';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles.css';

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
                            <ListGroup.Item><span className="tweets">Identity Attack: {props.label.identity_attack ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                            <ListGroup.Item><span className="tweets">Insult: {props.label.insult ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                            <ListGroup.Item><span className="tweets">Obscene: {props.label.obscene ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                            <ListGroup.Item><span className="tweets">Severe Toxicity: {props.label.severe_toxicity ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                            <ListGroup.Item><span className="tweets">Sexual Explicit: {props.label.sexual_explicit ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                            <ListGroup.Item><span className="tweets">Threat: {props.label.threat ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
                            <ListGroup.Item><span className="tweets">Toxicity: {props.label.toxicity ? <ColoredIcon color="red" /> : null}{'\n'}</span></ListGroup.Item>
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

/*
<Card
                    bg="danger"
                    text="white"
                    className="text-center"
                >
                    <Card.Header>Error</Card.Header>
                    <Card.Title>{props.errorMessage}</Card.Title>
                </Card>


*/