import React, {useContext, useEffect, useState} from 'react';
import {useHttp} from "../hooks/http.hook";
import {useMessage} from "../hooks/ message.hoook";
import {AuthContext} from "../context/AuthContext";

export const AuthPage = () => {

  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({email: '', password: ''});

  const changeHandler = event => {
    setForm({...form, [event.target.name]: event.target.value});
  };

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      message(data.message);
    } catch (e) {}
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form});
      auth.login(data.token, data.userId);
    } catch (e) {}
  }

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h3>Shorten the link</h3>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <span className="card-title">Authorization</span>
            <div style={{marginTop: '20px'}}>

              <div className="input-field">
                <input
                    id="email"
                    type="text"
                    name="email"
                    className="validate white-text yellow-input"
                    value={form.email}
                    onChange={changeHandler}
                />
                <label htmlFor="email" className="white-text">Email</label>
              </div>

              <div className="input-field">
                <input
                    id="password"
                    type="password"
                    className="validate white-text yellow-input"
                    name="password"
                    value={form.password}
                    onChange={changeHandler}
                />
                <label htmlFor="password" className="white-text">Password</label>
              </div>

            </div>
          </div>
          <div className="card-action">
            <button
                className="btn yellow darken-4"
                style={{marginRight: '15px'}}
                onClick={loginHandler}
                disabled={loading}
            >
              Sign in
            </button>
            <button
                className="btn grey lighten-1 black-text"
                onClick={registerHandler}
                disabled={loading}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
