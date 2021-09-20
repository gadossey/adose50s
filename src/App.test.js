import { shallow } from 'enzyme';
import App from './App';
import Teleprompter from './Teleprompter';
import Home from './Pages/Home';
import {
  Button
} from './styles'

describe('Teleprompter', () => {

  it('renders without crashing', () => {
    const appWrapper = shallow(<App />)
  });

  it('Telepromter Found', () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(Teleprompter)

  });

  it('Homepage Found', () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(Home)
    expect(Home).toMatchSnapshot();
  });

  it("Expects to find button HTML element in the DOM", () => {
    const wrapper = shallow(<Button text="test" />)
    expect(wrapper.find('button')).toHaveLength(1);
  });

  it("Expects to find button HTML element with className test in the DOM", () => {
    const wrapper = shallow(<Button className="test" text="test" />)
    expect(wrapper.find('button.test')).toHaveLength(1);
  });

  it("Expects to run onClick function when button is pressed in the DOM", () => {
    const mockCallBackClick = jest.fn();
    const wrapper = shallow(<Button onClick={mockCallBackClick} className="test" text="test" />);
    wrapper.find('button').simulate('click');
    expect(mockCallBackClick.mock.calls.length).toEqual(1);
  });

})
