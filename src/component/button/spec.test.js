import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from './../../../Utils/index';
import SharedButton from './index';


describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw a warning', () => {
            const expectedProps = {
                buttontext: 'Example Button Text',
                emitEvent: () => {

                }
            };

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders', () => {

        let wrapper;
        let mockFunc;
        beforeEach(() => {
            mockFunc = jest.fn();
            const props = {
                buttontext: 'Example Button Text',
                emitEvent: mockFunc

            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should Render a button ', () => {
            const button = findByTestAttribute(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

        it('Should emit callback on click event', () => {

            const button = findByTestAttribute(wrapper, 'buttonComponent');
            button.simulate('click');
            const callback = mockFunc.mock.calls.length;
            expect(callback).toBe(1);

        });

    });

});
