import styled from 'styled-components';

export const DivMovieInfoSection = styled.div`
  min-width: 454px;
  max-width: 850px;
  min-height: ${(props) => (props.isSmall ? '250px' : '370px')};
  height: ${(props) => (props.isSmall ? '250px' : '500px')};

  margin: auto;

  /* background-color: #343438; */

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: ${(props) => (props.isSmall ? 'flex-end' : 'flex-start')};

  h2 {
    margin-top: 5px;
  }

  .posterImg {
    height: 100%;
    border-radius: 15px;
  }

  .moveInfoWrap {
    min-height: 150px;
    width: 454px;

    margin: 0px 10px;
    color: #fff;

    .iconImg {
      width: 15px;
    }

    span {
      margin-right: 15px;
    }

    hr {
      border-color: #999999;
    }

    .star {
      color: #999999;
      position: relative;

      span {
        width: ${(props) => props.star};
        overflow: hidden;
        position: absolute;
        left: 0px;
        color: red;
      }
    }
  }
`;
