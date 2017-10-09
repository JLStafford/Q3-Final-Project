import React, { Component } from 'react';
import { connect } from 'react-redux';

class OnePhoto extends Component {
  render () {
    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    photo: state.photos.filter(photo => photo.id === props.match.params.id)[0]
  }
}

export default connect(mapStateToProps, null)(OnePhoto);
