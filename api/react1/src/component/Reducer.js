export const likesReducer = (state, action) => {
  switch(action.type) {
    case 'HANDLE_LIKE': {
      const newState = state.map((imgState) => (
        imgState.id === action.payload.id
          ? {
            ...imgState, 
            likes: imgState.status !== 'like' ?  imgState.likes + 1 : imgState.likes -1,
            dislikes: imgState.status === 'dislike' ? imgState.dislikes -1 : imgState.dislikes,            
            status: imgState.status === null || imgState.status === 'dislike'
            ? 'like'
            : null,
          }
          : imgState
      ))
      return newState;
    }
    case 'HANDLE_DISLIKE': {
      const newState = state.map((imgState) => (
        imgState.id === action.payload.id
          ? {...imgState, 
            dislikes: imgState.status !== 'dislike' ?  imgState.dislikes + 1 : imgState.dislikes -1,
            likes: imgState.status === 'like' ? imgState.likes -1 : imgState.likes,
            status: imgState.status === null || imgState.status === 'like'
            ? 'dislike'
            : null,
          }  
          : imgState
      ))
      return newState;
    }
    default:
      return state
  }
}