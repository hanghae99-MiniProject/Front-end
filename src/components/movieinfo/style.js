import styled from "styled-components";

export const DivMovieInfoSection = styled.div`
  min-width: 454px;
  min-height: 250px;
  height: ${props => props.isSmall? '250px' : '70vh'};
  margin: auto;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  img{
      min-height: 250px;
      max-height: 500px;
      height: 100%;
      align-content: stretch;

      border-radius: 15px;
    }

  .moveInfoWrap{
    min-width: 454px;
    width: 30%;
    margin: 10px;
    color: #cccccc;
    
    span{
      margin-right: 15px;
    }

    hr{
      border-color: #999999;
    }

    .star{
      color: #999999;
      position: relative;

      span{
        position: absolute;
        width: ${props => props.star}%;
        left: 0px;
        color: red;
        overflow: hidden;
      }
    }
  }
`