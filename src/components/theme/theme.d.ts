/* eslint-disable no-shadow */
import { DefaultTheme } from 'styled-components'

// Attache DefaultTheme Interface to the styled components module
// As items are added to theme controll their types should be handled here
declare module 'styled-components' {
   export interface DefaultTheme {
      name: string
      breakpoints: IBreakPoints
   }

   export interface IBreakPoints {
      mobileS: string
      mobileM: string
      mobileL: string
      tablet: string
      laptop: string
      laptopL: string
      desktop: string
   }
}
