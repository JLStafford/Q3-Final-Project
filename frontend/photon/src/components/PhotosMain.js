import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


class PhotosMain extends Component {

  state = { activeIndex: 0 };

  onExiting = () => {
    this.animating = true;
  }

  onExited = () => {
    this.animating = false;
  }

  next = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === this.props.photos.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous = () => {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? this.props.photos.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex = (newIndex) => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  goToPhoto = (e) => {

  }


  render () {

    const { activeIndex } = this.state;

    let slides = this.props.photos.map(photo => {
      let { id, url, title, description, camera, lens } = photo;
      console.log('id in map', id)
      return (
          <CarouselItem
            onExiting={this.onExiting}
            onExited={this.onExited}
            key={id}
            src={url}
            altText={description}
            onClick={(e) => this.goToPhoto()}
          >
            <CarouselCaption captionText={description} captionHeader={title} />
          </CarouselItem>
      )
    })

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={this.props.photos} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    photos: state.photos
  }
}

export default connect(mapStateToProps, null)(PhotosMain);