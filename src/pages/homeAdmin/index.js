import React from 'react';
import { Styles } from './styles';
import Sidebar from './components/sideBar';
import Topbar from './components/topbar';
import Footer from '../components/footer';
import Scrolltop from '../components/scrollTop';

import Autosuggest from 'react-autosuggest';

import api from '../../shared/services/api'

const getSuggestionValue = suggestion => suggestion.longDescription;
  
const  renderSuggestion = suggestion => (
  <div>
    {suggestion.longDescription} yo yo
  </div>
);

const calculateSuggestions = (value, suggestions, reactScope) => {
  const filter = value.trim().toLowerCase();
  console.log(filter);
  const newSuggestions = filter === null
    || filter === undefined
    || filter === '' 
    ? suggestions
    : suggestions.filter(prd => prd.longDescription.toLowerCase().includes(filter));
  reactScope.setState({
    suggestions: newSuggestions
  });
}

const getSuggestions = (value, reactScope) => {
  api.get("products").then((res) => calculateSuggestions(value, res.data, reactScope));
};

export default class HomeAdmin extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       value: '',
       suggestions: []
    }
  }
  
  onSuggestionsFetchRequested = ({ value }) => {
    console.trace("fetch requested ... " + value)
    getSuggestions(value, this);
  };
  
  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  onSuggestionsClearRequested = () => {
    console.trace("clear requested ... ")
    getSuggestions('', this);
  };

  componentDidMount = () => {
    getSuggestions('', this);
  };

  render = () => {
    const { value, suggestions } = this.state;
    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a product',
      value,
      onChange: this.onChange
    };
    return (
      <Styles>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div is="content">
              <Topbar />
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
              />
            </div>
          </div>
        </div>
        <Footer />
        <Scrolltop />
      </Styles>
    );
  }
}
