import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { editAPhoto } from '../actions/photos';


class EditPhoto extends Component {

  state = {
    url: '',
    title: '',
    description: '',
    camera: '',
    lens: '',
    iso: '',
    aperture: '',
    shutter_speed: '',
    zoom: '',
    location: ''
  }

  editPhoto = (photo) => {
    this.props.editAPhoto(photo, this.props.match.params.id);

    console.log('editPhoto', photo)
  }

  render () {
    return (
      <Form onSubmit={(e) => this.editPhoto(e, this.state)} >
        <Col md="12" className="edit-form" >
          <Row>
            <FormGroup>
              <Label htmlFor="">url: </Label>
              <Input type="text" name="url" id="url" placeholder={this.props.photo ? this.props.photo.url : null} onChange={(e) => this.setState({url:e.target.value})} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Title: </Label>
              <Input type="text" name="title" id="title" placeholder={this.props.photo ? this.props.photo.title : null} onChange={(e) => this.setState({title:e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Description: </Label>
              <Input type="text" name="description" id="description" placeholder={this.props.photo ? this.props.photo.description : null} onChange={(e) => this.setState({description:e.target.value})} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Camera: </Label>
              <Input type="text" name="camera" id="camera" placeholder={this.props.photo ? this.props.photo.camera : null} onChange={(e) => this.setState({camera:e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Lens: </Label>
              <Input type="text" name="lens" id="lens" placeholder={this.props.photo ? this.props.photo.lens : null} onChange={(e) => this.setState({lens:e.target.value})} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">ISO: </Label>
              <Input type="text" name="iso" id="iso" placeholder={this.props.photo ? this.props.photo.iso : null} onChange={(e) => this.setState({iso:e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Aperture: </Label>
              <Input type="text" name="aperture" id="aperture" placeholder={this.props.photo ? this.props.photo.aperture : null} onChange={(e) => this.setState({aperture:e.target.value})} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Shutter Speed: </Label>
              <Input type="text" name="shutter_speed" id="shutter_speed" placeholder={this.props.photo ? this.props.photo.shutter_speed : null} onChange={(e) => this.setState({shutter_speed:e.target.value})} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Zoom: </Label>
              <Input type="text" name="zoom" id="zoom" placeholder={this.props.photo ? this.props.photo.zoom : null} onChange={(e) => this.setState({zoom:e.target.value})} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Location: </Label>
              <Input type="text" name="location" id="location" placeholder={this.props.photo ? this.props.photo.location : null} onChange={(e) => this.setState({location:e.target.value})} />
            </FormGroup>
          </Row>
          <Button color="faded" >Submit</Button>
        </Col>
      </Form>
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
    editAPhoto: bindActionCreators(editAPhoto, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditPhoto)