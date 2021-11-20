import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
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
    const mockStore = configureStore();
    let store = mockStore(initialState);
    component = render(<Provider store={store}><Search /></Provider>);
  });

  test('Render', () => {
    component.getByPlaceholderText("Ingrese el titúlo...");
    const trash = component.getByText("🗑️");
    expect(trash).toHaveStyle({ display: 'none' });
  });

});






