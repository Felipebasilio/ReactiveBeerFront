import "./App.scss";
import { NavBar, ProductListContainer } from "@components";

function App() {
  return (
    <div className="d-flex gap-4 flex-column app">
      <NavBar/>
      <ProductListContainer />
    </div>
  );
}

export default App;
