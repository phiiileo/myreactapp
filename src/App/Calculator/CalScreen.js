import React, { Component } from 'react'

export default class CalScreen extends Component {
    render() {
        return (
            <div className="">
               <input 
               value ={this.props.inputValue}
               type="text" 
               className="screen" 
               id="showCal"  disabled/> 

               <input
               value ={this.props.value}
               type="text" 
               className="screen" 
               id="showResult"  disabled/> 
            </div>
        )
    }
}
