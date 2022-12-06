import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import propType from 'prop-types';
import {PostsList,Navbar}from './index';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      
      <div>
        <Navbar/>
        <PostsList posts={posts} />
      </div>
      
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}
App.propTypes={
  posts: propType.array.isRequired,

}


export default connect(mapStateToProps)(App);
