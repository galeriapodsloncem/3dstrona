import React from "react";
import {
  Icon,
  Button,
  SideNav,
  SideNavItem,
  Row,
  Col,
  Card,
  CardTitle,
} from "react-materialize";
import "materialize-css";

class Rezerwacja extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "plakaty" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Wybrales kategorie" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="">
        <Row>
          <Col>
            <Card>
              <h4>Zapytanie o Rezerwacje</h4>
              <form className="">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label for="first_name">first Name</label>
                  </div>
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label for="last_name">Last Name</label>
                  </div>
                </div>
                <div className="row">
                  <div class="input-field col s12">
                    <textarea
                      id="textarea2"
                      class="materialize-textarea"
                      data-length="120"
                    ></textarea>
                    <label for="Opis">Opis</label>
                  </div>
                </div>
                <div className="row">
                  <div class="input-field col s12">
                    <textarea
                      id="textarea3"
                      class="materialize-textarea"
                      data-length="120"
                    ></textarea>
                    <label for="data oraz czas trwania">
                      data oraz czas trwania
                    </label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" type="email" className="validate" />
                    <label for="email">Email</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s12">
                    <select>
                      <option value="1">Option 1</option>
                      <option value="2">Option 2</option>
                      <option value="3">Option 3</option>
                      <option value="4">Option 3</option>
                    </select>
                    <label>Wybierz Pomieszczenie</label>
                  </div>
                </div>
                <Row></Row>
                <Button>Wyslij</Button>
              </form>
            </Card>
          </Col>
          <Col m={6} s={12}>
            <Card m={6} s={12}>
              <img
                src="https://raw.githubusercontent.com/galeriapodsloncem/3dstrona/master/babylonjs-app/public/rzut.png"
                alt=""
                width="100%"
              />
            </Card>
            <Card>
              dsad asd asdsadsadasdasdasd asdasdasdasdasdasdasdasdasdasdasdas
            </Card>
            <Card>
              dsad asd asdsadsadasdasdasd asdasdasdasdasdasdasdasdasdasdasdas
            </Card>
            <Card>
              dsad asd asdsadsadasdasdasd asdasdasdasdasdasdasdasdasdasdasdas
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Rezerwacja;
