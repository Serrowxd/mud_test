# mud_test

Literally just throwing ideas at the wall idk

Currently working on adding an HTML GUI that will visualize the data.

The bench still works for the initial command line version, `npm run bench` - this filters through `bench.js` which is deprecated and not touched, but kept for reference.

All future adjustments will be done through `index.html` until further notice.

We're doing this as a one-page game!

---

**Notes**

Happy place for my notes.

I'm heavily considering adding Jquery, though currently I don't have a use for it. I might in the future, for the time being I'll hold it on secondary until I end up wanting to run it. This is the slim/min version, so I'll make sure to include the non-slim version in the future if I decide to stick with it for Ajax calls.

The next few commits past this point will likely be UI based, I need to get something put up on screen that the user can see and interact with, and I think once I have a visual representation of what the user will be seeing/using it'll be easier for me.

Data persistence is future dated, but I'm not intending for this to be anything long-term currently, so a back-end server isn't being considered until the logic is all in play - in which case I will move the front-end data manipulation into back-end so I can route the majority of the logic through the server.

I didn't expect to make it this far with a test bench, but here we are!

---

**Bugs**

Clicking "Begin Mining" more than once will cause it to start multiple instances of the mining process.
