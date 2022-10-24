import styled from "styled-components";

export const P = styled.p`
  color: #fff;
  line-height: 1.8rem;
  
  white-space: pre-wrap; 
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 8;
  overflow: hidden;
`

export const A = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover{
    color: #ccc;
  }
`