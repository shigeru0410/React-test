import React from "react";
import Article from "./Article";
import {Foo, Bar} from './components/FooBar';
import Hoge from './components/Hoge';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPublished: false,
      count: 0
    }
  }

  componentDidMount() {
    document.getElementById( 'counter').addEventListener('click', this.countUp)
  }

  componentDidUpdate() {
    if (this.state.count >= 10){
      this.setState( {count: 0 })
    }
  }

  componentDidCatch() {
    document.getElementById( 'counter').removeEventListener('click', this.countUp)
  }

  togglePublished = () => {
    this.setState( {
      isPublished: !this.state.isPublished
    })
  };

  countUp = () => {
    this.setState( { count: this.state.count + 1})
  }

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
        <Foo />
        <Bar />
        <Hoge />
      </>
    )
  }
}

export default Blog