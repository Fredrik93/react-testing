import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from './../../../Utils/index';
import SharedButton from './index';


describe('SharedButton Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw watnning', () => {
            const expectedProps = {
                buttontext: 'Example Button Text',
                emitEvent: () => {

                }
            };

            const propsError = checkProps(SharedButton, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Renders ', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                buttontext: 'Example Button Text',
                emitEvent: () => {

                }

            };
            wrapper = shallow(<SharedButton {...props} />);
        });

        it('Should Render a button ', () => {
            const button = findByTestAttribute(wrapper, 'buttonComponent');
            expect(button.length).toBe(1);
        });

    });

});
