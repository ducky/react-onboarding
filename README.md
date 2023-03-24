# Basic Onboarding React App for Friendos

Hello! This tiny app was created to help you as a new hire or intern have a basic starting point for your first react app with some helpful checkpoints you can show off and receive feedback or assistance.

This example is using a public API called [CheapShark](https://apidocs.cheapshark.com/) which is a site that tracks video game deals. It has some really helpful base endpoints as well as ones where you can be creative.

Listed below are the different milestones with tasks and what you can expect to have completed after each one. Please go through the "First Steps" initially so that you're ready.

This is a very loose project, so be as creative and fun as you want. Try something you maybe wouldn't have before, but also make sure you have the end result you expect first. :)

## First Steps - DO THESE FIRST IN ORDER

- [Helpful Concepts](./docs/1.helpful-reads.md) - Gives you a very basic refresher on JS/React or teaches you some new concepts to look into more.
- [Initial Setup](./docs/2.setup.md) - Makes sure your dev setup is ready.
- [Project Intro](./docs/3.intro.md) - Details the folder structure.

## Table of Contents

- [First Milestone - Display/View Games](#first-milestone---displaying-a-list-of-games)
- [Second Milestone - Fetch from API](#second-milestone---fetching-items-from-an-api)
- [Third Milestone - Add React Router](#third-milestone---using-react-router)
- [Fourth Milestone - Add Filtering/Searching](#final-milestone---filteringsorting-results)

## Referenced Libraries

- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- [Cheapshark API](https://apidocs.cheapshark.com/)
- [React](https://reactjs.org/docs)
- [React Router](https://reactrouter.com/en/main/getting-started/overview)
- [Tabler](https://preview.tabler.io/docs/)
- [Vite](https://vitejs.dev/guide/)

## Start Coding

### Reminder - How to Start the App

```bash
npm run dev
```

### First Milestone - Displaying a list of Games

For the first task, the goal is pretty simple. Given a list of [games](./src/data/games.json), display the list of them to the user. When clicking on a game (or details button), it should expand, show a modal, or something similar to let you view more information about the game.

#### First Milestone - Expected Result

1. Viewing the site shows a list of video games and a small summary about them.
1. Clicking on a single video game should give us more details about it in some form (expanded, modal, etc).

### Second Milestone - Fetching Items from an API

This task will introduce you to retrieving information from a remote API and then displaying the results to the page. You'll probably need to display a loader or something similar while waiting for the information to arrive. You should be able to reuse the rest of your logic, since the array results should look the same as the original json you used.

The API route you'll want to use is `https://www.cheapshark.com/api/1.0/deals?upperPrice=15`, which uses the cheapshark public API. If you'd like to dig into it more or reference ways to filter results down (hint: further milestones might use this), here is the docs for the API: [Cheapshark API](https://apidocs.cheapshark.com/).

### Second Milestone - Expected Result

1. Viewing the site shows a list of video games and a small summary about them, loaded from a remote server.
1. Clicking on a single video game should give us more details about it in some form (expanded, modal, etc).

## Third Milestone - Using React Router

This task will introduce you to the basics of [React Router](https://reactrouter.com/en/main/getting-started/overview). For this you'll need to install a few things (react-router and react-router-dom). This should all be covered in the link above, or feel free to ask for help.

Once you have the router configured, this task will require you to send the user to a separate page when viewing a single result.

### Third Milestone - Expected Result

1. Viewing the site shows a list of video games at either `/` or `/games`
1. Clicking on a single video game should send us to a new page with details about that item `/games/:id`
1. BONUS - Try loading more detailed information from the API for that specific item.

## Final Milestone - Filtering/Sorting Results

This task will help you to make your results more user friendly by adding a way to filter down and sort the games. This can all be done locally with the array of data after the information has come back from the API, but this API also supports some advanced filtering, so you can be as creative as you want.

### Fourth Milestone - Expected Result

1. When viewing the list of video games, add a text input that can be used to filter results down (Hint: use `.filter` and `.includes` if doing locally).
1. Add a select box with some options for sorting. Can be whatever you want, but try to at least do `Alphabetical - Ascending/Descending`.

## Fin

That's all I could think of for now, congrats for making it here! If you want to try adding something fancy or just have fun with it, here's your chance to play around! You could add something like pagination for larger results, or something similar. If you need any assistance with anything always feel free to ask!
