import React from 'react';
import logo from './logo.svg';
import './App.css';
import CountryList from './Components/CountryList/CountryList'
import SearchBox from './Components/SearchBox/SearchBox'
class App extends React.Component{
  
  constructor(){
    super(); 
    this.state={ 
      countries : [] ,
      stats : [] ,
      searchField :"",
    }
    this.handleChange=this.handleChange.bind(this);
  }

  async componentDidMount(){    // componentdidmpunt calld immediately after component is mounted , here we use async await
     const resp= await fetch('https://api.covid19api.com/countries')
     console.log(resp)
     const countries= await resp.json();  // this is like the fulfill promise and return countries
     console.log("-------------------")
     console.log(countries)
     this.setState({countries})
     this.state.countries.forEach(async country=>{
      const resp= await fetch(`https://api.covid19api.com/total/country/${country.Slug}`) // we get data one by one for 3acg country ,so for ecah
      const data= await resp.json()
      if(data.length)
      this.setState(prevState=>(
        {stats:prevState.stats.concat({...data[data.length-1],CountryCode:country.ISO2})}  //to get recent data for that country which is last element in data array
      ))
     })
  }
  handleChange(e){
    this.setState({searchField:e.target.value})
  }
  render(){
      const {stats,searchField}=this.state
      const filteredCountries=stats.filter(country=>(
        country.Country.toLowerCase().includes(searchField.toLocaleLowerCase())
      ))
    return(
      <div className='App'>
         <SearchBox placeholder="Enter country" handleChange={(e)=>this.setState({searchField:e.target.value})}/>
         < CountryList  stats={filteredCountries} />
      </div>
    )
  }
}

export default App;
