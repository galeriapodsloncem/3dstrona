import {
  NavItem,
  Navbar,
  Icon,
  Button,
  Col,
  CardTitle,
  Card,
  Row,
  CardPanel,
  MediaBox,
  Divider,
  Modal,
  DatePicker,
  Form,
} from "react-materialize";
import { NavLink } from "react-router-dom";
import "materialize-css";

import React, { Component } from "react";

import ListaAukcji from "../../jsony/ListaAukcji";

class Aukcje extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = ListaAukcji.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.plname.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.autor.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.cena.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <Col m={12} s={12} push="">
            <Card
              className="z-depth-1 hoverable "
              id="Cardposters"
              actions={[
                <a key="1" href={data.img}>
                  Zobacz w wysokiej rozdzielczosci
                </a>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image={data.img} />}
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <h4>{data.plname}</h4>
              <h5>{data.autor}</h5>
              <p1>{data.pldescription}</p1>
              <br></br>
              <h5>{data.cena}</h5>
            </Card>
          </Col>
        </div>
      );
    });

    return (
      <div>
        <Row>
          <Row></Row>
          <Col m={6} s={12}>
            <Card className="z-depth-3">
            <input
              className="input "
              type="text"
              placeholder="Wyszukaj aukcje po autorze, nazwie dzieła lub cenie "
              onChange={(e) => this.searchSpace(e)}
            />
            </Card>
            {items}
          </Col>
          <Col m={5} s={12}>
            <Card>
              <h4>Propomowane aukcje</h4>
              <Row></Row>
              <Card
              className="z-depth-1 hoverable "
              id="Cardposters"
              actions={[
                <a key="1" href="https://www.zakopane.pl/assets/zakopane25/media/files/14698277-1e9c-4f0a-b5fc-e54b6ab2bb7a/img-2101.PNG">
                  Zobacz w wysokiej rozdzielczosci
                </a>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="https://www.zakopane.pl/assets/zakopane25/media/files/14698277-1e9c-4f0a-b5fc-e54b6ab2bb7a/img-2101.PNG"/>}
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <h4>sdfsd</h4>
              <h5>sdffsd</h5>
              <p1>sfdfsd</p1>
              <br></br>
              <h5>fsdfsd</h5>
            </Card>
            <Card
              className="z-depth-1 hoverable "
              id="Cardposters"
              actions={[
                <a key="1" href="https://i.pinimg.com/originals/af/b1/0a/afb10aa49b0734a152710d53f2b79a8e.png">
                  Zobacz w wysokiej rozdzielczosci
                </a>,
              ]}
              closeIcon={<Icon>close</Icon>}
              header={<CardTitle image="https://i.pinimg.com/originals/af/b1/0a/afb10aa49b0734a152710d53f2b79a8e.png"/>}
              horizontal
              revealIcon={<Icon>more_vert</Icon>}
            >
              <h4>sdfsd</h4>
              <h5>sdffsd</h5>
              <p1>sfdfsd</p1>
              <br></br>
              <h5>fsdfsd</h5>
            </Card>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Aukcje;
