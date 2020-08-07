import * as React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import * as Icons from '../src/index';
Enzyme.configure({ adapter: new Adapter() });

const sizes = ['huge', 'large', 'normal', 'small'];

const random = () => {
    return Math.random() * Math.floor(sizes.length);
};

describe('Icons', () => {
    Object.keys(Icons).map((icon) => {
        const Element = Icons[icon];

        test('should render', () => {
            const Wrapper = shallow(<Element />);
            expect(Wrapper.exists()).toBe(true);
        });

        test('should have size prop as given', () => {
            const Wrapper = mount(<Element size='normal' />);
            expect(Wrapper.props().size).toEqual('normal');
        });

        test('should have a normal class', () => {
            const Wrapper = mount(<Element className='normal' />);
            expect(Wrapper.hasClass('normal')).toBe(true);
        });

        test('should have a fill attribute same as fill prop', () => {
            const Wrapper = mount(<Element fill='#000000' />);
            expect(Wrapper.find('path').props().fill).toEqual('#000000');
        });

        test('should have inline custom size', () => {
            const Wrapper = mount(<Element customSize='500px' />);
            expect(Wrapper.find('svg').props().style).toEqual({ height: '500px', width: '500px' });
        });
    });
});
