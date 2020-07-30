import React from "react";
import Logo from "../../assets/trouver-logo.png";

import "../../styles/landing-view.css";

export interface LandingViewProps {}

export default class LandingView extends React.Component<LandingViewProps> {
  constructor(props: LandingViewProps) {
    super(props);
  }

  render() {
    return (
      <div className="bg">
        <img className="image-logo" src={Logo} alt="trouver-logo"></img>
      </div>
    );
  }
}
