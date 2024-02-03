import React from 'react';
/*
TODO Center Heading
TODO Better Fonts
 */

class Header extends React.Component {

  refreshPage = () => {
    window.location.reload();
  }

  render() {
    return (
      <>
      <h1 id={'heading'} onClick={this.refreshPage} style={{cursor: 'pointer'}}>City Explorer</h1>
        {/*<div className="TEST"></div>*/}
        <br/>
      </>
    )
  }
}

export default Header