import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { AnimatePresence } from "framer-motion";
import { NavBar, ProductListContainer, ProductDetailsContainer } from "@components";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex gap-4 flex-column app">
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<ProductListContainer />} />
              <Route path="/product/:id" element={<ProductDetailsContainer />} />
            </Routes>
          </AnimatePresence>
        </div>
      </Router>
    </Provider>
  );
}

export default App;