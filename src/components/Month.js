import React from 'react';
import '../App.css';

class Month extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {

        function getDayOfWeek(date) {
            var dayOfWeek = new Date(date).getDay();    
            return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
        }
        
        let month = new Date().getMonth();
        let days = [];
        for(let i=0; i<31; i++){
            if(getDayOfWeek('2019-'+(month+1)+'-'+(i+1))==='Saturday' || getDayOfWeek('2019-10-'+(i+1))==='Sunday'){
                days.push(<div className='day weekend' key={i}>{i+1}</div>)
            }else{
                days.push(<div className='day' key={i}>{i+1}</div>)
            }
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