'use strict';

// import React, { Component } from "react";

class ShowText extends React.Component {
    render() {
        return (

            <h1>Hello Wolrd</h1>

        )
    }
}

const domContainer = document.querySelector('#text_Show');
ReactDOM.render(<ShowText />, domContainer);