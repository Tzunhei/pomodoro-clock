import React from "react";
import { connect } from "react-redux";
import "./Quote.css";

import { fetchQuotes } from "../actions";

class Quote extends React.Component {
  displayQuote = () => {
    return (
      <>
        <p className="quote-text">" {this.props.quotes.text} "</p>
        <footer className="quote-author">
          - {this.props.quotes.author || "Unknown"}
        </footer>
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
        <blockquote>{this.displayQuote()}</blockquote>
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

export default connect(mapStateToProps, { fetchQuotes })(Quote);
