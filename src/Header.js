import React from "react";
import { Dropdown, Nav, NavItem, NavDropdown, Navbar } from "react-bootstrap";
import { ACCOUNT_INFO_URL, LOGOUT_URL, USER_PROFILE_URL } from "./constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "./ceirs-logo.png";
import "./Header.css";

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hoveredMenu: "", navBarCollapsed: false };
  }

  handleOpen = (event) => {
    this.setState({ isOpen: true, hoveredMenu: event.currentTarget.id });
  };

  handleClose = () => {
    this.setState({ isOpen: false, hoveredMenu: "" });
  };

  render() {
    console.log(this.props.isAdmin);

    const adminNavItem = !this.props.isAdmin ? (
      <Nav.Item className="navItem">
        <Dropdown
          id="admin"
          onMouseEnter={this.handleOpen}
          onMouseLeave={this.handleClose}
          show={this.state.hoveredMenu === "admin"}
          style={{ textTransform: "uppercase" }}
        >
          <Dropdown.Toggle
            className="headerMenuDropdownButton"
            style={{
              color: "#b6cad9",
              border: "0px solid #efefef",
              backgroundColor:
                this.state.hoveredMenu === "admin" ? "#313843" : "#012641",
            }}
          >
            Admin
          </Dropdown.Toggle>
          <Dropdown.Menu className="headerMenuDropdown">
            <Dropdown.Item
              href="/ometa/centerreport.action"
              className="headerMenuDropdownItem"
            >
              Project Registration
            </Dropdown.Item>
            <Dropdown.Item
              href="/ometa/centerreport.action"
              className="headerMenuDropdownItem"
            >
              Project Management
            </Dropdown.Item>
            <Dropdown.Item
              href="/ometa/centerreport.action"
              className="headerMenuDropdownItem"
            >
              Metadata setup
            </Dropdown.Item>
            <Dropdown.Item
              href="/ometa/centerreport.action"
              className="headerMenuDropdownItem"
            >
              Add New Actor
            </Dropdown.Item>
            <Dropdown.Item
              href="/ometa/centerreport.action"
              className="headerMenuDropdownItem"
            >
              Actor Role Management
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Item>
    ) : (
      ""
    );
    return (
      <div
        style={{
          width: "100%",
          backgroundColor: "#012641",
        }}
      >
        <div style={{ height: "30px" }}>
          <div
            className="dropdown"
            style={{ float: "right", margin: "0 61.67px" }}
          >
            <Dropdown as={NavItem}>
              <Dropdown.Toggle
                className="userDropdownButton"
                style={{
                  backgroundColor: "#eeeeee",
                  color: "black",
                  border: "0px solid #efefef",
                }}
                variant="success"
                id="dropdown-basic"
              >
                {this.props.userName}
              </Dropdown.Toggle>

              <Dropdown.Menu className="userDropdownMenu">
                <Dropdown.Item
                  className="userDropdownMenuItem"
                  href={USER_PROFILE_URL + this.props.userId}
                >
                  My Profile
                </Dropdown.Item>
                <Dropdown.Item
                  className="userDropdownMenuItem"
                  href={ACCOUNT_INFO_URL}
                >
                  Account Information
                </Dropdown.Item>
                <Dropdown.Item
                  className="userDropdownMenuItem"
                  href={LOGOUT_URL}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div style={{ height: "80px" }}>
          <div style={{ float: "left", width: "240px", marginLeft: "61.67px" }}>
            <a href="http://www.niaidceirs.org/">
              <img
                src={logo}
                style={{ width: "240px", zIndex: "2" }}
                alt="CEIRS Logo"
              />
            </a>
          </div>
          <div style={{ float: "right", marginRight: "61.67px" }}>
            <Navbar
              style={{ paddingTop: 0 }}
              expand="md"
              onToggle={(showSideBar) => {
                this.setState({
                  navBarCollapsed: showSideBar,
                });
                this.props.updateShowSideBar(showSideBar);
              }}
            >
              <Navbar.Toggle
                data-target="#basic-navbar-nav"
                aria-controls="basic-navbar-nav"
                style={{ color: "white" }}
                className="border-0"
              >
                <FontAwesomeIcon icon={faBars} color="#C5C6CA" />
              </Navbar.Toggle>

              <Nav
                className="navItems"
                variant="pills"
                style={{
                  zIndex: 2,
                }}
              >
                <Nav.Item className="navItem">
                  <Dropdown
                    id="reports"
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}
                    show={this.state.hoveredMenu === "reports"}
                    style={{ textTransform: "uppercase" }}
                  >
                    <Dropdown.Toggle
                      className="headerMenuDropdownButton"
                      style={{
                        color: "#b6cad9",
                        border: "0px solid #efefef",
                        backgroundColor:
                          this.state.hoveredMenu === "reports"
                            ? "#313843"
                            : "#012641",
                      }}
                    >
                      Reports & Analytics
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="headerMenuDropdown">
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        CEIRS Center Reports
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Web Analytics
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Advanced Analytics
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                <Nav.Item
                  className="navItem"
                  id="data-submission"
                  onMouseOver={this.handleOpen}
                  onMouseOut={this.handleClose}
                >
                  <Dropdown
                    show={this.state.hoveredMenu === "data-submission"}
                    style={{ textTransform: "uppercase" }}
                  >
                    <Dropdown.Toggle
                      className="headerMenuDropdownButton"
                      style={{
                        color: "#b6cad9",
                        border: "0px solid #efefef",
                        backgroundColor:
                          this.state.hoveredMenu === "data-submission"
                            ? "#313843"
                            : "#012641",
                      }}
                    >
                      Data Submission
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="headerMenuDropdown">
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Submit Data
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Search & Edit Data
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Event History
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                <Nav.Item className="navItem">
                  <Nav.Link
                    style={{
                      color: "#b6cad9",
                      border: "0px solid #efefef",
                      borderRadius: "1px",
                    }}
                    href="#"
                    className="headerMenuDropdownButton"
                  >
                    Collaboration
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="navItem">
                  <Dropdown
                    id="resources"
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}
                    show={this.state.hoveredMenu === "resources"}
                    style={{ textTransform: "uppercase" }}
                  >
                    <Dropdown.Toggle
                      className="headerMenuDropdownButton"
                      style={{
                        color: "#b6cad9",
                        border: "0px solid #efefef",
                        backgroundColor:
                          this.state.hoveredMenu === "resources"
                            ? "#313843"
                            : "#012641",
                      }}
                    >
                      Resources
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="headerMenuDropdown">
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Center Projects
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Sequencing Request
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Reagents
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                <Nav.Item className="navItem">
                  <Dropdown
                    id="help"
                    onMouseEnter={this.handleOpen}
                    onMouseLeave={this.handleClose}
                    show={this.state.hoveredMenu === "help"}
                    style={{
                      textTransform: "uppercase",
                    }}
                  >
                    <Dropdown.Toggle
                      className="headerMenuDropdownButton"
                      style={{
                        color: "#b6cad9",
                        border: "0px solid #efefef",
                        backgroundColor:
                          this.state.hoveredMenu === "help"
                            ? "#313843"
                            : "#012641",
                      }}
                    >
                      Help
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="headerMenuDropdown">
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Help Desk
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Data Standards
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        FAQ
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Training Materials
                      </Dropdown.Item>
                      <Dropdown.Item
                        href="/ometa/centerreport.action"
                        className="headerMenuDropdownItem"
                      >
                        Contact Us
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>
                {adminNavItem}
              </Nav>
            </Navbar>
          </div>
          <div
            className="d-flex justify-content-start"
            style={{
              width: "100%",
              zIndex: 1,
              background: "rgba(95, 147, 197, 0.8)",
              height: "22px",
              position: "absolute",
              paddingLeft: "61.67px",
              top: "85px",
            }}
          >
            <a
              href=""
              style={{
                fontSize: "13px",
                color: "white",
                fontStyle: "italic",
                lineHeight: "22px",
                textShadow: "1px 1px #012641",
                width: "320px",
                color: "white",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              Data Processing and Coordinating Center
            </a>
          </div>
        </div>
      </div>
    );
  }
}
