import getReposReducer from './../../src/reducers/get-repos-reducer';
import c from './../../src/constants';

describe('Get Repositories Reducer', () => {
  let action;
  const repoBefore = {
    id: 94116378,
    name: 'address-book',
    description: 'OOP exercises with prototypical methods',
    language: 'JavaScript',
    created_at: '2017-05-12T16:15:54Z',
    updated_at: '2017-06-12T11:08:11Z'
  }
  test('should return equivalent state if no action type is recognized', () => {
    expect(getReposReducer([], { type: null })).toEqual([]);
  });

  test('should update state with repo data from api', () => {
    action = {
      type: c.RECEIVE_USER_REPOS,
      json: [{
        id: 94116378,
        name: 'address-book',
        description: 'OOP exercises with prototypical methods',
        language: 'JavaScript',
        created_at: '2017-05-12T16:15:54Z',
        updated_at: '2017-07-13T16:24:02Z'
      }]
    };
    let repoAfter = {
      id: 94116378,
      name: 'address-book',
      description: 'OOP exercises with prototypical methods',
      language: 'JavaScript',
      created_at: '2017-05-12T16:15:54Z',
      updated_at: '2017-07-13T16:24:02Z'
    }
    expect(getReposReducer([ repoBefore ], action)).toEqual([ repoAfter ]);
  });

});
