import React from 'react';
import {shallow} from 'enzyme';
import MainPage from './MainPage';
let wrapper;
beforeEach(() =>{
    const MockProps ={
        onRequestRobots: jest.fn(),
        robots: [],
        serchField: '',
        isPending: false

    };
    wrapper =shallow(<MainPage {...MockProps}/>)
});
it('renders MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot()
})
it('filters robots correctly', ()=>{
    const MockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3,
            name: "John",
            email: 'john@gmail.com'

         } ],
        searchField: 'a',
        isPending: false

    };
    const wrapper2 = shallow( <MainPage { ...MockProps2}/>)
    expect(wrapper2.instance().filterRobots()).toEqual([])
    expect(wrapper2.instance().filterRobots()).toEqual([])
})