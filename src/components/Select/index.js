import React from "react";
import './style.scss';
import propTypes from 'prop-types';

const Select = (props) => {
  const { list, onCurrencyClick, search, onFilterChange } = props;
  return (
    <div className="select">
      <input
        type="text"
        placeholder="Filter..."
        className="select-search"
        value={search}
        onChange={(evt) => {
          const content = evt.target.value;
          onFilterChange(content);
        }}
      />
      <ul className="select-list">
        {list.map((objetCurrency) => (
          <li
            key={objetCurrency.name}
            className="select-currency"
            onClick={() => {
              onCurrencyClick(objetCurrency);
            }}
          >
            {objetCurrency.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

Select.propTypes = {
  list: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default Select;
