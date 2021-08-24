import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import Card from 'react-bootstrap/Card';
import { getTweetData, parseAnalyzedData } from './utils.js';
import AnalysedTweets from './AnalysedTweet';
import './styles.css';
import ColoredIcon from './ColouredIcon.js';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            analysedData: [],
            twitterHandleInput: "",
            isLoading: false,
            showAllTweets: true
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeValue = this.onChangeValue.bind(this);

    }

    async fetchData(twitterHandle, showAllTweets) {
        try {
            //console.log("Starting Fetch!!!!!");
            //this.setState({ isLoading: true });
            //console.log(`Fetching Data for ${this.state.twitterHandleInput}.........`);
            this.setState({ isLoading: true });
            let tweetData = await getTweetData(twitterHandle);
            if (!(tweetData)) {
                this.setState({ analysedData: "Uh oh something went wrong. The user you entered may not exist or their account may be private" });
                throw new Error("User not found");
            }

            if (!(showAllTweets)) {
                tweetData = parseAnalyzedData(tweetData);
            }

            this.setState({ analysedData: tweetData });
            console.log("Data has been fetched");
        }
        catch (error) {
            //console.error(`Error: ${error}`);
            //console.error(error);
            console.error(`Uh oh something went wrong The user you entered may not exist or their account may be private\n`);
        }
        //this.setState({ isLoading: false })
        this.setState({ isLoading: false });
        console.log("Done fetching!");
        //<input id="twitterInput"></input>
    }

    handleSubmit(e) {
        this.setState({ twitterHandleInput: e.value });
        console.log(this.state.twitterHandleInput);
    }

    onChangeValue(e) {

        if (e.target.value === "flagged") {
            this.setState({ showAllTweets: false });
        }
        else {
            this.setState({ showAllTweets: true });
        }

        //console.log(this.state.showAllTweets)
    }



    render() {
        let tweets = [];
        //let stuff = [<AnalysedTweets text="{this.state.analysedData}"></AnalysedTweets>, <AnalysedTweets text="{this.state.analysedData}"></AnalysedTweets>, <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>, <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>, <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>];
        if (Array.isArray(this.state.analysedData) && this.state.analysedData.length > 0) {
            //let tweets = [];
            ///tweets = <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>
            //this.state.analysedData.map((variant, idx) => (
            //    <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>
            //));
            //console.log("There is stuff");
            for (const tweet of this.state.analysedData) {
                console.log(tweet);
                let cardTweet = <AnalysedTweets text={tweet.text} label={tweet.label} id={tweet.id} username={this.state.twitterHandleInput}></AnalysedTweets>
                //console.log(tweet.label.identity_attack);
                tweets.push(cardTweet);
            }
            //console.log("Tweets: ");
            //console.log(tweets);
        }
        else {
            tweets = [];
        }

        return (
            <Container>
                <Row>
                    <h1>Tweet Toxicity Analyzer</h1>
                </Row>
                <Row>
                    <h4>Enter Twitter Handle</h4>
                    <ColoredIcon color="red" />
                </Row>

                <Row>
                    <div onChange={this.onChangeValue} className="containerDiv">
                        <div className="childDiv">
                            <div className="pull-left">
                                <input type="radio" value="all" name="displayTweets" defaultChecked /> All Tweets
                            </div>
                            <div className="pull-left">
                                <input type="radio" value="flagged" name="displayTweets" /> Only Flagged Tweets
                            </div>
                        </div>
                    </div>
                </Row>

                <Row>
                    <Col></Col>
                    <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>

                            <FormControl
                                type="text"
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                size="lg"
                                readOnly={false}
                                onChange={(event) => { this.setState({ twitterHandleInput: event.target.value }); }}
                            />
                        </InputGroup>
                    </Col>
                    <Col></Col>
                </Row>
                <Button variant="primary" disabled={this.state.isLoading} value={this.state.twitterHandleInput} onClick={(e) => { this.fetchData(e.target.value, this.state.showAllTweets); console.log(this.state.twitterHandleInput); }}>{(this.state.isLoading) ? "Loading...." : "Fetch Data"}</Button>{' '}
                <div>
                    <Row>
                        <Col></Col>
                        <Col>
                            {tweets.map((tweet, idx) => (
                                <div key={idx}>{tweet}</div>
                            ))}
                        </Col>
                        <Col></Col>
                    </Row>

                </div>
            </Container >
        );
    }
}



/*
this.setState({
  arrayvar: [...this.state.arrayvar, newelement]
})

this.setState(prevState => ({
  arrayvar: [...prevState.arrayvar, newelement]
}))
<Button variant="primary" value={this.state.twitterHandleInput} onClick={(e) => { this.fetchData(e.target.value); console.log(this.state.twitterHandleInput); }}>Fetch Data</Button>{' '}
*/