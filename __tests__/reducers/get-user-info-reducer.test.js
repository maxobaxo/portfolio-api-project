import getUserInfo from './../../src/reducers/get-user-info-reducer';
import c from './../../src/constants';

describe('User Info Reducer', () => {
  let action;
  const beforeUserInfo = {
    isFetching: true,
    bio: "Hi, my name is Max, and I love puzzles. I am a determined problem-solver and web developer, with a love for stand-up comedy and pasta.",
    blog: "www.linkedin.com/in/maxscher/",
    email: "max@maxobaxo.com",
    followers: 7,
    following: 6,
    id: 8905158,
    location: "Portland, Oregon",
    login: "maxobaxo",
    name: "Max Scher",
  }

  const afterUserInfo = {
    isFetching: false,
    bio: "Hi, my name is Max, and I love puzzles. I am a determined problem-solver and web developer, with a love for stand-up comedy and pasta.",
    blog: "www.linkedin.com/in/maxscher/",
    email: "maxobaxo@gmail.com",
    followers: 200,
    following: 6,
    id: 8905158,
    location: "Portland, Oregon",
    login: "maxobaxo",
    name: "Maxwell Scher",
  }

  test('should return equivalent state if no action type is recognized', () => {
    expect(getUserInfo([], { type: null })).toEqual([]);
  });

  test('should update state with data from api', () => {
    action = {
      type: c.RECEIVE_USER_INFO,
      profile: {
        followers: 200,
        email: "maxobaxo@gmail.com",
        name: "Maxwell Scher"
      }
    }
    expect(getUserInfo(beforeUserInfo, action)).toEqual(afterUserInfo);
  })
})
