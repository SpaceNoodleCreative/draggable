import React from 'react';
import styled from 'styled-components/macro';
import Item from './Item';
import PropTypes from 'prop-types';

const SItemList = styled.div`
  padding: 0.5em;
  width: 16em;
  background: aliceblue;
`;

const ItemList = ({ items }) => {
  return (
    <SItemList>
      {items && items.map(item => <Item {...item} key={item.id} />)}
    </SItemList>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
