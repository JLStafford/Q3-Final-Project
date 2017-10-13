import axios from 'axios';

// Gets all photos from database
export const getAllPhotos = () => {
  return {
    type: 'GET_PHOTOS',
    payload: axios.get(`http://localhost:9001/photos`)
  }
}

// Add a new photo to the database
export const addAPhoto = (photo) => {
  return {
    type: 'ADD_A_PHOTO',
    payload: axios.post(`http://localhost:9001/photos`, photo)
  }
}

// Edit a photo in database
export const editAPhoto = (id, photo) => {
  return {
    type: 'EDIT_PHOTO',
    payload: axios.patch(`http://localhost:9001/photos/${id}/edit`, id, photo)
  }
}

// Removes a photo from server
export const deleteAPhoto = (id) => {
  console.log('id in action', id)
  return {
    type: 'DELETE_PHOTO',
    payload: axios.post(`http://localhost:9001/photos/${id}/`)
  }
}