const [SET_THEME, SET_FOCUS] = ['options/SET_THEME', 'options/SET_FOCUS']
export const setTheme = (dark) => ({
  type: SET_THEME,
  dark
})
export const setFocus = (focus) => ({
  type: SET_FOCUS,
  focus
})

const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

if(!localStorage.getItem('theme')) localStorage.setItem('theme', isDarkMode()?'dark':'light')
const initialState = {
  dark: localStorage.getItem('theme')==='dark',
  focus: document.hasFocus()
};

function optionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem('theme',action.dark?'dark':'light')
      return {...state, dark: action.dark}
    case SET_FOCUS:
      return {...state, focus: action.focus}
    default:
      return state;
  }
}

export default optionsReducer;