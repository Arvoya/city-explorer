import React from 'react';


class Header extends React.Component {

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <>
      <h1 onClick={this.refreshPage} style={{cursor: 'pointer'}}>City Explorer</h1>
      <br />
      </>
    )
  }
}

export default Header