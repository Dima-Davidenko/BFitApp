import styled from '@emotion/styled';

export const Item = styled.li`
  display: grid;
  /* justify-content: space-between; */
  grid-template-columns: 4fr 1fr 1fr 0.4fr;
  gap: 10px;
  font-family: 'Verdana';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.04em;
  color: #212121;
  padding: 20px 20px 0;
  @media (min-width: 426px) {
    padding: 20px 32px 0;
    gap: 20px;
  }
  @media (min-width: 768px) {
    justify-content: start;
  }

  & .products-item-name {
    display: block;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 8px;
    /* @media (min-width: 768px) {
      width: 350px;
      margin-right: 20px;
    } */
  }
  & .products-item {
    display: block;
    text-align: right;
    width: 100%;
    border-bottom: 1px solid #e0e0e0;
    padding: 8px 5px;
    white-space: nowrap;
    @media (min-width: 768px) {
      width: 107px;
    }
    & span {
      font-size: 5px;
    }
  }
`;

export const Icon = styled.div`
  cursor: pointer;
  background-image: url(${p => p.back});
  background-position: center;
  background-repeat: no-repeat;
`;
