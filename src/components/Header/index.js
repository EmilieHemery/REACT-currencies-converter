import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Header = (props) => (
  <div className="header">
    <h1 className="header-title">
      Converter Euro to ...
    </h1>
    <input
      type="number"
      onChange={(evt) => {
        // we call a function to give the new value of the state
        const { value } = evt.target;
        let number = parseInt(value, 10);
        if (!number) {
          number = 0;
        }
        props.onChange(number);
      }}
      value={props.amount}
      className="header-subtitle"
    />
  </div>
);

Header.propTypes = {
  amount: PropTypes.number.isRequired,
};

export default Header;
