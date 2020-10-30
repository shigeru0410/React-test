import React from "react";
import Article from "./Article";

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished
    })
  };

  render() {
    const authorName = "おいおい"
    return (
      <>
        <Article 
          title = {"止まるんじゃねぇぞ"} 
          isPublished = {this.state.isPublished} 
          toggle = {() => this.togglePublished()}
          count = {this.state.count}
        />
      </>
    )
  }
}

export default Blog