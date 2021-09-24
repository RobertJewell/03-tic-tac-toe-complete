# React Tic Tac Toe - "Complete"

Because nothing says "I'm kinda new to this" like naming a git repo "complete"
Really this is just the version I ended up with after 5 hours or so.

**...or so?**

Fine. Maybe a little more.

Thanks to a busy week this was broken up into chunks, so plenty of time was spent thinking about it while doing other stuff.

This is likely 4 - 5 hours typing/troubleshooting but longer if we include time spent reading docs and thinking how best to approach this.

**...so it's well thought out?**

...

It's not _not_ thought through. (wow, english language) But there is a lot that could be done with a refactor or 2.

It has a far heavier tech stack than it needs (more details at the end of this readme)

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

- An SVG board in the history dropdown showing which sqaures were filled on each move

- A "setup" game stage where we can add:

  - Custom player names
  - Custom player icons (svg to allow for...)
  - Custom player colors

- More animations (using framer motion's animatePresence conponent to create smooth transitions between game stages)
