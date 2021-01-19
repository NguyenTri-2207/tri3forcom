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
        <div className="title">UserName</div>
        <div className="username_input">
          <input
          className={`input ${errors.username ? 'erro': ""}`}
            type="text"
            name="username"
            ref={register({ required: true, maxLength: 5 })}
          />
        {errors.username?.type ==="required" && <p className="error" >Vui lòng nhập tên đăng nhập !</p>}
        {errors.username?.type === "maxLength" && <p className="error" >Không vượt quá 5 kí tự!</p>}
        </div>
      </div>
      <div className="login_password">
        <div className="title">Password</div>
        <div className="login_password_input">
          <input
          className={`input ${errors.password ? "erro" : ""}`}
            type="password"
            name="password"
            ref={register({ required: true, minLength: 8 })}
          />
          {errors.password?.type === "required" && <p className="error">Vui lòng nhập mật khẩu !</p>}
          {errors.password?.type === "minLength" && <p className="error">mật khẩu trên 7 kí tự !</p>}
        </div>
      </div>
      <div className="submit">
        <input type="submit" value="Submit" />
      </div>
    </form>
  );
};
export default Login;
