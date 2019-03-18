import React, { Component } from 'react';
import CountriesJson from './Countries.json';
import './Countries.css';

class Countries extends Component {
    state={ countries: CountriesJson }

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
