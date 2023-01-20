import styled from '@emotion/styled';

export const StyledWrapper = styled.div`
  padding: 40px 15px 52px 20px;
  background-color: #f0f1f3;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    background-image: url(${p => p.backTablet});
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
  }
  @media (min-width: 1280px) {
    background-image: url(${p => p.back});
    background-size: contain;
  }
  @media (min-width: 1280px) {
    display: block;
    min-height: 100vh;
    padding-top: 300px;
    max-width: 500px;
  }
  & .wrapper {
    @media (min-width: 768px) {
      display: flex;
      gap: 50px;
      justify-content: space-between;
    }
    @media (min-width: 1280px) {
      flex-direction: column;
      gap: 50px;
      justify-content: space-between;
    }
  }
  & .summary {
    margin-bottom: 40px;
    max-width: 300px;
    @media (min-width: 768px) {
      width: 320px;
    }
  }
  & .recom {
    @media (min-width: 768px) {
      width: 250px;
    }
  }
  & .title {
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
  }
  & .list {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
  & .item {
    display: flex;
    justify-content: space-between;
    @media (min-width: 768px) {
      /* width: 426px; */
    }
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
