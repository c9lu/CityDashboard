import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Square from './Square';
import $ from "jquery";
import { Observable, just,Subject, ReplaySubject, from, of, range, timer, pipe , interval} from 'rxjs';

var Rx= require("rxjs/Rx")

class App extends Component {

  state = {cities:[]};
  results = [];

  componentDidMount(){
     

      var citiesArray = [{"city": "Toronto" ,"country":"CA"},{"city":"Chicago","country":"US"}, {"city":"Tokyo","country":"JP"},
      {"city":"Beijing", "country": "CN"}, {"city":"Shanghai","country":"CN"},{"city":"Paris","country":"FR"},
      {"city":"Ottawa","country":"CA"},
      {"city":"Vancouver", "country":"CA"},{"city":"Nice", "country":"FR"}, {"city":"Montreal","country":"CA"},{"city":"Washington","country":"US"}];

      var self = this;
      let timeUrl= "http://vip.timezonedb.com/v2.1/get-time-zone?key=D8D8JJNTAOLC&format=json&by=city&city=";
      let weatherURL = "http://api.openweathermap.org/data/2.5/weather?appid=3339efa2e2e6a13c4522b8aff7c159fe&q=";
       Rx.Observable.interval(6000)
      .mergeMap(()=>Rx.Observable.from(citiesArray))
      .mergeMap((cityCountry)=>Rx.Observable.forkJoin(
        Rx.Observable.from( $.get(timeUrl + cityCountry.city  +"&country="+cityCountry.country)), 
        Rx.Observable.from($.get(weatherURL+cityCountry.city+","+ cityCountry.country)
      )))
      .map(
        
        result => {
          
           var _time = result[0].zones[0].formatted
           var _city = result[0].zones[0].cityName
           var foundIndex = self.results.findIndex(x => x.name == _city);
         
                     
           var _temp = result[1].main.temp;
           if(foundIndex == -1) self.results.push({name:_city, time:_time, temperature:_temp})//foundIndex = 0;
           else self.results[foundIndex] = {name:_city, time:_time, temperature:_temp};
        }
      ).subscribe(
          ()=>{self.setState({cities: self.results})} 
      );
     
              
  
}
  render() {
 
    var self = this;
 
 return(
   <div>{
   self.state.cities.map(function(city)
   {
     return <div>{city.name}<br/>{city.time}<br/>
     {city.temperature}</div>
  
     })
    
    
    }</div>
 );
    
}
}
export default App;
