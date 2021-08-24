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

export default class RadioButtons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            analysedData: [],
            twitterHandleInput: "",
            isLoading: false
        };
        this.onChangeValue = this.onChangeValue.bind(this);
    }


    onChangeValue(e) {
        console.log(e.target.value);
    }


    render() {
        return (
            <div onChange={this.onChangeValue}>
                <input type="radio" value="Male" name="gender" /> Male
                <input type="radio" value="Female" name="gender" /> Female
                <input type="radio" value="Other" name="gender" /> Other
            </div>
        );

    }
}
