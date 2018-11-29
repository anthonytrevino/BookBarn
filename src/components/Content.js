import React, { Component } from 'react';
import './Content.css'
const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"

export class Content extends Component {

  constructor(props) {
    super(props)

    // initialize the State
    this.state = {
      books : [],

    }
    fetch(BOOKS_URL)
    .then(result => result.json())
    .then(data =>this.setState({books:data}))
  }

  render(){
    let bookItems =this.state.books.map(function(book,index){
      return <li key ={index} >
      <img className ="book-image" src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} alt="book images" />
      <label>{book.title}</label>
      </li>
    })

    return (
      <div>
        <h1>Genres</h1>
          <div>
            <input type="text" placeholder="Find a genre by name" />
          </div>
          <div>
            <h3> Best books of the month October 2018</h3>
          </div>
          <div class="booklist">
            Booklist populates here {bookItems}
          </div>

      </div>
    )
  }
}
