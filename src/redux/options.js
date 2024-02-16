const [SET_THEME] = ['options/SET_THEME']
export const setTheme = (dark) => ({
  type: SET_THEME,
  dark
})

const initialState = { dark: true };

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      return {...state, dark: action.dark}
    default:
      return state;
  }
}

export default optionsReducer;