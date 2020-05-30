import React, { Fragment } from "react";
import { useSelector } from "react-redux";

import { selectUser } from "../reducers/authSlice";

import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const LINKS = [
  { id: 0, text: "Top", link: "/" },
  { id: 1, text: "Inspiring", link: "/category/inspiring" },
  { id: 2, text: "Learn", link: "/category/learn" },
  { id: 3, text: "Tools", link: "/category/tools" },
];

export default function Header() {
  const user = useSelector(selectUser);

  const renderLinks = LINKS.map(({ id, text, link }) => (
    <a key={id} href={link}>
      {text}
    </a>
  ));

  const renderSignedIn = (
    <Fragment>
      <a className="auth-nav-item" href="/profile">
        <img src={user.picture} className="avatar" alt={user.name} />
      </a>
      <a className="btn btn--blue auth-nav-item" href="/projects/new">
        Upload
      </a>
    </Fragment>
  );

  const renderSignedOut = (
    <a className="btn btn--blue auth-nav-item" href="/login">
      Sign in
    </a>
  );

  return (
    <header>
      <div className="container container--full">
        <div>
          <a className="logo" href="/">
            <Logo />
          </a>
          <nav>{renderLinks}</nav>
        </div>
        <div>
          <form className="search js-search">
            <SearchIcon />
            <input
              type="text"
              name="q"
              id="q"
              defaultValue
              placeholder="Search"
            />
          </form>
          {user ? renderSignedIn : renderSignedOut}
        </div>
      </div>
    </header>
  );
}
