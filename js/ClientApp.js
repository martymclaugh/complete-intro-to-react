/* global React ReactDOM */
var React = require('react')
var ReactDOM = require('react-dom')
var MyTitle = require('./MyTitle')
var div = React.DOM.div

var MyTitleFact = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
  div(null,
    MyTitleFact({title: 'props are great!', color: 'rebeccapurple'}),
    ce(MyTitle, {title: 'use props everywhere!', color: 'mediumaquamarine'}),
    React.createElement(MyTitle, {title: 'props are dope af', color: 'peru'})
  )
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))
