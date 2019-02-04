import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const SItem = styled.div`
  padding: 0.5em 1em 0.75em;
  border-radius: 4px;
  background: lightseagreen;
  color: white;
  margin-bottom: 0.5em;
  line-height: 1;
  cursor: grab;
  user-select: none;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover:active {
    cursor: grabbing;
  }
  .item-text {
    font-size: 75%;
  }
`;

const Item = props => {
  return (
    <SItem>
      <span className="item-text">{props.title}</span>
    </SItem>
  );
};

Item.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Item;
