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


class Wystawy extends React.Component {
  render() {
    return (
      <div>
        <Row>
          
          <Col m={12} s={12}> 
          <Card className="CardHome">
            <Row>
              <Col m={3} s={12}>
                <Card
                id="wystawa1"
                  className=" "
                  closeIcon={<Icon className="">close</Icon>}
                  header={
                    <CardTitle
                      image="https://fashionpost.pl/wp-content/uploads/2018/10/Screen-Shot-2018-10-24-at-13.29.34.png"
                      reveal
                      waves="light"
                    />
                  }
                  reveal={
                    <p className="black-text">
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Wystawa 1"
                >
                  <Button className="black left">
                    Wejscie do wystawy nr 1
                  </Button>
                </Card>
              </Col>
              <Col m={3} s={12}>
                <Card
                id="wystawa2"
                  className=" "
                  closeIcon={<Icon className="">close</Icon>}
                  header={
                    <CardTitle
                      image="https://images.squarespace-cdn.com/content/v1/578596f28419c25970a972ee/1468646483081-ZWC8RXUSFSAV08P1NUBD/ke17ZwdGBToddI8pDm48kOouuPCRmzCdud9lOgByk8N7gQa3H78H3Y0txjaiv_0fwfur4sZOYtjpuXYj5VDAdwJm8kSpZfu4i_U_i2_N4M8kvUHDxcPUBRMAXYq4nBdQZGjoBKy3azqku80C789l0mqcQ-D936CnkPLk9pZSGlbLUCigW4uAgyl-CLM2745Ommv95qovHCrgsOKi2zqSZw/ccf69056-5751-4991-985f-02f1f66b4d23.png"
                      reveal
                      waves="light"
                    />
                  }
                  reveal={
                    <p className="black-text">
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Wystawa 3"
                >
                  <Button className="black left">
                    Wejscie do wystawy nr 3
                  </Button>
                </Card>
              </Col>
           
              <Col m={3} s={12}>
                <Card
                  id="wystawa3"
                  closeIcon={<Icon className="">close</Icon>}
                  header={
                    <CardTitle
                      image="https://cdn.shopify.com/s/files/1/2706/4088/products/bengta-matte-black-pendant-gold-inside-2-600x600.JPG_3a32dd7c-2977-46f4-b99c-979e79fb4266_1024x1024.png?v=1546180360"
                      reveal
                      waves="light"
                    />
                  }
                  reveal={
                    <p className="black-text">
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Wystawa 3"
                >
                  <Button className="black left">
                    Wejscie do wystawy nr 3
                  </Button>
                </Card>
              </Col>
              <Col m={3} s={12}>
                <Card
                  id="wystawa4"
                  closeIcon={<Icon className="">close</Icon>}
                  header={
                    <CardTitle
                      image="https://lh3.googleusercontent.com/proxy/FhCcQs2AYDJKtKnrJIszeI_6KbLs19FLY7zG8jE8-r8OMawDj0TJ8CKDXHcgLP_ohwlWmwNF7RazJcemAfRJdUeXRNBFA8nQRkGWmfya6vfU0zLQUNmEWhE"
                      reveal
                      waves="light"
                    />
                  }
                  reveal={
                    <p className="black-text">
                      Here is some more information about this product that is
                      only revealed once clicked on.
                    </p>
                  }
                  revealIcon={<Icon>more_vert</Icon>}
                  title="Wystawa 4"
                >
                  <Button className="black left ">
                    Wejscie do wystawy nr 4
                  </Button>
                </Card>
              </Col>
            </Row>
            </Card>
          </Col>
          
        </Row>
      </div>
    );
  }
}
export default Wystawy;
