import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { getTweetData, parseAnalyzedData } from './utils.js';
import AnalysedTweet from './AnalysedTweet.js';
import ColoredIcon from './ColouredIcon.js';
import './styles.css';



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
        this.onChangeQueryValue = this.onChangeQueryValue.bind(this);
        this.onChangePaginationValue = this.onChangePaginationValue.bind(this);

    }

    async fetchData(twitterHandle, showAllTweets, pagination) {
        try {
            this.setState({ isLoading: true });
            let tweetData = await getTweetData(twitterHandle, pagination);

            if (typeof tweetData === "string") {
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

            this.setState({ analysedData: tweetData });
        }
        catch (error) {
            //console.error(`Error: ${error}`);
            //this.setState({ analysedData: error });
        }
        this.setState({ isLoading: false });
    }


    onChangeQueryValue(e) {
        if (e.target.value === "all") {
            this.setState({ showAllTweets: true });
        }
        else {
            this.setState({ showAllTweets: false });
        }

    }

    onChangePaginationValue(e) {

        if (e.target.value === "yesPagination") {
            this.setState({ pagination: 1 });
        }
        else {
            this.setState({ pagination: 0 });
        }
    }


    render() {
        let tweets = [];
        if (Array.isArray(this.state.analysedData) && this.state.analysedData.length > 0) {
            tweets = [];
            for (const tweet of this.state.analysedData) {

                let cardTweet = <AnalysedTweet text={tweet.text} label={tweet.label} id={tweet.id} username={this.state.twitterHandleInput}></AnalysedTweet>

                tweets.push(cardTweet);
            }

        }
        else if (typeof this.state.analysedData === "string") {
            tweets = [];
            let errorTweet = <AnalysedTweet error={true} errorMessage={this.state.analysedData}></AnalysedTweet>
            tweets.push(errorTweet);

        }

        return (
            <>
                <Container>
                    <Row>
                        <div className="containerDiv">
                            <div className="leftAlign">
                                <div>
                                    <span>Link to <a href="https://www.github.com/Davage-M/Tweet-Toxicity-API">API github repo</a></span>
                                </div>
                                <div>
                                    <span>Link to <a href="https://www.github.com/Davage-M/Tweet-Toxicity-Front-End">front end github repo</a></span>
                                </div>
                            </div>
                        </div>
                    </Row>

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
                                <div className="leftAlign">
                                    <div>
                                        <input type="radio" value="flagged" name="displayTweets" defaultChecked /> Only Flagged Tweets
                                    </div>
                                    <div>
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
                                <div className="leftAlign">
                                    <div>
                                        <input type="radio" value="noPagination" name="pagination" defaultChecked /> Most recent 100 tweets
                                    </div>
                                    <div>
                                        <input type="radio" value="yesPagination" name="pagination" /> Most recent 3200 tweets (long)
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col></Col>
                        <Col>
                            <InputGroup>
                                <InputGroup.Text>@</InputGroup.Text>
                                <FormControl
                                    type="text"
                                    placeholder="Twitter Handle"
                                    aria-label="Twitter Handle"
                                    size="lg"
                                    //readOnly={false}
                                    onChange={(event) => { this.setState({ twitterHandleInput: event.target.value }); }}
                                />
                            </InputGroup>
                        </Col>
                        <Col></Col>
                    </Row>

                    <Button variant="primary" disabled={this.state.isLoading} value={this.state.twitterHandleInput} onClick={(e) => { this.fetchData(e.target.value, this.state.showAllTweets, this.state.pagination); }}>{(this.state.isLoading) ? `Searching ${this.state.twitterHandleInput}'s tweets.....` : "Search Tweets"}</Button>{' '}

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