import styled from "styled-components";

export const DivRankSection = styled.div`
  min-width: 454px;
  min-height: 250px;
  max-width: 50vw;

  margin: auto;

  background-color: rgba(0, 0, 0, 0.7);

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;


  img{
      min-height: 250px;
      max-height: 500px;
      height: 50vh;
      align-content: stretch;
    }

  .moveInfoWrap{
    min-width: 454px;
    width: 30vw;
    margin: 10px;
    color: #cccccc;
    
    span{
      margin-left: 5px;
      margin-right: 15px;
    }

    hr{
      border-color: #999999;
    }
  }
`