import '../App.css';
import React, {Component} from 'react';

class Grafik extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let days = [];
        for(let i=0; i<31; i++){
            days.push(i+1);
        }

        return (
            <div>
                <div className='days'>
                    <div className='name'></div>
                    {days.map(e => <div className='day'>{e}</div>)}
                </div>
                <div className='person'>
                    <div className='name'>Beata Wienckowska</div>
                    {days.map(e => <div className='day'></div>)}
                </div>
                <div className='person'>
                    <div className='name'>Joanna Krakowiak</div>
                    {days.map(e => <div className='day'></div>)}
                </div>
                <div className='person'>
                    <div className='name'>Adrian Kruk</div>
                    {days.map(e => <div className='day'></div>)}
                </div>                
            </div>
        )
    }
}

export default Grafik;