import { createStore } from "redux";
const INT_VAL = {
  counter: 0,
  privacy: false,
};
const counterReducer = (counterStore = INT_VAL, action) => {
  if (action.type === "INC")
    counterStore = { ...counterStore, counter: counterStore.counter + 1 };
  else if (action.type === "DEC")
    counterStore = { ...counterStore, counter: counterStore.counter - 1 };
  else if (action.type === "ADD")
    counterStore = {
      ...counterStore,
      counter: counterStore.counter + Number(action.payload.num),
    };
  else if (action.type === "SUB")
    counterStore = {
      ...counterStore,
      counter: counterStore.counter - Number(action.payload.num),
    };
  else if (action.type === "RESET")
    counterStore = { ...counterStore, counter: 0 };
  else if (action.type === "TOGGLE")
    counterStore = { ...counterStore, privacy: !counterStore.privacy };
  return counterStore;
};
const counterStore = createStore(counterReducer);
export default counterStore;
