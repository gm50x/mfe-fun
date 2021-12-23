import React from "react";
// const Button = React.lazy(() => import("exposer/Button"));

import { Batatinha } from "./components/Batatinha";
export const App = () => {
  return (
    <div>
      <h1>Hello World! I am a consumer app!</h1>
      {/* <React.Suspense fallback={<div>loading!</div>}>
        <Button />
      </React.Suspense> */}

      <Batatinha />
    </div>
  );
};

export default App;
