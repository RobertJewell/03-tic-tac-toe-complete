# React Tic Tac Toe - Complete

## Live version

https://03-tic-tac-toe-complete.vercel.app/

## Highlights

Index.js is now using the game state to show different screens, this is partly for readbility and debugging, and partly to make it easier to expand later.

The state is now being managed by Zustand, think of this as a combination of the useState hook and React Context.

It looks nicer. I've used tailwindCSS purely for speed.

The history is now a dropdown using headlessUI.
This achieves two things:

- The everything resizes nicely, we still have access to everything we need on mobile.
- The dropdown is pretty accessible (full keyboard navigation)

The winning combination is shown in the event of a win.

## Tech Stack

- NextJS
- State managment with Zustand (no more prop drilling)
- Styling with TailwindCSS
- Animation with Framer Motion

## Roadmap

If I have free time there's loads that could be added here:

- Dark mode (Zustand makes it very easy to have things like this use Local storage too)

- An SVG board in the history dropdown showing which squares were filled on each move

- A "setup" game stage where we can add:

  - Custom player names
  - Custom player icons (svg to allow for...)
  - Custom player colors

- More animations (using framer motion's animatePresence conponent to create smooth transitions between game stages)
