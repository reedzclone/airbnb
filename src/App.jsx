import "./App.css";
import Logo from "./components/Header/Logo/Logo";
import Filter from "./components/Header/Filter/Filter";
import MainLayout from "./layouts/mainLayout/MainLayout";

function App() {
  return (
    <>
      <Logo />
      <Filter />
      <MainLayout />
    </>
  );
}

export default App;
