import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Search } from './Search';

describe('<Search />', () => {
  let component;

  beforeEach(() => {
    
    component = render(<Search />);
  });

  test('Hidden trash', () => {
    const trash = component.getByText("🗑️");
    expect(trash).toHaveStyle({ display: 'none' });
  });
  
  test('Click to show trash', () => {
    const input = component.getByPlaceholderText("Ingrese el titúlo...");
    fireEvent.change(input, {target: {value: 'test'}});
    const search = component.getByText("🔎");
    fireEvent.click(search);
    const trash = component.getByText("🗑️");
    expect(trash).toHaveStyle({ display: 'inline-block' });
  });

});






