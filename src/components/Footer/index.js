import React from "react";
import PropTypes from "prop-types";

import './style.scss'

const Footer = (props) => (  
  <div className="footer">
    <h1 className="footer-value">
      {props.value}
    </h1>
    <span className="footer-currency">
      {props.currency}
    </span>
  </div>
);

Footer.propTypes = {
  value: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Footer;
