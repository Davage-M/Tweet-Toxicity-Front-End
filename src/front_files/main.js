import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { getTweetData, parseAnalyzedData } from './utils.js';
import AnalysedTweets from './AnalysedTweet';
import './styles.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            analysedData: "",
            twitterHandleInput: "",
            isLoading: false
        };
        this.fetchData = this.fetchData.bind(this);
    }

    async fetchData() {
        try {
            console.log("Starting Fetch!!!!!");
            //this.setState({ isLoading: true });
            //console.log(`Fetching Data for ${this.state.twitterHandleInput}.........`);
            let tweetData = await getTweetData();
            if (!(tweetData)) {
                this.setState({ analysedData: "Uh oh something went wrong. The user you entered may not exist or their account may be private" });
                throw "User not found";
            }
            this.setState({ analysedData: parseAnalyzedData(tweetData) });
            //console.log(utils.parseAnalyzedData(tweetData));
            console.log("Data has been fetched");
        }
        catch (error) {
            //console.error(`Error: ${error}`);
            //console.error(error);
            console.error(`Uh oh something went wrong\n`);
        }
        //this.setState({ isLoading: false })
        console.log("Done fetching!");
        //<input id="twitterInput"></input>
    }

    render() {
        let tweets;
        if (this.state.analysedData) {
            tweets = <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>
        }
        else {
            tweets = null;
        }

        return (
            <Container>
                <Row>
                    <h1>Enter Twitter Handle</h1>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>

                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                size="lg"
                                readOnly={false}
                                id="twitterInput"
                            />
                        </InputGroup>
                    </Col>
                    <Col></Col>
                </Row>

                <Button variant="primary" onClick={this.fetchData}>Fetch Data</Button>{' '}
                <div>
                    <Row>
                        <Col></Col>
                        <Col>
                            <Card
                                bg="dark"
                                text="white"
                            >
                                <Card.Title>Analysed Tweets</Card.Title>
                                <Card.Text>
                                    <span id="tweets">{this.state.analysedData}</span>
                                </Card.Text>
                            </Card>
                        </Col>
                        <Col></Col>
                    </Row>

                </div>
            </Container>
        );
    }
}