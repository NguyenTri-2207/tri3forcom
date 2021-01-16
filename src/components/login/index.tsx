import React from "react";
import "./index.css"
import username from "../../image/user-name.svg"
interface LoginProps {
  title: string;
}
const Login: React.FC<LoginProps> = ({ title }) => {
  return (
    <form className="login">
      <div className="login_title">{title}</div>
      <div className="username">
          <div className="username_title">UserName</div>
          <div className="username_input">
              <img src={username} alt=""/>
              <input type="text"/>
          </div>
      </div>
      <div className="login_password">
          <div className="login_password_title">Password</div>
          <div className="login_password_input">
              <input type="password"/>
          </div>
      </div>
    </form>
  );
};
export default Login;
