import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttribute, checkProps } from './../../../Utils';
import ListItem from './index';

describe('ListItem Component ', () => {

    describe('Checking PropTypes', () => {

        it('Should not throw a warning', () => {
            const expectedProps = {
                title: 'Example Title',
                desc: 'Some test'
            };

            const propsError = checkProps(ListItem, expectedProps);
            expect(propsError).toBeUndefined();
        });

    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                title: 'Example Title',
                desc: 'Some test'
            }
            wrapper = shallow(<ListItem {...props} />);
        });

        it('Should render without error', () => {
            const component = findByTestAttribute(wrapper, 'listItemComponent');
            expect(component.length).toBe(1);
        });

        it('Should render a title ' , () => {
            const title = findByTestAttribute(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        });

        it('Should render description ', ( ) => {
            const desc = findByTestAttribute(wrapper, 'componentDesc');
            expect(desc.length).toBe(1);
        })


    });

    describe('Should NOT render',() => {


        let wrapper;
        beforeEach(() => {
            const props = {
        
                desc: 'Some test'
            }
            wrapper = shallow(<ListItem {...props} />);
        });
        it('Component is not rendered', () => {
            const component = findByTestAttribute(wrapper, 'listItemComponent');
            expect(component.length).toBe(0);
        })

    })


});