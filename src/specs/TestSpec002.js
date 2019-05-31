import DropDown from '../pages/DropDown';
import { expect } from 'chai';

describe('Login', () => {
  it('should login successfully', () => {
    DropDown.open().selectByIndex(1);
    expect(DropDown.getCurrentValue()).to.equal('1');
    browser.pause(5000);

    DropDown.open().selectByText('Option 2');
    expect(DropDown.getCurrentValue()).to.equal('2');
    browser.pause(5000);
  });
});
