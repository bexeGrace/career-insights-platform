import * as React from "react";
import PropTypes from "prop-types";

import Box from "@mui/material/Box";

function IframeBox({ url, width, height }) {
  return <iframe src={url} width={width} height={height} />;
}

IframeBox.propTypes = {
  url: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default IframeBox;
