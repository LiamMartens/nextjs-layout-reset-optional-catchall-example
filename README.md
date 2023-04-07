# README
This repo is meant to illustrate a potential issue with layouts and a optional catch all route.

It appears the layout state is reset when navigating between routes, even though the paths fall within the same segment (`[[...path]]`).

To demo this issue:
- Run the project `yarn dev`
- Click the `Click me` button to toggle the nav state
- Navigate to another page using one of the links on the page.

This does work when the layout is moved to the root itself.
