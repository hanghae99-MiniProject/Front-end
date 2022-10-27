import styled from "styled-components";

export const DivDropDownBox = styled.div`
  a {
    text-decoration: none;
  }
`

export const DivDropDownMenu = styled.div`
  top: 100%;
  position: absolute;
  visibility: ${props => props.isOpen? 'visible' : 'hidden' };
`

export const DivMenu = styled.div`
    min-width: 150px;
    min-height: 40px;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 2;
    vertical-align: middle;
    line-height: 40px;

    border-bottom: 1px solid #333;

    h5{
      margin: 0 10px;
    }
`