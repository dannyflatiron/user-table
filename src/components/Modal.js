import React, { useState, useEffect } from 'react';

const Modal = (props) => {
  console.log('modal user', props.user)
  console.log('conditional show', props.show)

  if (!props.show) {
    console.log('conditional show', props.show)
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>
        <div className="modal-body">
          <img src={props.user.picture.large}></img> 
          <p><strong>Email:</strong> {props.user.email}</p>
          <p><strong>Number:</strong> {props.user.phone}</p>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={props.onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;