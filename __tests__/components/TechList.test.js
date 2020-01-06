import React from 'react';

import TechList from '~/components/TechList';

import { render, fireEvent } from '@testing-library/react-native';

describe('TechList test', () => {

  it('should  be able to add new tech', () => {
    const { getByText, getByTestId, debug } = render(<TechList />);

    fireEvent.changeText(getByTestId('tech-input'), 'Node.js');
    fireEvent.press(getByText('Adicionar'));

    expect(getByText('Node.js')).toBeTruthy();
    expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
