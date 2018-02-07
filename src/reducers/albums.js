/**
 * ## albums
 * @reducer
 * favorites redux reducers
 */
export default (state = [], payload) => {
  switch (payload.type) {
    case "add":
      return state.indexOf(payload.album) === -1
        ? [...state, payload.album]
        : state;
    case "remove":
      return state.filter(item => payload.album !== item);
    case "filter":
      return [...state, { filterString: payload.filterString }];
    default:
      return state;
  }
};
