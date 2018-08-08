import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";
import * as reducers from './reducers';
describe('searchRobots', () => {
   it('should treturn the initial state', ()=> {
       expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: ''});
   });
});