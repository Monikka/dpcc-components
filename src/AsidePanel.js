import React from "react";
import { Nav, Accordion, Card, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusSquare,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import "./AsidePanel.css";
import {
  CEIRS_REPORTS_URL,
  WEB_ANALYTICS_URL,
  SUBMIT_DATA_URL,
  SEARCH_EDIT_URL,
  EVENTS_HISTORY_URL,
  COLLABORATION_URL,
  REPORTS_URL,
  SEQUENCING_URL,
  REAGENTS_URL,
  HELP_DESK_URL,
  DATA_STANDARDS_URL,
  FAQ_URL,
  TRAINING_URL,
  CONTACT_US_URL,
  PROJECT_REGISTRATION_URL,
  PROJECT_MANAGEMENT_URL,
  METADATA_SETUP_URL,
  ACTOR_URL,
  ROLE_MANAGEMENT_URL,
  ACCOUNT_INFO_URL,
  LOGOUT_URL,
  USER_PROFILE_URL,
} from "./constants";

export default function AsidePanel(props) {
  return (
    <Nav role="navigation" id="basic-navbar-nav" className="flex-column">
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
              <Card.Link className="asideMenuSubItem" href={CEIRS_REPORTS_URL}>
                Ceirs Center Reports
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={WEB_ANALYTICS_URL}>
                Web Analytics
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={SUBMIT_DATA_URL}>
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
              <Card.Link className="asideMenuSubItem" href={SUBMIT_DATA_URL}>
                Submit Data
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={SEARCH_EDIT_URL}>
                Search & Edit
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={EVENTS_HISTORY_URL}>
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
            <Card.Link href={COLLABORATION_URL} style={{ color: "#666" }}>
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
              <Card.Link className="asideMenuSubItem" href={REPORTS_URL}>
                Center Projects
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={SEQUENCING_URL}>
                Sequencing Request
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={REAGENTS_URL}>
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
              <Card.Link className="asideMenuSubItem" href={HELP_DESK_URL}>
                Help Desk
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={DATA_STANDARDS_URL}>
                Data Standards
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={FAQ_URL}>
                FAQ
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={TRAINING_URL}>
                Training Materials
              </Card.Link>
              <Card.Link className="asideMenuSubItem" href={CONTACT_US_URL}>
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
                <Card.Link
                  className="asideMenuSubItem"
                  href={PROJECT_REGISTRATION_URL}
                >
                  Project Registration
                </Card.Link>
                <Card.Link
                  className="asideMenuSubItem"
                  href={PROJECT_MANAGEMENT_URL}
                >
                  Project Setup
                </Card.Link>
                <Card.Link
                  className="asideMenuSubItem"
                  href={METADATA_SETUP_URL}
                >
                  Metadata Setup
                </Card.Link>
                <Card.Link className="asideMenuSubItem" href={ACTOR_URL}>
                  Add New Actor
                </Card.Link>
                <Card.Link
                  className="asideMenuSubItem"
                  href={ROLE_MANAGEMENT_URL}
                >
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
