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

import ListaAukcji from "./ListaAukcji";

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
          <Col m={6} s={12} push="">
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
          <Col m={10} s={12}>
            <input
              className="input"
              type="text"
              placeholder="Wyszukaj aukcje po autorze, nazwie dzieła lub cenie "
              onChange={(e) => this.searchSpace(e)}
            />
            {items}
          </Col>
        </Row>
      </div>
    );
  }
}

export default Aukcje;
