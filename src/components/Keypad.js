import React, { Component } from 'react';

export default class Keypad extends Component {
    
    handleKeyUp = () => (
        console.log('Entering password...')
    )

    render() {
        return (
            <input onKeyUp={handleKeyUp} type="password" />
        )
    }
}// Code Keypad Component Here
