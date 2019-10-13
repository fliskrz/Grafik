import '../App.css';
import React, {Component} from 'react';
import Person from './Person'

class Grafik extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Person/>              
            </div>
        )
    }
}

export default Grafik;