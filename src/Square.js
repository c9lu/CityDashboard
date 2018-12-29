import React, {Component} from 'react'

import $ from "jquery";

class Square extends Component{

    state = {
        city:'',
        time:'',
        temperature:''
    }
    constructor(props){
        this.setState({

            city: props.city
            
        }) ;
        this.setState({
            time:props.time
        });
        this.setState({
            temperature:props.temperature
        })
    
    }

    render(){
        return(
        <div>
            <div><span>{this.state.city}</span></div>
            <div><span>{this.state.time}</span></div>
        </div>
        );
    }

}