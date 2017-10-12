import React, { Component } from 'react';
// https://redux-form.com/7.1.0/docs/gettingstarted.md/
import { Field, reduxForm } from 'redux-form';
// https://reactstrap.github.io/
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addAPhoto } from '../actions/photos';

class NewPhoto extends Component {

  addPhoto = (shop) => {
    this.props.addAPhoto(shop);
    this.props.history.push('/photos');
  }

  render () {
    return (
      <Form onSubmit={this.props.handleSubmit(this.addPhoto)} >
        <FormGroup>
          <Label htmlFor="">url: </Label>
          <Field className="form-control" name="url" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Title: </Label>
          <Field className="form-control" name="title" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Description: </Label>
          <Field className="form-control" name="description" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Camera: </Label>
          <Field className="form-control" name="camera" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Lens: </Label>
          <Field className="form-control" name="lens" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">ISO: </Label>
          <Field className="form-control" name="iso" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Aperture: </Label>
          <Field className="form-control" name="aperture" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Shutter Speed: </Label>
          <Field className="form-control" name="shutter_speed" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Zoom: </Label>
          <Field className="form-control" name="zoom" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">Location: </Label>
          <Field className="form-control" name="location" component="input" type="text"/>
        </FormGroup>
        <Button color="info" >Submit</Button>
      </Form>
    )
  }
}

NewPhoto = reduxForm({
  // a unique name for the form
  form: 'addPhotoForm'
})(NewPhoto)

const mapDispatchToProps = (dispatch, props) => {
  return {
    addAPhoto: bindActionCreators(addAPhoto, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(NewPhoto);