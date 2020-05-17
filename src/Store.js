import React from "react";

const CTX = React.creactContext();

const initState = {
  general: [
    { from: "hey", msg: "nani" },
    { from: "hey", msg: "nani" },
    { from: "hey", msg: "nani" },
  ],
  topic2: [
    { from: "hey", msg: "nani" },
    { from: "hey", msg: "nani" },
    { from: "hey", msg: "nani" },
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
  const reducerHooks = React.useReducer(reducer, initState);

  return <CTX.Provider value={reducerHook}>{props.children}</CTX.Provider>;
}
