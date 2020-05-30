import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import Container from "react-bootstrap/Container";

import { selectUser } from "../reducers/authSlice";

import PostItem from "../components/PostItem";

const PostPreviewsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 36px;
`;

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
    <Fragment>
      <Container className="px-sm-0">
        <PostPreviewsContainer className="mt-4 card-deck">
          {renderPostPreviews()}
        </PostPreviewsContainer>
      </Container>
    </Fragment>
  );
}
