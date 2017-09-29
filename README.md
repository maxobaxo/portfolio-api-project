# Max Scher Portfolio
#### _Epicodus Advanced Topics In React: Week 4 Independent Project, September 29, 2017_
_**By Max Scher**_

## Description
This is my personal portfolio that uses React and the GitHub API in order to create a portfolio that is easy to keep up-to-date.


## Setup/Installation
1. In Terminal...  
  `git clone   https://github.com/maxobaxo/portfolio-api-project`  
  `cd portfolio-api-project`  
  `npm install`  
  `touch github-api.config`  

2. In your browser...  
  ...visit [github.com/login](github.com/login) and log in to your account.  
  ...go to account settings, and select 'Personal Access Tokens' in the Developer Settings panel.  
  ...generate a new token, and copy the token string.

3. Open the cloned folder `portfolio-api-project` in your text editor, and type the following in your github-api.config file:  
```js
export const token = "<YOUR-PERSONAL-ACCESS-TOKEN-GOES-HERE>"
export const username = "<YOUR-USERNAME-GOES-HERE>"
```

3. In your terminal, enter `npm run start`

4. In your browser...  
  ...visit the app at http://localhost:8080.  
  ...click where instructed to retrieve fresh data from GitHub API.

## Specifications
* It can display basic profile information about Max Scher via an API call to github.
* It can save data from all API calls to application state.
* It can use client-side routing to display alternative information.

### Wishlist
* Display additional [read: non-static] data from separate API calls (i.e. commit history) in a different route.
* Add resume to the portfolio.

## Technologies Used
* React
  * React Router  
* Redux
  * Redux Logger
  * Redux Thunk
* Babel
* Webpack
* Jest

## Known Bugs
* The well-class from bootstrapCDN expands itself outside of the Grid component from react-bootstrap.

## License Information
This web application is free to use under the MIT License &copy; Max Scher
