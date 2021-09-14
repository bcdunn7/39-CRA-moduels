// helper functions

// returns a randomly selected item from array of items
const choice = (items) => items[Math.floor(Math.random() * items.length)];

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
const remove = (items, item) => {
    const idx = items.indexOf(item);
    if (idx === -1) return undefined;
    const removed = items.splice(idx, 1)
    return removed;
}


export { choice, remove };