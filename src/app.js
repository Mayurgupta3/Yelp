import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import {browserHistory, Route, Router} from 'react-router'
import makeRoutes from './routes'
import App from 'containers/App/App'

const App = React.createClass({
  render: function() {
    return (
      <div className={styles.wrapper}>
        <h1>
          <i className="fa fa-star"></i>
          Environment: {__NODE_ENV__}</h1>
      </div>
    )
  }
});
const Home = React.createClass({
  render: function() {
    return (<div>Hello world</div>)
  }
})

const routes = makeRoutes()


const routes = (
  <Router>
    <Route path="/" component={Home} />
  </Router>
)

const mountNode = document.querySelector('#root');
ReactDOM.render(
  <App history={browserHistory}
  	   routes={routes}  />, mountNode);