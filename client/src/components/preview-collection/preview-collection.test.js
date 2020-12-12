import React from 'react';
import { shallow } from 'enzyme';

import { Collection } from './preview-collection.component';
describe('CollectionPreview component', () => {
  let wrapper;
  let mockMatch;
  let mockHistory;
  const mockRouteName = 'hats';

  beforeEach(() => {
    mockMatch = {
      path: '/shop',
    };

    mockHistory = {
      push: jest.fn(),
    };

    const mockProps = {
      match: mockMatch,
      history: mockHistory,
      routeName: mockRouteName,
      title: 'hats',
      items: [],
    };

    wrapper = shallow(<Collection {...mockProps} />);
  });

  it('should render Collection component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call history.push with the right string when TitleContainer clicked', () => {
    wrapper.find('TitleContainer').simulate('click');

    expect(mockHistory.push).toHaveBeenCalledWith(
      `${mockMatch.path}/${mockRouteName}`
    );
  });
});