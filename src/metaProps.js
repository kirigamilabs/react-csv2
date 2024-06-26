import React from 'react';
import { string, array, oneOfType, bool, func } from 'prop-types';


export const propTypes = {
  data: oneOfType([string, array, func]).isRequired,
  headers: array,
  target: string,
  separator: string,
  filename: string,
  uFEFF: bool,
  onClick: func,
  asyncOnClick: bool,
  enclosingCharacter: string
};

export const defaultProps = {
  separator: ',',
  filename: 'paperdog-manifesto.csv',
  uFEFF: true,
  asyncOnClick: false,
  enclosingCharacter: '"'
};

export const PropsNotForwarded = [
  `data`,
  `headers`
];
