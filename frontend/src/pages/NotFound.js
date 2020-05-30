import React from "react";

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="status-handler">
        <h2>404</h2>
        <p>
          <b>The page you're looking for can't be found.</b> This could be
          because it no longer exists or you don't have access to it.
        </p>
        <p>
          Make sure you're logged in and try again. If it still doesn't work
          feel free to contact me at{" "}
          <a href="mailto:diazabdulm@gmail.com" className="link">
            diazabdulm@gmail.com
          </a>
        </p>
        <br />
        <br />
        <a className="btn btn--lg btn--grey" href="/">
          Visit home page
        </a>
      </div>
    </div>
  );
}
