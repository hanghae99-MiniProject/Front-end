import styled from "styled-components";

const MAX_HEIGHT = '150px';
const MARGIN_BOTTOM = '50px';

export const DivHeaderSection = styled.div`

  width: 100vw;
  height: ${MAX_HEIGHT};
  min-height: 80px;
  background: linear-gradient(#000000, rgba(0, 0, 0, 0));
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: ${MARGIN_BOTTOM};

  a{
    color: white;
  }

  .headerWrap{
    width:100%;
    height: ${MAX_HEIGHT};
    color: white;

    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .logoBox{
    width: 30vw;
    height: ${MAX_HEIGHT};
    position: relative;
    
    img{
      height: 8vh;
      min-height: 50px;
      position: absolute;
      right: 0;
      bottom: 0;
      margin-bottom: 10px;
    }
  }
  .menuBox{
    width: 40vw;
    position: relative;
    h2{
      position: absolute;
      margin-left: 20px;
      margin-bottom: 10px;
      bottom: 0;
    }
  }

  .loginBox{
    width: 30vw;
    height: 100%;
    position: relative;
    h2{
      margin-bottom: 10px;
      position: absolute;
      bottom: 0;
    }
  }
`