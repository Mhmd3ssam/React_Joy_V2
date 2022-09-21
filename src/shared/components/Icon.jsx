import PropTypes from "prop-types";

import { SvgIcon } from "@mui/material";

function Icon({ icon, size, color }) {
  return (
    <SvgIcon color={color || "inherit"} fontSize={size || "inherit"}>
      <path d={icon} />
    </SvgIcon>
  );
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.oneOf([
    "info",
    "error",
    "warning",
    "success",
    "action",
    "primary",
    "secondary",
  ]),
};
export default Icon;
