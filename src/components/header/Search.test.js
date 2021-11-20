import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Search } from './Search';

describe('<Search />', () => {
  let component;

  beforeEach(() => {
    const initialState = {
      types: [],
      items: [],
      item: undefined,
      filterBy: 'default',
      orderBy: 'default',
      error: ''
    };
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(initialState);
    component = render(<Provider store={store}><Search /></Provider>);
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






