import React, { Component } from 'react';

class TodoForm extends Component {
  constructor () {
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
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <h5>Descripcion detallada del bien o servicio</h5>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="partidaP"
              className="form-control"
              value={this.state.partidaP}
              onChange={this.handleInputChange}
              placeholder="Partida preupuestal"
              />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="cantidad"
              className="form-control"
              value={this.state.cantidad}
              onChange={this.handleInputChange}
              placeholder="Cantidad"
              />
          </div>
          <div className="form-group">
            <select
                name="unidadMedida"
                className="form-control"
                value={this.state.unidadMedida}
                onChange={this.handleInputChange}
              >
              <option>caja</option>
              <option>pieza</option>
              <option>paquete</option>
              <option>galon</option>
              <option>pliego</option>
              <option>servicio</option>
              <option>kilogramo</option>
              <option>metro</option>
              <option>litro</option>
              <option>tonelada</option>
              <option>bulto</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripcion"
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Agregar
            </button>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="justificacion"
              className="form-control"
              value={this.state.justificacion}
              onChange={this.handleInputChange}
              placeholder="Justificacion"
              />
          </div>
        </form>
      </div>
    )
  }

}

export default TodoForm;
