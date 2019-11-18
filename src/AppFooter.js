import React, { Component } from "react";

export class AppFooter extends Component {
  render() {
    return (
      <div className="layout-footer">
        <span>
          <img src="assets/layout/images/JSG logo.png" alt="" width="30" />
        </span>
        <span className="footer-text" style={{ margin: "10px" }}>
          Copyright. Gombak Jungle School.{" "}
        </span>
        {/* 
        <span className="footer-text" style={{ margin: "10px" }}>
          text here
        </span> */}
      </div>
    );
  }
}
