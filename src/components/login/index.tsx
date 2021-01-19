import React from "react";
import { useForm } from "react-hook-form";
import "./index.css";
interface LoginProps {
  title: string;
  username?: string;
  password?: string;
}
const Login: React.FC<LoginProps> = ({ title }) => {
  const { handleSubmit, register, errors } = useForm<LoginProps>();
  const onSubmit = (data: LoginProps) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login">
      <div className="login_title">{title}</div>
      <div className="username">
        <div className="username_title">UserName</div>
        <div className="username_input">
          <input
            type="text"
            name="username"
            ref={register({ required: true })}
          />
          <div className="error">{errors.username && <p>Vui lòng nhập tên đăng nhập !</p>}</div>
        </div>
      </div>
      <div className="login_password">
        <div className="login_password_title">Password</div>
        <div className="login_password_input">
          <input
            type="text"
            name="password"
            ref={register({ required: true })}
          />
          <div className="error">{errors.password && <p>Vui lòng nhập mật khẩu !</p>}</div>
        </div>
      </div>
      <div className="submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default Login;
