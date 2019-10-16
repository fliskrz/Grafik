import React from 'react';
import '../App.css';
import axios from 'axios';

class Person extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    getData = (() => {
        axios.get(`http://localhost:3000/grafik/1`)
            .then((res) => {
                this.setState({
                    data: res.data[0][this.props.name]
                })    
        })
    })()

    render() {

        if(this.state.data){
            let days = this.state.data.days.map((e,i) => <div className='day' key={i}>{e}</div>)

            return (
                <div className='row' style={this.props.color ? {backgroundColor:'lightblue'} : {}}>
                    <div className='name'>{this.state.data.name}</div>
                    <div className='days'>{days}</div>    
                </div>
            )
        }else{
            return <h2>Loading...</h2>
        }
    }
}

export default Person;