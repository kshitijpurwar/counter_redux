import React from 'react';
import { connect } from 'react-redux'

const Count = ({ count }) => <h1> {count} </h1>;

const mapStateToProps = state => {
    return { count: state }
}

export default connect(mapStateToProps)(Count);