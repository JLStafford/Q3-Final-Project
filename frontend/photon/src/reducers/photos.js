export default(state = [], action) => {
  switch (action.type) {
    case 'GET_PHOTOS_PENDING':
      return state;
    case 'GET_PHOTOS_FULFILLED':
      return [...action.payload.data]
    case 'ADD_A_PHOTO_FULFILLED':
      return [...action.payload.data]
    case 'EDIT_A_PHOTO_FULFILLED':
      return [...action.payload.data]
    case 'DELETE_A_PHOTO_FULFILLED':
      return [...action.payload.data]
    default:
      return state;
  }
}