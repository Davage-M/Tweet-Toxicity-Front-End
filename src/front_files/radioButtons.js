import React, { Component } from 'react';
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
