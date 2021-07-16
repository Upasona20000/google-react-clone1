import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";
import Search from "./Search";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          {/*This link is kind of a tag in html, using a tag cause the page to refresh but this link tag do not refresh the page */}
          <Router>
            <Link to="/about">About</Link>
            <Link to="/store">Store</Link>
          </Router>
        </div>
        <div className="home__headerRight">
          <Router>
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
          </Router>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
            <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
