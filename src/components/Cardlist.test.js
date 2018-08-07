import React from 'react';
import {shallow} from 'enzyme';
import Cardlist from './Cardlist';
it('expect to render Card Component', () => {
    
    expect(shallow( < Cardlist /> ).length).toEqual(1)
});
it('expect to render Card snp', () => {
    const mockRobots = [{
        id: 1,
        name: 'John Doe',
        username: 'gulbadam',
        email: 'gulbadam@gulbada.com'
    }]
    expect(shallow( < Cardlist robots = {mockRobots}  /> )).toMatchSnapshot();
});