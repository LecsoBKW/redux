import React from 'react';

const Row = ({todoText, keyVal, deleterow}) => {
  return (
    <div className="row">
      <div className="col-xs-4">{todoText}
      </div>
      <div className="col-xs-4">
        <button className="btn btn-danger" onClick={ () => deleterow(keyVal) } >Delete</button>
        <br/><br/>
      </div>
      <div className="col-xs-4"/>
    </div>
)};

export default Row
