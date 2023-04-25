import { shallow } from 'enzyme';
import Card from '../../src/components/Card';

jest.unmock('../../src/components/Card');

describe('Card', () => {
    describe('Rendering', () => {
        it('Render the Card component with default props', () => {
            const wrapper = shallow(<Card title='Add Host record' />);
            expect(wrapper.getElement()).toMatchSnapshot();
        });

        it('Render the Card component with props', () => {
            const wrapper = shallow(
                <Card
                    href='#'
                    title='Add Host Record'
                    description='Add a host record on BAM'
                    path={['Host Record']}
                    className='test_cn'
                />,
            );
            expect(wrapper.getElement()).toMatchSnapshot();
        });
    });
});
