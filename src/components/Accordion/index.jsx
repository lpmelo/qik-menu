import PropType from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DefaultAccordion = ({
  accordionProps,
  accordionSummaryProps,
  accordionDetailsProps,
  summaryContent,
  detailsContent,
  primaryColor,
}) => {
  return (
    <Accordion {...accordionProps}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: primaryColor }} />}
        {...accordionSummaryProps}
      >
        {summaryContent}
      </AccordionSummary>
      <AccordionDetails {...accordionDetailsProps}>
        {detailsContent}
      </AccordionDetails>
    </Accordion>
  );
};

DefaultAccordion.propTypes = {
  accordionProps: PropType.object,
  accordionSummaryProps: PropType.object,
  accordionDetailsProps: PropType.object,
  summaryContent: PropType.element,
  detailsContent: PropType.element,
  primaryColor: PropType.string,
};

export default DefaultAccordion;
