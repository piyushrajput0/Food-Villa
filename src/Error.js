import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  // console.error(error);

  return (
    <div className="errorpage">
      <h2>
        <i className="uil uil-exclamation-triangle"></i> Error Status =
        {error?.status} ({error?.statusText} )
      </h2>
      <h2>❗Error Message = {error?.error?.message}</h2>

      <pre style="padding: 0.5rem; background-color: rgba(200, 200, 200, 0.5);">
        {error?.error?.stack}
      </pre>
    </div>
  );
};

export default Error;
