import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "./App.css";
import AsidePanel from "./AsidePanel";
import Footer from "./Footer";
import Header from "./Header";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.showSideNavBar = this.showSideNavBar.bind(this);
  }

  showSideNavBar(newShowValue) {
    this.setState(
      {
        show: newShowValue,
      },
      () => console.log("show:" + this.state.show)
    );
  }

  render() {
    return (
      <div className="App">
        <Header
          updateShowSideBar={this.showSideNavBar}
          userId="monikkar"
          userName="Monikka"
          isAdmin="false"
        />
        {this.state.show ? <AsidePanel isAdmin="false" /> : ""}

        <Footer />
      </div>
    );
  }
}
