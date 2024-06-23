import PropType from "prop-types";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";

const DefaultCard = ({
  cardProps,
  cardHeaderProps,
  typographyProps,
  cardContentProps,
  title,
  children,
}) => {
  return (
    <Card {...cardProps}>
      <CardHeader
        title={
          <Typography
            fontFamily={"Roboto"}
            fontWeight={500}
            {...typographyProps}
          >
            {title}
          </Typography>
        }
        {...cardHeaderProps}
      />
      <CardContent {...cardContentProps}>{children}</CardContent>
    </Card>
  );
};

DefaultCard.propTypes = {
  cardProps: PropType.object,
  cardHeaderProps: PropType.object,
  typographyProps: PropType.object,
  cardContentProps: PropType.object,
  title: PropType.string,
  children: PropType.element,
};

export default DefaultCard;
