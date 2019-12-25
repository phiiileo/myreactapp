import React from "react"
import Header from "./App_header"
import Footer from "./App_footer"
import AppContent from "./APP_content"


 function Myapp()  {
   return (
      <div>
        <Header />
       <AppContent/>
       <Footer/>
      </div>
   )
   }


 export default Myapp;


/*import React from 'react';


class Car extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      model : "Mustang",
      year: 2014,
      color: "red",
    }
  }

  changeColor = () => {
    this.setState({color: "black"})
  }

    render (){
      return (
        <div>
            <h4>My car is a {this.state.model} , from {this.state.year} and a {this.state.color} color.</h4>
            <button onClick={this.changeColor}>Change Color</button>
        </div>
      )
    }
}


export default Car; */