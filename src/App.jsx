import React, { Suspense, useRef, useLayoutEffect } from "react";
import Calculator from "./components/Calculator";
import LoadingSpinner from "./components/LoadingSpinner";
import CropImage from "./components/CropImage";

const App = () => {
  return (
    <main>
      <h1>React Tests</h1>
      <p>
        A demo app consisting of a few code tests. View the source code <a href="https://github.com/kqwq/react-tests">here</a>.
      </p>
      <h2>1. Lazy Loading</h2>
      <p>The following component has an artificial loading delay of 1 second. Reload the page to see the effect. The calculator doesn't do anything.</p>
      <Suspense fallback={<LoadingSpinner />}>
        <Calculator />
      </Suspense>

      <h2>2. Loading Svelte components</h2>
      <p>Sample crop component written in Svelte</p>
      <small>
        Source: <a href="https://github.com/pngwn/svelte-adapter">https://github.com/pngwn/svelte-adapter</a>
      </small>
      <CropImage />
    </main>
  );
};

export default App;
