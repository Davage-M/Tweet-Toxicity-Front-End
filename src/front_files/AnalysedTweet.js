import React from 'react';
import Card from 'react-bootstrap/Card';

export default function AnalysedTweets(props) {
    return (
        <>
            <Card>
                <Card.Title>Analysed Tweets</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>

            </Card>
        </>
    );
}