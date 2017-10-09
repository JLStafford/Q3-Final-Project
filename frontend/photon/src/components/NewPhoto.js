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
          <Label htmlFor="">Name: </Label>
          <Field className="form-control" name="name" component="input" type="text"/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="">City: </Label>
          <Field className="form-control" name="city" component="input" type="text"/>
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