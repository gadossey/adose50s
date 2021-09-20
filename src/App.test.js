import { shallow } from 'enzyme';
import App from './App';
import Teleprompter from './Teleprompter';
import Home from './Pages/Home';

describe('Teleprompter',()=>{

  it('renders without crashing', ()=>{
    const appWrapper = shallow(<App/>)
  })

  it('Telepromter Found',()=>{
    const appWrapper = shallow(<App/>);
    appWrapper.find(Teleprompter)
  })

  it('Homepage Found',()=>{
    const appWrapper = shallow(<App/>);
    appWrapper.find(Home)
    expect(Home).toHaveLength(0);
  })
})
