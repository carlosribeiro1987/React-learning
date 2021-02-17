import imgCar from './../../images/svg-01.svg';
import imgPiggy from './../../images/svg-02.svg';
import imgPapers from './../../images/svg-03.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that alows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: true,
  img: imgCar,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

////////////////////////////////////////////////////////////////

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headLine: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: imgPiggy,
  alt: 'Piggybank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our team',
  headLine: 'Creating an account is extremely easy',
  description:
    "Get everything set up ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: imgPapers,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true,
};
