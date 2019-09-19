import React, { Component } from 'react';

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });
  }

  handleInputChange(e) {
    const { value, name } = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form>
          <div className="form-group">
            <input
              type="text"
              name="areaS"
              className="form-control"
              value={this.state.areaS}
              onChange={this.handleInputChange}
              placeholder="Area solicitante"
            />
          </div>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
            <div className="co-md-4">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
            <div className="co-md-4">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
            <div className="co-md-4">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
            <div className="co-md-4">
              <input
                type="text"
                name="areaS"
                className="form-control"
                value={this.state.areaS}
                onChange={this.handleInputChange}
                placeholder="Area solicitante"
              />
            </div>
          </div>
        </form>
      </div>
    )
  }

}

export default TodoForm;
