import React from "react";

const Button = React.lazy(() => import("exposer/Button"));

export const Batatinha = () => {
  return (
    <React.Suspense fallback={<div>loading!</div>}>
      <Button />
    </React.Suspense>
  );
};
