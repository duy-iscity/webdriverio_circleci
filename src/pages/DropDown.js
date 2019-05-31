import ElementUtils from '../utils/ElementUtils';

class DropDown {

  open() {
    browser.url('dropdown');
    return this;
  }

  selectByText(option) {
    const dropdownList = ElementUtils.element('#dropdown');
    dropdownList.selectByVisibleText(option);
    return this;
  }

  selectByIndex(index) {
    const dropdownList = ElementUtils.element('#dropdown');
    dropdownList.selectByIndex(index);
    return this;
  }

  getCurrentValue() {
    const dropdownList = ElementUtils.element('#dropdown');
    return dropdownList.getValue();
  }

}

export default new DropDown();
