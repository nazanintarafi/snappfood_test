import styled, { css } from 'styled-components';

// Variables
const borderRadius = '6px';
const boxShadow = '0 2px 12px 0 #e6e6e6';
const borderColor = '#e6e6e6';
const fontIranSans = "'iransans', sans-serif";
const fontSize = '12px;'
const colorWhite = '#fff';
const colorGray = '#a3a3a3';
const colorGreen = '#305d02';
const colorGreenLight = 'RGBA(91, 168, 41, 0.08)';
const maxWidthCard = '567px';
const cardMargin = '5px';
const cardPadding = '16px';

const flexCenter = css`
  display: flex;
  align-items: center;
`;

const widthMixin = css`
  width: 100%;
`;

const CardWrapper = styled.div`
  width: calc(100% - 32px);
  max-width: ${maxWidthCard};
  direction: rtl;
  border-radius: ${borderRadius};
  margin: ${cardMargin} auto;
  background-color: ${colorWhite};
  border: solid 0.5px ${borderColor};
  box-shadow: ${boxShadow};
`;

const Header = styled.div`
  position: relative;
  display: block;
`;

const BackgroundImageContainer = styled.div`
  position: relative;
  height: 134px;
`;

const BackgroundImage = styled.img`
  box-sizing: border-box;
  display: block;
  ${widthMixin}
  height: inherit;
  max-height: 100%;
  border-top-left-radius: ${borderRadius};
  border-top-right-radius: ${borderRadius};
  object-fit: cover;
`;

const LogoContainer = styled.div`
  position: absolute;
  bottom: -16px;
  right: 8px;
  border: 7px solid ${colorWhite};
  width: 64px;
  height: 64px;
  border-radius: 8px;
  background-color: ${colorWhite};
  box-shadow: 0 2px 6px 0 ${borderColor};
`;

const Logo = styled.img`
  opacity: 1;
  ${widthMixin};
  height: 100%;
  border-radius: 4px;
  border: 1px solid RGBA(64, 64, 64, 0.04);
`;

const VendorInfo = styled.div`
  padding: ${cardPadding};
`;

const TitleRow = styled.div`
  ${widthMixin};
  ${flexCenter};
  margin-bottom: 10px;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: bold;
  margin: 0;
  line-height: 1.5;
  font-family: ${fontIranSans};
`;

const RateStar = styled.div`
  background-color: ${colorGreenLight};
  color: ${colorGreen};
  ${flexCenter};
  text-align: left;
  font-family: ${fontIranSans};
  font-size: 13px;
  border-radius: 4px;
  padding: 2px 4px 2px 2px;
  align-items: center;

  svg {
    fill: ${colorGreen};
    width: 16px;
    height: 16px;
  }
`;

const Description = styled.p`
  overflow: hidden;
  white-space: nowrap;
  font-size: ${fontSize};
  margin-bottom: 16px;
  ${widthMixin};
  margin: 0 auto;
  line-height: 1.5;
`;

const Delivery = styled.div`
  white-space: nowrap;
  font-size: ${fontSize};
  ${flexCenter};
  margin-top: 10px;
`;

const ExpressText = styled.span`
  margin-left: 4px;
  font-size: 11px;
  color: ${colorGray};
`;

const DeliveryFee = styled.span`
  color: black;
`;

const TomanText = styled.span`
  margin-right: 3px;
`;

export {
  CardWrapper,
  BackgroundImage,
  Title,
  RateStar,
  Description,
  Logo,
  Delivery,
  LogoContainer,
  VendorInfo,
  TitleRow,
  Header,
  BackgroundImageContainer,
  ExpressText,
  DeliveryFee,
  TomanText,
};
