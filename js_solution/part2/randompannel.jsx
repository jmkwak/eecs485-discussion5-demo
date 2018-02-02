import React from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';


class RandomPannel extends React.Component {
  /* 
  Display a list of random words and a button to generate new random words. 
  */

  constructor(props) {
    // Initialize immutable properties and mutable state
    super(props);
    this.state = { message: "" };
    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {
    // Call REST API to get a random word
    fetch(this.props.url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        console.log(data.random_message);
        this.setState({
          message: data.random_message
        });
      })
      .catch(error => console.log(error)); // eslint-disable-line no-console
  }


  render() {
    // Render button and word list
    return (
      <div>
        {this.state.message}
      </div>
      <ul>
      <li><RandomWidget url = "/api/v1/random/"></li>
      <li><RandomWidget url = "/api/v1/random/"></li>
      </ul>
    );
  }
}

RandomWidget.propTypes = {
  url: PropTypes.string.isRequired,
};

export default RandomWidget;
