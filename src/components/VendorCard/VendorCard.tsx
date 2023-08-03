import { IProps } from './IProps';
import {
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
} from './styles';
import { toPersianDigits } from '../../helper/persianNumsHelper';

const VendorCard = ({ data }: IProps): JSX.Element => {
  const {
    backgroundImage,
    title,
    rate,
    description,
    logo,
    deliveryFee,
    // deliveryGuarantee,
  } = data.data;

  return (
    <CardWrapper>
      <Header>
        <BackgroundImageContainer>
          <BackgroundImage src={backgroundImage} alt={title} />
        </BackgroundImageContainer>
        <LogoContainer>
          <Logo src={logo} alt="Snapp Food"/>
        </LogoContainer>
      </Header>
      <VendorInfo>
        <TitleRow>
          <Title>{title}</Title>
          <RateStar>
            <span>{toPersianDigits(rate)}</span>
            &nbsp;
            <svg className="star-empty" viewBox="0 0 24 24">
              <path d="M12 2L15.09 8.36L22 9.27L17 13.14L18.18 20L12 16.73L5.82 20L7 13.14L2 9.27L8.91 8.36L12 2Z" />
            </svg>
          </RateStar>
        </TitleRow>
        <Description>{description}</Description>
        <Delivery>
          <ExpressText>ارسال اکسپرس</ExpressText>
          <DeliveryFee>{toPersianDigits(deliveryFee)}</DeliveryFee>
          <TomanText>تومان</TomanText>
        </Delivery>
      </VendorInfo>
    </CardWrapper>
  );
};

export default VendorCard;