import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Errors extends React.Component {
  

  render(){
    return(
      <Modal show={this.props.showModal} onHide={this.props.toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{this.props.errorMessage}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.toggleModal} variant="secondary">Close</Button>
        </Modal.Footer>
    </Modal>
  );
}
    
  }

export default Errors