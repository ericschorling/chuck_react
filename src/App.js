import React, {Component} from 'react';
import QuoteGen from './components/QuoteGen'
import Categories from './components/Categories'
import './App.css';

class App extends Component {
  state={
    quote: '',
    categories: [],
    category: 'dev'
  }
  getQuote = async () =>{
    const quote = await fetch(`https://api.chucknorris.io/jokes/random?category=${this.state.category}`)
    const response = quote.json()
    return response
  }
  getCategories = async () => {
    const response = await fetch(`https://api.chucknorris.io/jokes/categories`)
    const categories = response.json()
    return categories 
  }
  clickHandler = async () =>{
    const quote = await this.getQuote()
    this.setState({
      quote: quote.value
    })
  }
  changeHandler = async (event) =>{
    console.log(event.target.value)
    this.setState({
      category: event.target.value
    }) 
  }
  async componentDidMount(){
    const quote = await this.getQuote();
    const categories = await this.getCategories();
    this.setState({
      quote: quote.value,
      categories: categories
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Quote Generator</h1>
        </header>
        <select onChange={this.changeHandler}><Categories categories={this.state.categories} /></select>
        <button onClick={this.clickHandler}>More Chuck</button>
        <QuoteGen quote={this.state.quote}/>
      </div>
    );
  }
}

export default App;
