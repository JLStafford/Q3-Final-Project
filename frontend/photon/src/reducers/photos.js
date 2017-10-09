export default(state = [], action) => {
  switch (action.type) {
    case 'GET_PHOTOS_PENDING':
    console.log('get photos pending in reducer');
      return state;
    case 'GET_PHOTOS_FULFILLED':
    console.log('get photos fulfilled in reducer');
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