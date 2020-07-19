// == Import npm
import React from 'react';


// == Import
import './styles.css';
import Header from '../Header';
import Toggler from '../Toggler';
import Select from '../Select';
import Footer from '../Footer';
import data from '../../data/currencies';

// == Composant
class App extends React.Component {
  state = {
    open : true,
    search: "",
    baseAmount : 1,
    devise : {
        name : "United States Dollar",
        rate : 1.09,
    }
  };

  getCurrencies = () => {
    const { search } = this.state;
    const list = data;

    // if the search input is empty it gives the full list
    if (search.length === 0) {
      return list;
    }
    // if it's not, it gives back a filtered list
    // where name include search.
    return list.filter((deviseObject) => {
      const deviseName = deviseObject.name.toLowerCase();
      const lowerSearch = search.toLowerCase();
      return deviseName.includes(lowerSearch);
    });
  };

  changeSearch = (text) => {
    this.setState({
      search: text,
    });
  };

  // toggle to open and close the currencies list
  toggle = () => {
    const { open } = this.state;
    this.setState({
      open:!open
    });
  };

  setSelectedCurrency = (currency) => {
    this.setState({
      devise: currency,
    });
  };

  changeBaseAmount = (number) => {
    this.setState({
      baseAmount: number,
    });
  };

  render() {
    const { open, devise, baseAmount, search } = this.state;
    const roundedConversion = Math.round(baseAmount * devise.rate * 100)/100;

    return (
      <div className="app">
        <Header
          amount={baseAmount}
          onChange={this.changeBaseAmount}
        />
        <Toggler
          toggle={this.toggle}
          open={open}
        />
        {open && (
          <Select
            list={this.getCurrencies()}
            search={search}
            onFilterChange={this.changeSearch}
            onCurrencyClick={this.setSelectedCurrency}
          />
        )}
        <Footer
          value={roundedConversion}
          currency={devise.name}
        />
      </div>
    );
  }
}

// == Export
export default App;
