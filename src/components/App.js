import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/posts';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import propType from 'prop-types';
import {Navbar,Home,Page404}from './';


const Login = () => <div>Login</div>;

const Signup = () => <div>Signup</div>;




class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }
  render() {
    const { posts } = this.props;
    return (
      <Router>
      <div>
        <Navbar/>
        {/* <PostsList posts={posts} /> */}
       
          <Switch>
          <Route exact path="/" render={() => {
                return <Home posts={posts} />;}}/>

          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={Page404} />
          </Switch>
      </div>
      </Router>
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
