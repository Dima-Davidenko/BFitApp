// import styled from 'styled-components';
import styled from '@emotion/styled';

// ++++++++++++++++++++++

const size = {
  mobile: '320px',
  maxMobile: '767px',
  minTablet: '768px',
  maxTablet: '1279px',
  desktop: '1280px',
};

const breakpoints = {
  mobile: `(min-width: ${size.mobile})`,
  maxMobile: `(max-width: ${size.maxMobile})`,
  onlyTablet: `(min          <Button>Start losing weight</Button>
  -width: ${size.minTablet}) and (max-width: ${size.maxTablet})`,
  minTablet: `(min-width: ${size.minTablet})`,
  maxTablet: `(max-width: ${size.maxTablet})`,
  desktop: `(min-width: ${size.desktop})`,
};
// ++++++++++++++++++++++

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 10;

  @media ${breakpoints.maxMobile} {
    position: fixed;
    top: 80px;
  }
`;

export const ModalDiv = styled.div`
background-color: #ffffff;
width: 672px;
align-items: center;
flex-direction: column; */
padding-bottom: 80px;
@media ${breakpoints.maxMobile} {
  width: 100vw;
  max-height: 100%;
  height: 100%;
}`;

export const CloseBtnWrapper = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
  background-color: #f0f1f3;
  margin-bottom: 20px;
  @media ${breakpoints.minTablet} {
    background-color: #ffffff;
  }
`;

export const BackButton = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;

export const CloseModalBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  @media ${breakpoints.maxMobile} {
    display: none;
  }
`;

export const ContentWrap = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 82px;

  @media ${breakpoints.maxMobile} {
    top: 0px;
    width: 100vw;
    max-height: 100%;
    padding: 0px 20px 20px;
    height: 100%;
  }
`;

export const ModalTitle = styled.h2`
  width: 320px;
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
  @media ${breakpoints.maxMobile} {
    font-size: 18px;
    line-height: 1.4;
  }
`;

export const KcalCounter = styled.p`
  font-size: 48px;
  text-align: center;
  color: #264061;
  margin-top: 0px;
  margin-bottom: 12px;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 32px;
  width: 280px;
  @media ${breakpoints.minTablet} {
    width: 330px;
  }
  & span {
    font-size: 16px;
    line-height: 1.215;
  }
`;

export const Text = styled.p`
  width: 280px;
  @media ${breakpoints.minTablet} {
    width: 330px;
  }
`;

export const ProdList = styled.ol`
  text-align: left;
  margin-bottom: 40px;
  padding-left: 0;
  width: 280px;
  @media ${breakpoints.minTablet} {
    width: 330px;
  }
  & p {
    margin-bottom: 20px;
  }
  & li {
    color: #9b9faa;
    font-weight: 400;
    margin-left: 20px;
    padding-left: 0;
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;

export const Button = styled.div`
  text-align: center;
  justify-content: center;
  width: 210;
  padding: 13px 25px;
  background: #fc842d;
  border-radius: 30px;
  color: #ffffff;
`;
