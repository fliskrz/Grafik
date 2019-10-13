import React from 'react';
import '../App.css';
import axios from 'axios';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            JK: ''
        }
    }

    getData = (() => {
        axios.get(`http://localhost:3000/grafik/1`)
            .then((res) => {
                this.setState({
                    JK: res.data[0].Joanna_Krakowiak
                })    
        })
    })()

    render() {

        return (
            <div>{this.state.JK.days}</div>    
        )
    }
}

export default Person;