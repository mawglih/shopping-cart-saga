import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchProductsInit,
} from 'actions';

class Home extends Component {
  componentDidMount() {
    this.props.fetchProductsInit()
  }

  render() {
    return(
      <div>
        Home
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProductsInit,
}

export default connect(null, mapDispatchToProps)(Home);