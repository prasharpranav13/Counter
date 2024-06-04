import { useDispatch, useSelector } from "react-redux";

const CounterDisplay = () => {
  const counter = useSelector((store) => store.counter);
  return <h5 className="cnt">Current value is : {counter} </h5>;
};
export default CounterDisplay;
