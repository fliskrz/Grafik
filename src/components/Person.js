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

    handleEdit = (e) => {
        // let days = [];
        // let inputs = [];
        let edit = document.createElement('div');
        let row1 = document.createElement('div');
        let row2 = document.createElement('div');
        let name = document.createElement('h2');
        name.innerText = this.state.data.name;
        row1.className = 'row';
        row2.className = 'row';
        edit.appendChild(row1);
        edit.appendChild(row2);
        edit.className = 'edit';
        for(let i=1; i<=31; i++){
            let day = document.createElement('span');
            day.key = i;
            day.innerText = i;
            day.className = 'day big';
            let input = document.createElement('input');
            input.key = i;
            input.type = 'text';
            input.className = 'day big';
            edit.firstElementChild.appendChild(day);
            edit.lastElementChild.appendChild(input);
        }
        edit.insertBefore(name, edit.firstElementChild);
        e.currentTarget.parentElement.parentElement.parentElement.appendChild(edit);      
    }


    render() {

        function getDayOfWeek(date) {
            var dayOfWeek = new Date(date).getDay();    
            return isNaN(dayOfWeek) ? null : ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
        }

        let month = new Date().getMonth();
        let days = [];
        if(this.state.data){
            for(let i=0; i<31; i++){
                if(getDayOfWeek('2019-'+(month+1)+'-'+(i+1))==='Saturday' || getDayOfWeek('2019-10-'+(i+1))==='Sunday'){
                    days.push(<div className='day weekend' key={i}>{this.state.data.days[i]}</div>)
                }else{
                    days.push(<div className='day' key={i}>{this.state.data.days[i]}</div>)
                }
            }
            // let days = this.state.data.days.map((e,i) => <div className='day' key={i}>{e}</div>)

            return (
                <div className='row' style={this.props.color ? {backgroundColor:'lightblue'} : {}}>
                    <div className='name'>{this.state.data.name}<button onClick={this.handleEdit}>EDIT</button></div>
                    <div className='days'>{days}</div>    
                </div>
            )
        }else{
            return <h2>Loading...</h2>
        }
    }
}

export default Person;