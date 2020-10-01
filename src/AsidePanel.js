import React from "react";
import { Nav, Accordion, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import "./AsidePanel.css";

export default function AsidePanel(props) {
  return (
    <Nav role="navigation" className="flex-column">
      <Accordion
        style={{
          backgroundColor: "#F7F7F7",
          paddingTop: "5px",
        }}
      >
        <Card style={{ borderWidth: "0" }}>
          <Accordion.Toggle
            as={Card.Header}
            className="asideMenuItem"
            eventKey="0"
          >
            Reports & Analytics
            <FontAwesomeIcon
              className="justify-self-end"
              icon={faPlusSquare}
              size="xs"
            />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body
              className="d-flex flex-column"
              style={{
                backgroundColor: "#f7f7f7",
                padding: "10px",
                paddingBottom: "0",
                textAlign: "left",
              }}
            >
              <Card.Link className="asideMenuSubItem" href="#">
                Ceirs Center Reports
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Web Analytics
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Advanced Analytics
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ borderWidth: "0" }}>
          <Accordion.Toggle
            as={Card.Header}
            className="asideMenuItem"
            eventKey="1"
          >
            Data Submission
            <FontAwesomeIcon
              className="justify-self-end"
              icon={faPlusSquare}
              size="xs"
            />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body
              className="d-flex flex-column asideMenuBody"
              style={{
                backgroundColor: "#f7f7f7",
                padding: "10px",
                paddingBottom: "0",
                textAlign: "left",
              }}
            >
              <Card.Link className="asideMenuSubItem" href="#">
                Submit Data
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Search & Edit
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Event History
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ borderWidth: "0" }}>
          <Accordion.Toggle
            as={Card.Header}
            className="asideMenuItem"
            eventKey="2"
          >
            <Card.Link href="" style={{ color: "#666" }}>
              Collaboration
            </Card.Link>
          </Accordion.Toggle>
        </Card>
        <Card style={{ borderWidth: "0" }}>
          <Accordion.Toggle
            as={Card.Header}
            className="asideMenuItem"
            eventKey="3"
          >
            Resources
            <FontAwesomeIcon
              className="justify-self-end"
              icon={faPlusSquare}
              size="xs"
            />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body
              className="d-flex flex-column"
              style={{
                backgroundColor: "#f7f7f7",
                padding: "10px",
                paddingBottom: "0",
                textAlign: "left",
              }}
            >
              <Card.Link className="asideMenuSubItem" href="#">
                Center Projects
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Sequencing Request
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Reagents
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card style={{ borderWidth: "0" }}>
          <Accordion.Toggle
            as={Card.Header}
            className="asideMenuItem"
            eventKey="4"
          >
            Help
            <FontAwesomeIcon
              className="justify-self-end"
              icon={faPlusSquare}
              size="xs"
            />
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="4">
            <Card.Body
              className="d-flex flex-column"
              style={{
                backgroundColor: "#f7f7f7",
                padding: "10px",
                paddingBottom: "0",
                textAlign: "left",
              }}
            >
              <Card.Link className="asideMenuSubItem" href="#">
                Help Desk
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Data Standards
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                FAQ
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Training Materials
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href="#">
                Contact Us
              </Card.Link>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        {props.isAdmin ? (
          <Card style={{ borderWidth: "0" }}>
            <Accordion.Toggle
              as={Card.Header}
              className="asideMenuItem"
              eventKey="5"
            >
              Admin
              <FontAwesomeIcon
                className="justify-self-end"
                icon={faPlusSquare}
                size="xs"
              />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body
                className="d-flex flex-column"
                style={{
                  backgroundColor: "#f7f7f7",
                  padding: "10px",
                  paddingBottom: "0",
                  textAlign: "left",
                }}
              >
                <Card.Link className="asideMenuSubItem" href="#">
                  Project Registration
                </Card.Link>
                <Card.Link className="asideMenuSubItem" href="#">
                  Project Setup
                </Card.Link>
                <Card.Link className="asideMenuSubItem" href="#">
                  Metadata Setup
                </Card.Link>
                <Card.Link className="asideMenuSubItem" href="#">
                  Add New Actor
                </Card.Link>
                <Card.Link className="asideMenuSubItem" href="#">
                  Actor Role Management
                </Card.Link>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        ) : (
          ""
        )}
      </Accordion>
    </Nav>
  );
}
