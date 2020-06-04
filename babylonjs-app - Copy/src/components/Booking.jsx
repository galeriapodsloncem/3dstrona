import React from 'react';
import {NavItem, Navbar, Icon, Button,  Col, CardTitle, Card, Row, CardPanel, MediaBox, Divider, Modal} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import 'materialize-css';

class Booking extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
  //    this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert(' ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
              <Row>
                  <Col
                  m={5}
                  s={12}>
        <form onSubmit={this.handleSubmit}>
            <Col>
          <label>
            <input id="StartDate"  type="text" className="datepicker "  value={this.state.value} onChange={this.handleChange} />
          </label>
          </Col>
          <Col>
          <label>
            <input id="EndDate" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          </Col>
          <input type="submit" value="Wyślij" />
        </form>
        </Col>
        </Row>
        </div>
      );
    }
  }
  export default Booking