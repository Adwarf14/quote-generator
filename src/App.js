import React from "react";
import "./App.css";
import QuotesSimpson from "./components/QuotesSimpson";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {}
    };
    this.getQuote();
    this.getQuote = this.getQuote.bind(this);
  }

  getQuote() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quote: data[0]
        });
      });
  }

  render() {
    return (
      <div className="App">
        <QuotesSimpson quote={this.state.quote} />
        <button type="button" onClick={this.getQuote}>
          Get Quote
        </button>
      </div>
    );
  }
}

export default App;
