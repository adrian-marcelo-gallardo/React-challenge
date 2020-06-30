# React Challenge

The output of this challenge is to create a Youtube Client. You will be applying the concepts that you learned along the course.

Joins us via [Slack](// TODO slack channel)!

#### What we are expecting from you is:
- Use [Sign-in API](https://developers.google.com/identity/sign-in/web/sign-in)
- Use [Youtube API](https://developers.google.com/youtube/v3)
- Use enzyme and jest for testing
- Use React Router and React 16 (already included in the boilerplate code)
- Use Hooks learned in the course for your application's state management 

## Delivery

### First Delivery (due // TODO)
- Login
  - Connect the applicaction with google API.

- Home View
  - It displays the trending videos using Youtube Trending API.
  - It has a search bar, which uses Youtube Search API.
  - Each video may be saved as favorite in the Context state, and also can be removed from the same call to action.
  - Each video should display if it is already marked as favorite.

- Your Favorites List View
  - It displays the videos that you previously selected, which comes from Context.
  - Each video may be removed from favorite in Context.

At this point, don't worry about styling nor tests, you will be focused on those in the next delivery.

### Second Delivery (due // TODO)
- Style your views using styled component, css or what ever is easier for you.

- Unit Testing
  - Create tests for your application
  - Coverage must be at least 70%

## Restrictions
- Don’t include extra dependencies (lodash, ramda).
- Don’t include css loaders or css libraries (bootstrap, bulma, semantic).
- Don’t use inline styles.
- Minimize the use of React Components internal state.
- Application must preserve the state for favorites. This means that if your refresh the page, it must display the ones that you previously selected.
- Constantly commit your code.

## Code Review
- Fork this project.
- You must open a pull request (PR) against this repo (master branch) for each of your deliveries.
- If you send a commit after the deadline we won't take it into account for the evaluation.
- All feedback will be given via your PR.

## TL;DR
1. Use Youtube API
2. Home List View
  - Trending API
  - Search API
3. Favorite List View
  - Context State List
5. Unit Testing
  - Coverage 70%
