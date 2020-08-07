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

### First Delivery (due September 7th 23:59PM)
- Login
  - Connect the applicaction with google API.

- Home View
  - It displays the trending videos using Youtube API.
  - It has a search bar, which uses Youtube API.

- Video Details View
  - It displays the video selected and its information.
  - It has a search bar, which uses Youtube Search API.
  - Each video may be saved as favorite Youtube API, and also can be removed from the same call to action.

- Your Favorites List View
  - It displays the videos that you previously selected, which comes from Youtube API.
  - Each video may be removed from favorites using Youtube API.

At this point, don't worry about styling nor tests, you will be focused on those in the next delivery.

### Second Delivery (due September 11th 23:59PM)
- Style your views using styled component, css or what ever is easier for you.

- Unit Testing
  - Create tests for your application
  - Coverage must be at least 70%

## Restrictions
- Don’t include extra dependencies (lodash, ramda).
- Don’t use inline styles.
- Application must preserve the state for the video details. This means that if your refresh the page, it must display the video that you previously selected and its details.
- Constantly commit your code.

## Code Review
- Fork this project.
- You must open a pull request (PR) against this repo (master branch) for each of your deliveries.
- If you send a commit after the deadline we won't take it into account for the evaluation.
- All feedback will be given via your PR.

## TL;DR
1. Use Youtube API
2. Home List View
  - Youtube API
3. Video details View
  - Context
4. Favorite List View
  - Youtube API
5. Unit Testing
  - Coverage 70%
