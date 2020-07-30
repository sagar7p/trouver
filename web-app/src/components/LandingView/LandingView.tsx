import React from "react";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import { BehaviorSubject } from 'rxjs';

import Logo from "../../assets/trouver-logo.png";
import "../../styles/landing-view.css";

export interface LandingViewProps { }

export const CLIENT_ID =
  "614597076585-5umcoeup9p510klul1q6oubaovsgp39i.apps.googleusercontent.com";

export const currentId = new BehaviorSubject<string | undefined>(undefined);

export default class LandingView extends React.Component<LandingViewProps> {
  render() {
    return (
      <div className="bg">
        <div className="dialog-div">
          <div className="image-block">
            <img className="image-logo" src={Logo} alt="trouver-logo"></img>
          </div>
          <div className="login-btn">
            <GoogleLogin
              clientId={CLIENT_ID}
              buttonText="Login"
              onSuccess={this.login}
              onFailure={() => { console.log('Failed to log in') }}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              responseType="code,token"
            />
          </div>
        </div>
      </div>
    );
  }

  private login(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
    const res: GoogleLoginResponse = response as GoogleLoginResponse;
    if (res.googleId) {
      currentId.next(res.googleId);
    }
  }
}
