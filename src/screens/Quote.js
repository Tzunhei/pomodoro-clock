import React from "react";
import { connect } from "react-redux";
import "./Quote.css";

import { fetchQuotes } from "../actions";
import { generateRandomIndex } from "../utils";

class Quote extends React.Component {
  displayRandomQuote = () => {
    const randomIndex = generateRandomIndex(this.props.quotes);
    const randomQuote = this.props.quotes[randomIndex];
    return (
      <>
        <p className="quote-text">" {randomQuote.text} "</p>
        <footer className="quote-author">- {randomQuote.author}</footer>
      </>
    );
  };

  componentDidMount() {
    this.props.fetchQuotes();
  }

  render() {
    return !this.props.quotes ? (
      <div className="quote-container">
        <p>Loading ...</p>
      </div>
    ) : (
      <div className="quote-container">
        <blockquote>{this.displayRandomQuote()}</blockquote>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quotes: state.quotes.quotes,
    isLoading: state.quotes.isLoading,
    error: state.quotes.error
  };
};

export default connect(
  mapStateToProps,
  { fetchQuotes }
)(Quote);
