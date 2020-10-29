import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const authorName = "おいおい"
    return (
      <>
        <Article 
          title = {"止まるんじゃねぇぞ"}
          order = {3}
          isPublished = {true}
          author = {authorName}
          />
        <Article 
          title = {"その先に"}
          order = {3}
          isPublished = {true}
          author = {authorName}
          />
        <Article 
          title = {"俺はいるぞ"}
          order = {3}
          isPublished = {true}
          author = {authorName}
          />
      </>
    )
  }
}

export default Blog