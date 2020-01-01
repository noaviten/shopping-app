import React, { useState, useEffect } from "react";
import { Redirect, useLocation } from "react-router-dom";
import { PageSection } from "./appLayout";

export function PageNotFound() {
  const [ttr, setTtr] = useState(3);
  const location = useLocation();
  useEffect(() => {
    const timer = setTimeout(() => {
      setTtr(ttr - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [ttr]);
  if (ttr === 0) {
    return <Redirect to="/" />;
  }
  return (
    <PageSection heading={`Page ${location.pathname} not found :(`}>
      <h3>Redirecting to home page in {ttr}...</h3>
    </PageSection>
  );
}

export default PageNotFound;
