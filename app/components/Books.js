import React form 'react';
import $ from 'jquery';

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.getBooks = this.getBooks.bind(this);
    this.books = this.books.bind(this);
    this.state = { books: [] }
  }

  getBooks(e) {
    e.preventDefault()
    $.ajax({
      url: `/books/${this.refs.handle.value}`,
      type: 'GET',
    }).done( books => {
      this.setState({ books });
      this.refs.tweetForm.reset();
    });
  }
  tweets() {
    return this.state.books.map( book => {
      return (<li className="collection-item" key={book.id}>{book.text}</li>);
    });
  }

  render() {
    return (
      <div>
        <h3 className="text-center">Books</h3>
        <form ref="bookForm" onSubmit={this.getBooks}>
          <input ref="profile" placeholder="profile" />
        </form>
        <ul className="collection">
          {this.books()}
        </ul>
      </div>
    )
  }
}

export default Books;
