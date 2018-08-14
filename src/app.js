import React from 'react'
import ReactDOM from 'react-dom'
import styles from './styles.module.css'
import 'font-awesome/css/font-awesome.css'
import './app.css'
import './app.css'

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

const mountNode = document.querySelector('#root');
ReactDOM.render(<App />, mountNode);