import React from "react";
import {
  GoogleLogin,
  GoogleLogout,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { BehaviorSubject } from "rxjs";

const CLIENT_ID =
  "614597076585-5umcoeup9p510klul1q6oubaovsgp39i.apps.googleusercontent.com";
const currentId = new BehaviorSubject<string | undefined>(undefined);

interface GoogleBtnProps {}

interface GoogleBtnState {
  isLogined: boolean;
}

export default class GoogleBtn extends React.Component<
  GoogleBtnProps,
  GoogleBtnState
> {
  constructor(props: GoogleBtnProps) {
    super(props);

    this.state = {
      isLogined: false,
    };

    this.login = this.login.bind(this);
    this.handleLoginFailure = this.handleLoginFailure.bind(this);
    this.logout = this.logout.bind(this);
    this.handleLogoutFailure = this.handleLogoutFailure.bind(this);
  }

  login(response: GoogleLoginResponse | GoogleLoginResponseOffline) {
    const res: GoogleLoginResponse = response as GoogleLoginResponse;
    if (res.googleId) {
      this.setState(
        (state) => ({
          isLogined: true,
        }),
        () => {
          currentId.next(res.googleId);
        }
      );
    }
  }

  logout() {
    this.setState(
      (state) => ({
        isLogined: false,
        accessToken: "",
      }),
      () => {
        currentId.next(undefined);
      }
    );
  }

  handleLoginFailure() {
    alert("Failed to log in");
  }

  handleLogoutFailure() {
    alert("Failed to log out");
  }

  render() {
    return (
      <div>
        {this.state.isLogined ? (
          <GoogleLogout
            clientId={CLIENT_ID}
            buttonText="Logout"
            onLogoutSuccess={this.logout}
            onFailure={this.handleLogoutFailure}
          ></GoogleLogout>
        ) : (
          <GoogleLogin
            clientId={CLIENT_ID}
            buttonText="Login"
            onSuccess={this.login}
            onFailure={this.handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            responseType="code,token"
          />
        )}
      </div>
    );
  }
}

export { currentId };
