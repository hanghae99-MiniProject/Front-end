import styled from 'styled-components';

export const DivThumbBox = styled.div`
  position: relative;
  min-width: 200px;
  min-height: 350px;

  max-width: 350px;
  max-height: 500px;
  padding-bottom: 20px;
  color: #fff;
  
  .posterWrap{
    width: 100%;
    height: 85%;
    min-height: 280px;
    max-height: 500px;
    color: #fff;
    
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
     }
  }

  .infoWrap{
    font-size: 14px;
    font-weight: bold;
    margin: 5px;

    p{
      margin: 10px 0px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      span{
        margin: 0px 10px;
      }
     }

     img {
      height: 15px;
     }
  }


`