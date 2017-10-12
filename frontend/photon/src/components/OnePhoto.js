import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup, Container, Row, Col } from 'reactstrap';
import { editPhoto, deletePhoto } from '../actions/photos';


class OnePhoto extends Component {

  editPhoto = (id) => {
    this.props.editPhoto(id);
    this.props.history.push('/photos');
  }

  deletePhoto = (id) => {
    this.props.deletePhoto(id);
    this.props.history.push('/photos');
  }


  render () {
    console.log('props', this.props.photo);

    return (
      <Container className="container-fluid">
        <Row>
          <Col md="2" className="left-col">
            <br/>
            <h4>{this.props.photo ? this.props.photo.title : null}</h4>
            <p>{this.props.photo ? this.props.photo.description : null}</p>
            <hr/>
            <p>Body: {this.props.photo ? this.props.photo.camera : null}</p>
            <p>Lens: {this.props.photo ? this.props.photo.lens : null}</p>
            <p>ISO: {this.props.photo ? this.props.photo.iso : null}</p>
            <p>Aperture: {this.props.photo ? this.props.photo.aperture : null}</p>
            <p>Shutter Speed: {this.props.photo ? this.props.photo.shutter_speed : null}</p>
            <p>Zoom: {this.props.photo ? this.props.photo.zoom : null}</p>
            <p>Location: {this.props.photo ? this.props.photo.location : null}</p>
            <ButtonGroup size="sm">
              <Button href={`/photos/${this.props.photo ? this.props.photo.id : null}/edit`}>Edit</Button>
              <Button href="/photos/">Delete</Button>
            </ButtonGroup>
          </Col>
          <Col md="10" className="right-col">
            <img className="single-photo" src={this.props.photo ? this.props.photo.url : null} alt={this.props.photo ? this.props.photo.description : null}/>
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => {
  console.log('state', state)
  return {
    photo: state.photos.filter(photo => photo.id == props.match.params.id)[0]
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    editPhoto: bindActionCreators(editPhoto, dispatch),
    deletePhoto: bindActionCreators(deletePhoto, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(OnePhoto);
