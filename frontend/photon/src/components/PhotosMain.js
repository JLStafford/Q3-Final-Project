import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';

class PhotosMain extends Component {
  render () {
    let thePhotos = this.props.photos.map(photo => {
      let { id, url, title, description, camera } = photo;
      return (
        <Card key={id} >
          <CardImg top width="25%" src={url} alt={description} />
          <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{camera}</CardSubtitle>
            <CardText>{description}</CardText>
            <ButtonGroup>
              <Button href="/photos/{id}" >More</Button>{' '}
              <Button href="/photos/{id}/edit" >Edit</Button>
            </ButtonGroup>
          </CardBody>
        </Card>
      )
    })

    return (
      <div>
        {thePhotos}
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, null)(PhotosMain);