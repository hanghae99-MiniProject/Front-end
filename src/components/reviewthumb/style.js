import styled from 'styled-components';

export const DivThumbBox = styled.div`
  position: relative;
  min-width: 200px;
  min-height: 350px;

  max-width: 350px;
  max-height: 500px;
  padding-bottom: 20px;
  color: #fff;

  .posterWrap {
    width: 100%;
    height: 85%;
    min-height: 280px;
    max-height: 500px;
    color: #fff;

    img {
      min-width: 200px;
      max-width: 350px;
      width: 100%;
      height: 100%;
      border-radius: 18px;
      object-fit: cover;
    }
  }

  .infoWrap {
    font-size: 14px;
    font-weight: bold;
    margin: 5px;
    border-radius: 18px;
    border-top: solid 1px white;
    p {
      margin: 10px 0px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      text-align: center;
      span {
        margin: 0px 10px;
      }
    }

    img {
      height: 15px;
    }
  }
`;
