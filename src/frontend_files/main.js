import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { getTweetData, parseAnalyzedData } from './utils.js';
import AnalysedTweet from './AnalysedTweet.js';
import './styles.css';
import ColoredIcon from './ColouredIcon.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            analysedData: [],
            twitterHandleInput: "",
            isLoading: false,
            showAllTweets: false,
            pagination: 0
        };
        this.fetchData = this.fetchData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeQueryValue = this.onChangeQueryValue.bind(this);
        this.onChangePaginationValue = this.onChangePaginationValue.bind(this);

    }

    async fetchData(twitterHandle, showAllTweets, pagination) {
        try {

            //this.setState({ isLoading: true });
            //console.log(`Fetching Data for ${this.state.twitterHandleInput}.........`);
            this.setState({ isLoading: true });
            let tweetData = await getTweetData(twitterHandle, pagination);
            if (typeof tweetData === "string") {
                console.log(`tweetData: ${tweetData}`);
                this.setState({ analysedData: tweetData });
                throw new Error(tweetData);
            }

            if (!(showAllTweets)) {
                tweetData = parseAnalyzedData(tweetData);
                if (typeof tweetData === "string") {
                    this.setState({ analysedData: tweetData });
                    throw new Error(tweetData);
                }
            }
            //console.log(tweetData);
            this.setState({ analysedData: tweetData });
            console.log("Data has been fetched");
        }
        catch (error) {
            //console.error(`Error: ${error}`);
            //console.error(error);
            console.error(error);
            //this.setState({ analysedData: error })
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

    onChangeQueryValue(e) {

        if (e.target.value === "all") {
            this.setState({ showAllTweets: true });
        }
        else {
            this.setState({ showAllTweets: false });
        }

        //console.log(this.state.showAllTweets)
    }

    onChangePaginationValue(e) {

        if (e.target.value === "yesPagination") {
            this.setState({ pagination: 1 });
        }
        else {
            this.setState({ pagination: 0 });
        }
    }

    componentDidUpdate(e) {
        //console.log(this.state.analysedData);
    }



    render() {
        let tweets = [];
        if (Array.isArray(this.state.analysedData) && this.state.analysedData.length > 0) {
            tweets = [];
            ///tweets = <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>
            //this.state.analysedData.map((variant, idx) => (
            //    <AnalysedTweets text={this.state.analysedData}></AnalysedTweets>
            //));
            //console.log("There is stuff");
            for (const tweet of this.state.analysedData) {
                //console.log(tweet);
                let cardTweet = <AnalysedTweet text={tweet.text} label={tweet.label} id={tweet.id} username={this.state.twitterHandleInput}></AnalysedTweet>
                //console.log(tweet.label.identity_attack);
                tweets.push(cardTweet);
            }
            //console.log("Tweets: ");
            console.log(tweets);
        }
        else if (typeof this.state.analysedData === "string") {
            tweets = [];
            let errorTweet = <AnalysedTweet error={true} errorMessage={this.state.analysedData}></AnalysedTweet>
            tweets.push(errorTweet);
            //console.log(tweets);
        }

        return (
            <>
                <Container>
                    <Row>
                        <h1>Tweet Toxicity Analyzer</h1>
                    </Row>
                    <Row>
                        <h4>Enter Twitter Handle</h4>
                        <ColoredIcon color="red" />
                    </Row>

                    <Row>
                        <Col>
                            <div onChange={this.onChangeQueryValue} className="containerDiv">
                                <div className="childDiv">
                                    <div className="pull-left">
                                        <input type="radio" value="flagged" name="displayTweets" defaultChecked /> Only Flagged Tweets

                                    </div>
                                    <div className="pull-left">
                                        <input type="radio" value="all" name="displayTweets" /> All Tweets
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <hr />
                        </Col>
                        <Col></Col>
                    </Row>

                    <Row>
                        <Col>
                            <div onChange={this.onChangePaginationValue} className="containerDiv">
                                <div className="childDiv">
                                    <div className="pull-left">
                                        <input type="radio" value="noPagination" name="pagination" defaultChecked /> Most recent 100 tweets
                                    </div>
                                    <div className="pull-left">
                                        <input type="radio" value="yesPagination" name="pagination" /> Most recent 3200 tweets (90+ seconds)
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>@</InputGroup.Text>

                                <FormControl
                                    type="text"
                                    placeholder="Username"
                                    aria-label="Username"
                                    size="lg"
                                    readOnly={false}
                                    onChange={(event) => { this.setState({ twitterHandleInput: event.target.value }); }}
                                />
                            </InputGroup>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Button variant="primary" disabled={this.state.isLoading} value={this.state.twitterHandleInput} onClick={(e) => { this.fetchData(e.target.value, this.state.showAllTweets, this.state.pagination); }}>{(this.state.isLoading) ? "Loading...." : "Fetch Data"}</Button>{' '}

                    <Row>

                        <Col xs={4}></Col>
                        <Col xs={4}>
                            {tweets.map((tweet, idx) => (
                                <span key={idx}>{tweet}</span>
                            ))}
                        </Col>
                        <Col xs={4}></Col>

                    </Row>


                </Container >
            </>
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