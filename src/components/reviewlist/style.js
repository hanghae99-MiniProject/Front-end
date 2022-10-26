import styled from "styled-components";

export const DivReviewListBox = styled.div`
  max-width: 1400px;
  min-width: ${props => props.minWidth};
  width: ${props => props.width};
  height: 100%;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 25%));
  grid-auto-rows: minmax(350px, auto);
  justify-content: center;
`