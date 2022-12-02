// import React from 'react'
// import { ThemeProvider } from 'styled-components'
// import { useSelector } from 'react-redux'
// import { selectTheme } from '../store/dream/dreamSlice'

// export type Theme = {
//   baseFont: string;
//   baseFontSize: string;
//   mainBackgroundColor: string;
//   oppositeBackgroundColor: string;
//   additionalBackgroundColor: string;
//   borderColor: string;
//   mainColor: string;
//   complementaryColor: string;
//   bidColor: string;
//   askColor: string;
// }

// type Themes = {
//   [key: string]: Theme;
// }

// type Props = {
//   children: JSX.Element;
// }


// const themes: Themes = {
//   light:{
//       baseFont: '"Courier New", Courier, monospace',
//       baseFontSize: '1rem',
//       mainBackgroundColor: 'rgb(189,106,106)',
//       oppositeBackgroundColor: '#2a2d35',
//       additionalBackgroundColor: '#9d4545',
//       borderColor: 'black',
//       mainColor: 'black',
//       complementaryColor: '#f3e4e4',
//       bidColor: '#5fff00',
//       askColor: '#ffc300',
//   },
//   dark:{
//       baseFont: '"Droid Sans Mono", Monospaced, monospace',
//       baseFontSize: '1rem',
//       mainBackgroundColor: '#2a2d35',
//       oppositeBackgroundColor: 'rgb(189,106,106)',
//       additionalBackgroundColor: '#15161a',
//       borderColor: 'grey',
//       mainColor: 'white',
//       complementaryColor: 'grey',
//       bidColor: 'lightseagreen',
//       askColor: '#ff0000',
//   },
// }

// function MyTemeProvider( { children }: Props ){
//   const currentTheme = useSelector(selectTheme)

//   return(
//       <ThemeProvider theme={ themes[currentTheme] }>
//           {children}
//       </ThemeProvider>
//   )
// }

// export default MyTemeProvider