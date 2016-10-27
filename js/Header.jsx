const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes

const Header = React.createClass({
  propTypes : {
    handleSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input value={this.state.searchTerm} className='search-input' type='text' placeholder='Search' value={this.props.searchTerm} onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <h2 className="header-back">
          <Link to='/search'>
            Back
          </Link>
        </h2>
      )
    }
    return (
      <header className="header">
        <h1 className="brand">
          <Link to='/' className='brand-link'>
          mVideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = Header
