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

it('filters robots correctly 2', () => {
            const MockProps3 = {
                onRequestRobots: jest.fn(),
                robots: [{
                    id: 3,
                    name: "John",
                    email: 'john@gmail.com'

                }],
                searchField: 'a',
                isPending: false

            };
            const filteredRobots =[]
            const wrapper3 = shallow( < MainPage { ...MockProps3
                }
                />)
                expect(wrapper3.instance().filterRobots()).toEqual([]) 
                expect(wrapper3.instance().filterRobots()).toEqual(filteredRobots)
            })