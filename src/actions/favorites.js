/**
 * ## favorites
 * favorites redux actions
 */
export const addFavorite = album => ({
  type: "add",
  album
});

export const removeFavorite = album => ({
  type: "remove",
  album
});

export const filterFavorites = filterString => ({
  type: "filter",
  filterString
});
