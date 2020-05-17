import React from "react";

export const CTX = React.createContext();

const initState = {
  general: [
    { from: "hey", msg: "nani" },
    { from: "hey", msg: "nani" },
    { from: "hey", msg: "nani" },
  ],
  topic2: [
    { from: "hey", msg: "You made it!" },
    { from: "hey", msg: "You made it!" },
    { from: "hey", msg: "You made it!" },
  ],
};

function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [...state[topic], { from, msg }],
      };
    default:
      return state;
  }
}

export default function Store(props) {
  const reducerHook = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
