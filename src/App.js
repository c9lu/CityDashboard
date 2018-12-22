import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square';
import $ from "jquery";
import { Observable, just,Subject, ReplaySubject, from, of, range, timer, pipe , interval} from 'rxjs';

var Rx= require("rxjs/Rx")

class App extends Component {

  
  componentWillMount(){
  /*  const squareClicks = Rx.Observable.fromEvent($(".square"), 'click');
    squareClicks.subscribe(event => {
        alert(event);
    })
    */
    //interval.subscribe()
  
  }
  componentDidMount(){
     
    const interval = Rx.Observable.interval(1000);
    var citiesArray = [{"city": "Toronto" ,"country":"CA"},{"city":"Chicago","country":"US"}];

    Rx.Observable.from(citiesArray).mergeMap(
      (cityCountry)=>Rx.Observable.interval(1000)
    )
    .mergeMap((cityCountry)=>{
        alert(cityCountry.city)
    })    
    .subscribe(
      function(){
      //alert('hi');
      }
    );
   
  }
  render() {
 //   var cities = Rx.Observable.from([1,2,3]);
    
  //   cities.subscribe(function(){
 return(
  
  <div class="row">
   
      <div className="App">
      
        <Square city="Toronto" countryCode="CA" ></Square>
        <Square city="Chicago" countryCode="US" ></Square>
        <Square city="Beijing" countryCode="CN"></Square>
        <Square city="Vancouver" countryCode="CA"></Square>
        <Square city="Ottawa" countryCode = "CA"></Square>
        <Square city="Washington" countryCode="US"></Square>
        <Square city="Paris" countryCode="FR"></Square>
        <Square city="Tokyo" countryCode="JP"></Square>
        <Square city="Shanghai" countryCode="CN"></Square>

        
      </div>
  

   <div className="App">
   
     <Square city="Toronto" countryCode="CA" ></Square>
     <Square city="Chicago" countryCode="US" ></Square>
     <Square city="Beijing" countryCode="CN"></Square>
     <Square city="Vancouver" countryCode="CA"></Square>
     <Square city="Ottawa" countryCode = "CA"></Square>
     <Square city="Washington" countryCode="US"></Square>
     <Square city="Paris" countryCode="FR"></Square>
     <Square city="Tokyo" countryCode="JP"></Square>
     <Square city="Shanghai" countryCode="CN"></Square>

     
   </div>

   <div className="App">
   
     <Square city="Toronto" countryCode="CA" ></Square>
     <Square city="Chicago" countryCode="US" ></Square>
     <Square city="Beijing" countryCode="CN"></Square>
     <Square city="Vancouver" countryCode="CA"></Square>
     <Square city="Ottawa" countryCode = "CA"></Square>
     <Square city="Washington" countryCode="US"></Square>
     <Square city="Paris" countryCode="FR"></Square>
     <Square city="Tokyo" countryCode="JP"></Square>
     <Square city="Shanghai" countryCode="CN"></Square>

     
   </div>

   <div className="App">
   
     <Square city="Toronto" countryCode="CA" ></Square>
     <Square city="Chicago" countryCode="US" ></Square>
     <Square city="Beijing" countryCode="CN"></Square>
     <Square city="Vancouver" countryCode="CA"></Square>
     <Square city="Ottawa" countryCode = "CA"></Square>
     <Square city="Washington" countryCode="US"></Square>
     <Square city="Paris" countryCode="FR"></Square>
     <Square city="Tokyo" countryCode="JP"></Square>
     <Square city="Shanghai" countryCode="CN"></Square>

     
   </div>

 
   
      <div className="App">
      
        <Square city="Toronto" countryCode="CA" ></Square>
        <Square city="Chicago" countryCode="US" ></Square>
        <Square city="Beijing" countryCode="CN"></Square>
        <Square city="Vancouver" countryCode="CA"></Square>
        <Square city="Ottawa" countryCode = "CA"></Square>
        <Square city="Washington" countryCode="US"></Square>
        <Square city="Paris" countryCode="FR"></Square>
        <Square city="Tokyo" countryCode="JP"></Square>
        <Square city="Shanghai" countryCode="CN"></Square>

        
      </div>
  

   <div className="App">
   
     <Square city="Toronto" countryCode="CA" ></Square>
     <Square city="Chicago" countryCode="US" ></Square>
     <Square city="Beijing" countryCode="CN"></Square>
     <Square city="Vancouver" countryCode="CA"></Square>
     <Square city="Ottawa" countryCode = "CA"></Square>
     <Square city="Washington" countryCode="US"></Square>
     <Square city="Paris" countryCode="FR"></Square>
     <Square city="Tokyo" countryCode="JP"></Square>
     <Square city="Shanghai" countryCode="CN"></Square>

     
   </div>

   <div className="App">
   
     <Square city="Toronto" countryCode="CA" ></Square>
     <Square city="Chicago" countryCode="US" ></Square>
     <Square city="Beijing" countryCode="CN"></Square>
     <Square city="Vancouver" countryCode="CA"></Square>
     <Square city="Ottawa" countryCode = "CA"></Square>
     <Square city="Washington" countryCode="US"></Square>
     <Square city="Paris" countryCode="FR"></Square>
     <Square city="Tokyo" countryCode="JP"></Square>
     <Square city="Shanghai" countryCode="CN"></Square>

     
   </div>

   <div className="App">
   
     <Square city="Toronto" countryCode="CA" ></Square>
     <Square city="Chicago" countryCode="US" ></Square>
     <Square city="Beijing" countryCode="CN"></Square>
     <Square city="Vancouver" countryCode="CA"></Square>
     <Square city="Ottawa" countryCode = "CA"></Square>
     <Square city="Washington" countryCode="US"></Square>
     <Square city="Paris" countryCode="FR"></Square>
     <Square city="Tokyo" countryCode="JP"></Square>
     <Square city="Shanghai" countryCode="CN"></Square>

     
   </div>

</div>
 );
    
  
  
}
}
export default App;
