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
import "materialize-css";
import YouTube from "react-youtube";
import React, { Component } from "react";
import ListaArtystow from "../../jsony/ListaArtystow";

class Artysci extends Component {
  constructor() {
    super();

    this.state = {
      search: null,
      idtoshow: null,
    };
  }

  handleClick = (event) => {
    let keyid = event.target.id;
    this.setState({ idtoshow: keyid });
    console.log(keyid);
  };

  handleClickWithId = (event, id) => {
    this.setState({ idtoshow: id });
    console.log(id);
  };

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const items = ListaArtystow.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.plname.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.plprodukty
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        data.plopakowania
          .toLowerCase()
          .includes(this.state.search.toLowerCase()) ||
        data.rodzaj.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <Row>
            <Col m={6} s={12}>
              <Card
                className="artyscicard"
                actions={[
                  <Button
                    className="grey hoverable"
                    onClick={(e) => this.handleClickWithId(e, data.id)}
                  >
                    info
                  </Button>
                ]}
                closeIcon={<Icon>close</Icon>}
                header={<CardTitle image={data.autorimg} />}
                horizontal
                revealIcon={<Icon>more_vert</Icon>}
              >
                {data.autor}
              </Card>
            </Col>
          </Row>
        </div>
      );
    });
    const pickeditem = ListaArtystow.filter((data) => {
      if (this.state.idtoshow == null) return data;
      else if (data.id === this.state.idtoshow) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <div>
            <Row>
              <Col>
                <Col m={12} s={12}>
                  <Card className="z-depth-3">
                    <Row>
                      <img
                        src="https://judithkingsleyart.com/wp-content/uploads/2012/06/bring-art-to-life-01.png"
                        alt=""
                        width="100%"
                      />
                    </Row>
                  </Card>
                </Col>
              </Col>
            </Row>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Row><Col m={7} s={12} push="">
            {pickeditem}
          </Col>
          <Col m={3} s={12}>
            {items}
          </Col>
          
        </Row>
      </div>
    );
  }
}

export default Artysci;
