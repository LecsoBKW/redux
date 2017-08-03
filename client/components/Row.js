import React, {Component} from 'react';

const Row = ({todoText}) => (
    <div className="row">
      <div className="col-xs-4">{todoText}
      </div>
      <div className="col-xs-4">
        <button className="btn btn-danger">Delete</button>
        <br/><br/>
      </div>
      <div className="col-xs-4"/>
    </div>
);

export default Row
