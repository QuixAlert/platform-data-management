import styled from "styled-components";

export const DivCompTest = styled.div`
  /* Center vertically and horizontally */
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px;
`;

export const DropDownMenuItems = styled.div`
    & {
      position: absolute;
      margin-bottom: 0;
      background-color: aliceblue;
      border-radius: 10%;
      width: 150px;
    }
  &.active {
    opacity: 1;
    visibility: visible;
  }
  &.inactive {
    opacity: 0;
    visibility: hidden;
  }
  `
