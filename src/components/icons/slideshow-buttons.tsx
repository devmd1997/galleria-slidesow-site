"use client";
import styled from "styled-components";
import BackButtonIcon from "../../../public/shared/icon-back-button.svg";
import ForwardButtonIcon from "../../../public/shared/icon-next-button.svg";

export const StyledBackButtonIcon = styled(BackButtonIcon)`
  & g {
    stroke: black;
  }
  &:hover g {
    stroke: var(--color-grey-200);
  }
`;

export const StyledForwardButtonIcon = styled(ForwardButtonIcon)`
  & g {
    stroke: black;
  }
  &:hover g {
    stroke: var(--color-grey-200);
  }
`;
