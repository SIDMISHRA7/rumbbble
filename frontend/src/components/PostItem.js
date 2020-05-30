import React, { useState, useEffect } from "react";
import axios from "axios";

import { ReactComponent as ArrowUpFillIcon } from "../assets/arrow-up-fill.svg";
import { ReactComponent as ArrowDownFillIcon } from "../assets/arrow-down-fill.svg";

export default function PostItem({
  _id,
  title,
  description,
  author: { name, picture },
  image,
  children,
}) {
  const [numLikes, setNumLikes] = useState(0);

  useEffect(() => {
    fetchLikeNumber();
  }, [_id]);

  const fetchLikeNumber = async () => {
    try {
      const response = await axios.get(`/likes/${_id}/count`);
      setNumLikes(response.data);
    } catch (error) {
      throw Error(error);
    }
  };

  const handleClickLike = async () => {
    try {
      await axios.post(`likes/${_id}`);
      fetchLikeNumber();
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <a
      className="post-item id-21927"
      data-remote="true"
      href={`/projects/${_id}`}
    >
      {console.log(image)}
      <div
        className="post-item__preview"
        style={{
          backgroundImage: `url("${image}")`,
        }}
      />
      <div className="post-item__content">
        <h3>{title}</h3>
        <p className="description">{description}</p>
        <div className="post-meta">
          <div className="category category--tools">tools</div>
          <div className="post-meta__avatars">
            <img className="avatar" alt={name} src={picture} />
          </div>
          <div className="post-meta__info">
            <span>{name}</span>
            <span>•</span>
            <span>20 hours ago</span>
          </div>
          <div className="post-meta__mobile">
            <div className="post-meta__avatars">
              <img className="avatar" alt={name} src={picture} />
            </div>
            <div className="votes votes--sm votes-id-21927">
              <form className="button_to">
                <button className="up" type="submit" onClick={handleClickLike}>
                  <ArrowUpFillIcon />
                </button>
              </form>
              <p className="vote-count">{numLikes}</p>
              <form className="button_to">
                <button className="down" type="submit">
                  <ArrowDownFillIcon />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="votes votes--lg">
          <form
            className="button_to"
            method="post"
            action="/posts/21927/vote/up"
            data-remote="true"
          >
            <button className="up" type="submit">
              <ArrowUpFillIcon />
            </button>
          </form>{" "}
          <p className="vote-count">{numLikes}</p>
          <form
            className="button_to"
            method="post"
            action="/posts/21927/vote/down"
            data-remote="true"
          >
            <button className="down" type="submit">
              <ArrowDownFillIcon />
            </button>
          </form>
        </div>
      </div>
    </a>
  );
}
