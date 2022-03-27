import { css } from 'styled-components';

export const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const body = css`
  font-family: 'MonumentExtended';
  font-weight: 500;
`;

export const h1 = css`
    font-family: 'MonumentExtended',
    font-size: 40px,
    font-weight: 700,
    @media ${device.mobileS} {
        font-size: 1.5rem;
        line-height: 2.5rem;
      }
    
      @media ${device.tablet} {
        font-size: 2.5rem;
        line-height: 3.5rem;
      } ;
`;

export const h2 = css`
    font-family: 'MonumentExtended',
    font-size: 25px,
    font-weight: 500,
    @media ${device.mobileS} {
        font-size: 1.2rem;
        line-height: 1.6rem;
      }
    
      @media ${device.tablet} {
        font-size: 1.6rem;
        line-height: 2rem;
      } ;
`;

export const h3 = css`
    font-family: 'MonumentExtended',
    font-size: 20px,
    font-weight: 500,
    @media ${device.mobileS} {
        font-size: 1.25rem;
        line-height: 1.67rem;
      }
    
      @media ${device.tablet} {
        font-size: 1.67rem;
        line-height: 2rem;
      } ;
`;

export const h4 = css`
    font-family: 'MonumentExtended',
    font-size: 12px,
    font-weight: 500,
    @media ${device.mobileS} {
        font-size: 0.6rem;
        line-height: 0.8rem;
      }
    
      @media ${device.tablet} {
        font-size: 1.2rem;
        line-height: 1.5rem;
      } ;
`;
