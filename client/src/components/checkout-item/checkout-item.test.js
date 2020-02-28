import React from 'react';
import { shallow } from 'enzyme';

import { CheckoutItem } from './checkout-item.component';

describe('CheckoutItem component', () => {
  let wrapper;
  let mockDecreaseCount;
  let mockAddItem;
  let mockDeleteItem;

  beforeEach(() => {
    mockDecreaseCount = jest.fn();
    mockAddItem = jest.fn();
    mockDeleteItem = jest.fn();

    const mockProps = {
      cartItem: {
        imageUrl: 'www.testImage.com',
        price: 10,
        name: 'hats',
        quantity: 2,
      },
      decreaseCount: mockDecreaseCount,
      addItem: mockAddItem,
      deleteItem: mockDeleteItem,
    };

    wrapper = shallow(<CheckoutItem {...mockProps} />);
  });

  it('should render CheckoutItem component', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call deleteItem when remove button is clicked', () => {
    wrapper.find('DeleteButtonContainer').simulate('click');
    expect(mockDeleteItem).toHaveBeenCalled();
  });

  it('should call decreaseCount when left arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(0)
      .simulate('click');

    expect(mockDecreaseCount).toHaveBeenCalled();
  });

  it('should call addItem when right arrow is clicked', () => {
    wrapper
      .find('QuantityContainer')
      .childAt(2)
      .simulate('click');

    expect(mockAddItem).toHaveBeenCalled();
  });

  // it('should render the right amount when addItem called', () => {
  //   wrapper
  //     .find('QuantityContainer')
  //     .childAt(2)
  //     .simulate('click');

  //   const itemCount = parseInt(
  //     wrapper
  //       .find('QuantityContainer')
  //       .childAt(1)
  //       .text()
  //   );
  //   expect(itemCount).toBe(3);
  // });
});
