import React, { Component } from 'react';
import { GlobalStyle } from '../styles/styles';
import ItemList from './ItemList';

class App extends Component {
  defaultItems = [
    {
      title: 'One item',
      id: '0'
    },
    {
      title: 'Another item',
      id: '1'
    },
    {
      title: 'One more item',
      id: '2'
    },
    {
      title: 'One more item with a very long title over multiple lines',
      id: '3'
    },
    {
      title: 'One more item with a long title',
      id: '4'
    }
  ];
  render() {
    return (
      <div>
        <GlobalStyle />
        <ItemList items={this.defaultItems} />
      </div>
    );
  }
}

export default App;
