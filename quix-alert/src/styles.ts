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
      top: 100px;
      right: 20px;
      background-color: aliceblue;
      border-radius: var(--border-radius);
      padding: 10px 20px;
      width: 200px;
    }
  &:before {
    content: '';
    position: absolute;
    top: -5px;
    right: 20px;
    height: 20px;
    width: 20px;
    background: var(--secondary-bg);
    transform: rotate(45deg);
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
