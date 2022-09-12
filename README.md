# Moser Consulting - Intern Onboarding

Hello! This tiny app was created to help new hires or interns have a basic starting point for their first react app with some helpful checkpoints they can show off and receive feedback or assistance.

Listed below are the different milestones and what you can expect to have to show after each one.

## Background Info

Any changes you make will usually be in the [components](./src/components/) folder and is structured like a standard React app.

If you take a look in the [data](./src/data/) folder, you'll see a games.json file, and this is going to be used as your initial source of data until you get to a later step, where you'll be pulling this information from a remote api.

The base app here uses [Tabler](https://preview.tabler.io/docs/) as a design library, which is built on top of [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/). Feel free to keep these libraries or roll your own CSS if you want.

## First Milestone - Displaying a list of Games

For the first task, the goal is pretty simple. Given a list of items (Video Game in our case), display these items to the user. When clicking an game, it should expand, show a modal, or something similar to let you view more information about the game.

### Expected Result

1. Viewing the site shows a list of Video Games and a small summary about them.
1. Clicking on a single Video Game should give us more details about it in some form (expanded, modal, etc).

## Second Milestone - Fetching Items from an API

This task will introduce you to retrieving information from a remote API and then displaying the results to the page. You'll probably need to display a loader or something similar while waiting for the information to arrive. You should be able to reuse the rest of your logic, since the array results should look the same as the original json you used.

The API route you'll want to use is `https://www.cheapshark.com/api/1.0/deals?upperPrice=15`, which uses the cheapshark public API. If you'd like to dig into it more or reference ways to filter results down (hint: further milestones might use this), here is the docs for the API: [Cheapshark API](https://apidocs.cheapshark.com/).

### Expected Result

1. Viewing the site shows a list of Video Games and a small summary about them, loaded from a remote server.
1. Clicking on a single Video Game should give us more details about it in some form (expanded, modal, etc).

## Third Milestone - Using React Router

This task will introduce you to the basics of [React Router](https://reactrouter.com/en/main/getting-started/overview). For this you'll need to install a few things (react-router and react-router-dom). This should all be covered in the link above, or feel free to ask for help.

Once you have the router configured, this task will require you to send the user to a separate page when viewing a single result.

### Expected Result

1. Viewing the site shows a list of Video Games at either `/` or `/games`
1. Clicking on a single Video Game should send us to a new page with details about that item `/games/:id`
1. BONUS - Try loading more detailed information from the API for that specific item.

## Final Milestone - Filtering/Sorting Results

This task will help you to make your results more user friendly by adding a way to filter down and sort the games. This can all be done with the array of data after the information has come back from the API.

### Expected Result

1. When viewing the list of Video Games, add a text input that can be used to filter results down (Hint: use `.filter` and `.includes`).
1. Add a select box with some options for sorting. Can be whatever you want, but try to at least do `Alphabetical - Ascending/Descending`.

## Fin

That's all I could think of for now, congrats for making it here! If you want to try adding something fancy or just have fun with it, here's your chance to play around! You could add something like pagination for larger results, or something similar. If you need any assistance with anything always feel free to ask!