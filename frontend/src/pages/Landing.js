import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import { selectUser } from "../reducers/authSlice";

import { ReactComponent as ArrowDownIcon } from "../assets/arrow-down.svg";
import PostItem from "../components/PostItem";

export default function LandingPage() {
  const user = useSelector(selectUser);
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    let mounted = true;
    const fetchProjecFeed = async () => {
      const { data: feed } = await axios.get("/posts/all");
      if (mounted) setFeed(feed);
    };
    fetchProjecFeed();
    return () => (mounted = false);
  }, []);

  useEffect(() => {
    document.title =
      "Rumbbble - Discover the World's Top Developers and Programming Enthusiasts";
  }, []);

  const renderPostPreviews = () =>
    feed.map((props) => (
      <PostItem key={props._id} {...props}>
        <div>Hello</div>
      </PostItem>
    ));

  return (
    <div className="container">
      <div className="posts">
        <div className="home-intro">
          <h1>Top programming projects for</h1>
          <form className="category-filter">
            <select
              className="js-posts-range"
              name="range"
              style={{ width: "173px" }}
            >
              <option value="today">today</option>
              <option value="week">this week</option>
              <option value="month">this month</option>
              <option value="year">this year</option>
            </select>
            <ArrowDownIcon />
          </form>
        </div>
        {renderPostPreviews()}
      </div>
    </div>
  );
}
