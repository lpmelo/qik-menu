import { Box, Card, styled } from "@mui/material";
import { forwardRef } from "react";

const StyledCardRoot = styled(Card)(() => ({
  display: "flex",
  flexWrap: "wrap",
  height: "100%",
  width: "100%",
}));

const StyledCard = forwardRef(({ ...rest }, ref) => (
  <StyledCardRoot ref={ref} {...rest} />
));

StyledCard.displayName = "StyledCard";

const StyledContentBoxRoot = styled(Box)(() => ({
  width: "100%",
  height: "calc(100% - 190px)",
  maxHeight: "calc(100% - 190px)",
  overflowY: "auto",
}));

const StyledContentBox = forwardRef(({ ...rest }, ref) => (
  <StyledContentBoxRoot ref={ref} {...rest} />
));

StyledContentBox.displayName = "StyledContentBox";

export { StyledCard, StyledContentBox };
