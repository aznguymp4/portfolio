const [SET_THEME] = ['options/SET_THEME']
export const setTheme = (dark) => ({
  type: SET_THEME,
  dark
})

if(!localStorage.getItem('theme')) localStorage.setItem('theme', 'dark')
const initialState = { dark: localStorage.getItem('theme')==='dark' };

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem('theme',action.dark?'dark':'light')
      return {...state, dark: action.dark}
    default:
      return state;
  }
}

export default optionsReducer;