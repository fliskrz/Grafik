import React from 'react';
import '../App.css';

class Month extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        let days = [];
        for(let i=0; i<31; i++){
            days.push(<div className='day' key={i}>{i+1}</div>)
        }
        return (
            <div className='days'>
                <div className='name'></div>
                {days}
            </div>
        )
    }
}

export default Month;