import '../App.css';
import React, {Component} from 'react';
import Person from './Person';
import Month from './Month';

class Grafik extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='table'>
                <Month/>
                <Person color='true' name={'KK'}/>
                <Person name={'JK'}/>
                <Person color='true' name={'PK'}/>
                <Person name={'MR'}/>
                <Person color='true' name={'AK'}/>
                <Person name={'KO'}/>
                <Person color='true' name={'WP'}/>
                <Person name={'BW'}/>
                <Person color='true' name={'BP'}/>
                <Person name={'KZ'}/>
                <Person color='true' name={'JR'}/>
                <Person name={'SD'}/>
                <Person color='true' name={'PR'}/>
                <Person name={'CW'}/>
                <Person color='true' name={'ŁP'}/>
            </div>
        )
    }
}

export default Grafik;