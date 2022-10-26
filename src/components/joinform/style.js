import styled from "styled-components";

export const DivJoinBox = styled.div`
  width: 400px;
  margin: auto;
  background-color: rgba(255, 255, 255, 0.2);
  color: #fff;

  .titleBox{
    width: 100%;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    h1{
      text-align: center;
      display: block;
      margin: 0px;
    }
    hr{
      display: block;
      width: 90%;
      border: 1px solid;
    }
  }

  .inputBox{
    width: 100%;

    h3{
      margin: 10px 25px 0px 25px;
    }

    p {
      color: red;
      font-size: 14px;
      margin: 0px 25px 0px 25px;
      font-weight: normal;
    }  

    input{
      margin: 15px 25px;
      width: 340px;
      height: 25px;
      background-color: rgba(0, 0, 0, 0);
      border: 3px solid #fff;
      color: #fff;
    }
  }

  .buttonBox{
    width: 100%;
    height: 100px;
    
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    
    a{
      margin: auto;
      text-align: center;
      text-decoration: none;

      color: #fff;
      font-size: 18px;
      font-weight: bold;

      border: none;
    }
  }
`