import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { bindActionCreators } from 'redux';
import { Button, ButtonGroup, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';


class EditPhoto extends Component {
  render () {
    return (
      <Form >
        <Col md="12" className="edit-form" >
          <Row>
            <FormGroup>
              <Label htmlFor="">url: </Label>
              <Input type="text" name="url" id="url" placeholder={this.props.photo ? this.props.photo.url : null} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Title: </Label>
              <Input type="text" name="title" id="title" placeholder={this.props.photo ? this.props.photo.title : null} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Description: </Label>
              <Input type="text" name="description" id="description" placeholder={this.props.photo ? this.props.photo.description : null} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Camera: </Label>
              <Input type="text" name="camera" id="camera" placeholder={this.props.photo ? this.props.photo.camera : null} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Lens: </Label>
              <Input type="text" name="lens" id="lens" placeholder={this.props.photo ? this.props.photo.lens : null} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">ISO: </Label>
              <Input type="text" name="iso" id="iso" placeholder={this.props.photo ? this.props.photo.iso : null} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Aperture: </Label>
              <Input type="text" name="aperture" id="aperture" placeholder={this.props.photo ? this.props.photo.aperture : null} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Shutter Speed: </Label>
              <Input type="text" name="shutter_speed" id="shutter_speed" placeholder={this.props.photo ? this.props.photo.shutter_speed : null} />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="">Zoom: </Label>
              <Input type="text" name="zoom" id="zoom" placeholder={this.props.photo ? this.props.photo.zoom : null} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <Label htmlFor="">Location: </Label>
              <Input type="text" name="location" id="location" placeholder={this.props.photo ? this.props.photo.location : null} />
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


export default connect(mapStateToProps, null)(EditPhoto)