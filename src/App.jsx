import "./App.scss";
import { NavBar, ProductListContainer, ProductDetailsContainer } from "@components";

function App() {
  return (
    <div className="d-flex gap-4 flex-column app">
      <NavBar/>
      {/* <ProductListContainer /> */}
      <ProductDetailsContainer />
    </div>
  );
}

export default App;
