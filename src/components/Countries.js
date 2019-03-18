import React, { Component } from 'react';
import './Countries.css'
class Countries extends Component {
    state={
        countries:
        [{"name": "USA", "code": "USA", "population": 325704000},
        {"name": "Serbia", "code": "SRB", "population": 702200},
        {"name": "Hungary", "code": "HUN", "population": 9781000},
        {"name": "Croatia", "code": "CRO", "population": 4154000},
        {"name": "United Kongdom", "code": "GBR", "population": 66040000},
        {"name": "Italy", "code": "ITA", "population": 60590000},
        {"name": "France", "code": "FRA", "population": 67100000}]
    }
    removeItem=(index)=>{
        let newArray=this.state.countries
        newArray.splice(index,1)
        this.setState({countries:newArray})
    }
  render() {
        let countries=this.state.countries.map(
			  (country,index)=>(
            <div className="asd col-3" key={index}>
                <h3>{country.name}</h3>
                <p>{country.code}</p>
                <p>Population {country.population}</p>
                <img src={`http://www.knxplaza.com/itobuka/testznanja/${country.code.toLocaleLowerCase()}.jpg`} alt='{country.code}' onClick={()=>this.removeItem(index)}/>
            </div>
        )
		  )
    return (

      <div className="Countries container">
      <div className='row'>
      {countries}

      </div>
      </div>
    );
  }
}

export default Countries;
