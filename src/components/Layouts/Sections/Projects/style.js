import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
`;

export const Wrapper = styled.div`
  max-width: 100%;
  padding: 40px 32px 18px;
  margin: 0 auto;
  width: 1288px;

  @media (min-width: 1024px) {
    padding: 88px 32px 55px;
  }
`;

export const Title = styled.h3`
  font-family: Nunito;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 44px;
  text-align: center;
  color: #5ed3f3;
  position: relative;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
    line-height: 44px;
    margin-bottom: 44px;
  }

  @media (min-width: 768px) {
    text-align: center;
  }

  &:after {
    content: "";
    position: absolute;
    top: -1px;
    left: 0;
    right: 0;
    width: 76px;
    height: 6px;
    background: linear-gradient(
        270deg,
        rgba(255, 242, 136, 0.21) 0%,
        rgba(255, 255, 255, 0.6) 70%
      ),
      rgba(255, 227, 0, 0.8);
    border-radius: 14px;
    margin: auto;

    @media (min-width: 1024px) {
      top: -5px;
      width: 62px;
    }
  }
`;
