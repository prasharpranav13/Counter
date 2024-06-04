import Header from "./components/Header";
import Container from "./components/Container";
import CounterDisplay from "./components/CounterDisplay";
import Button from "./components/Button";
import "./App.css";
import { useSelector } from "react-redux";
import PrivacyMsg from "./components/PrivacyMsg";
const App = () => {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <Container>
        <Header />
        {privacy ? <PrivacyMsg /> : <CounterDisplay />}
        <Button />
      </Container>
    </>
  );
};
export default App;
