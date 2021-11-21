import { IBreakPoints } from 'styled-components'

export const breakpointSizes = {
   mobileS: 320,
   mobileM: 375,
   mobileL: 425,
   tablet: 768,
   laptop: 1024,
   laptopL: 1440,
   desktop: 2560,
}

const breakpoints: IBreakPoints = {
   mobileS: `(min-width: ${breakpointSizes.mobileS}px)`,
   mobileM: `(min-width: ${breakpointSizes.mobileM}px)`,
   mobileL: `(min-width: ${breakpointSizes.mobileL}px)`,
   tablet: `(min-width: ${breakpointSizes.tablet}px)`,
   laptop: `(min-width: ${breakpointSizes.laptop}px)`,
   laptopL: `(min-width: ${breakpointSizes.laptopL}px)`,
   desktop: `(min-width: ${breakpointSizes.desktop}px)`,
}
