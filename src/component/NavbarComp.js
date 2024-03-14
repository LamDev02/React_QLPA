import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./style.css";

import Home from "./Forms/Home";
import { Component } from "react";
import Plan from "./Forms/Plan";
import BuyOffer from "./Forms/BuyOffer";
import PAM from "./PAM";
import Order from "./Forms/Order";
import Payment from "./Forms/Payment";
import Forms from "./Forms/Forms";
import Report from "./Forms/Report";
import { CiWallet } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

export default class NavbarComp extends Component {
  render() {
    return (
      <header>
        <Router>
          <div class="header">
            <div>
              <Navbar id="navbar" bg="dark" variant="dark" expand="lg">
                <Container>
                  <div>
                    <CiWallet color="white" size={"24px"}></CiWallet>
                  </div>
                  <Navbar.Brand>eProcurement</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <Nav.Link as={Link} to={"/home"}>
                        Trang chủ
                      </Nav.Link>
                      <NavDropdown title="Kế hoạch" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"plan"}>
                          Kế hoạch
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to={"/buyoffer"}>
                        Đề nghị mua
                      </Nav.Link>
                      <NavDropdown
                        title="Phương án mua"
                        id="basic-nav-dropdown"
                      >
                        <NavDropdown.Item as={Link} to={"/pam"}>
                          PAM
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Đơn hàng" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/order"}>
                          Đơn hàng
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown title="Thanh toán" id="basic-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/payment"}>
                          Thanh toán
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">
                          Something
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                          Separated link
                        </NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link as={Link} to={"/forms"}>
                        Biểu mẫu
                      </Nav.Link>
                      <Nav.Link as={Link} to={"/report"}>
                        Báo cáo
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </div>
            <div class="navLogo">
              <IoIosNotifications size={20} style={{ marginRight: 10 }}>
                ""
              </IoIosNotifications>
              <IoSettingsOutline
                size={20}
                style={{ marginRight: 10 }}
              ></IoSettingsOutline>
              <FaRegUser size={20} style={{ marginRight: 10 }}></FaRegUser>
              <CgMenuGridO size={20} style={{ marginRight: 10 }}></CgMenuGridO>
            </div>
          </div>

          <div>
            <Switch>
              <Route path="/plan">
                <Plan />
              </Route>
              <Route path="/buyoffer">
                <BuyOffer />
              </Route>
              <Route path="/pam">
                <PAM />
              </Route>
              <Route path="/order">
                <Order />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route path="/forms">
                <Forms />
              </Route>
              <Route path="/report">
                <Report />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    );
  }
}
