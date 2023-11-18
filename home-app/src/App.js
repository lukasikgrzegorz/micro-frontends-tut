import React, { lazy, Suspense } from "react"; // Must be imported for webpack to work
import "./App.css";

const Header = lazy(() => import("HeaderApp/XHeader"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
      </Suspense>
      <div className="container">Strona główna</div>
    </div>
  );
}

export default App;
