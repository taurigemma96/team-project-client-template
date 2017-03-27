import React from 'react';

export default class UserHub extends React.Component {
  render(){
    return(
      <div className="panel panel-default user-hub">
          <div className="panel-body">
              <div className="row">
                  <div className="col-md-2">
                      <div className="media">
                          <div className="media-body">
                              <img src={this.props.userhubprofpic} alt="" className="img-rounded img-responsive" />
                          </div>
                      </div>
                  </div>
                  <div className="col-md-10">
                      <p className="pull-left">Hello, <a href="#">{this.props.username}</a></p>
                  </div>
              </div>
              <hr />
              <div className="row">
                  <div className="col-md-6">
                      <a href="#"><span className="pull-right"><i className="fa fa-fw fa-cog"></i>Settings</span></a>
                  </div>
                  <div className="col-md-6 logout">
                      <a href="#"><span className= "pull-left"><i className="fa fa-fw fa-sign-out"></i>Logout</span></a>
                  </div>
              </div>
          </div>
      </div>
    )
  }
}
