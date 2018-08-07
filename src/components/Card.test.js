import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';
it('expect to render Card Component', () => {
    expect(shallow(<Card />).length).toEqual(1)
});
it('expect to render Card snp', () => {
    expect(shallow( <Card /> )).toMatchSnapshot();
});