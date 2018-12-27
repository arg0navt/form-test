import React, { Component } from "react";
import { Wrapper, Form, InputBlock, Button } from "../style/logIn";

const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  autocomplete,
  required
}) => (
  <InputBlock>
    <input
      autoComplete={autocomplete}
      type={type}
      className={!!value ? "active" : ""}
      name={name}
      id={name}
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
      minLength={6}
    />
    <label htmlFor={name}>{placeholder}</label>
  </InputBlock>
);

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      disabled: false,
    };
  }

  goRequest = async () => {
    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Origin": "*"
        },
        body: JSON.stringify({email: this.state.email, password: this.state.password})
      });
      const json = await response.json();
      await localStorage.setItem("token-test", json.token)
      await this.props.history.push("/main");
    } catch (err) {
      console.error(err);
      this.setState({disabled: false})
    }
  };

  render() {
    return (
      <Wrapper>
        <Form onSubmit={event => {
          event.preventDefault();
          this.setState({disabled: true} , () => this.goRequest())
        }}>
          <Input
            type="email"
            name="e-mail"
            placeholder="E-mail"
            value={this.state.email}
            onChange={value => this.setState({ email: value })}
            autocomplete="off"
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={value => this.setState({ password: value })}
            autocomplete="new-password"
            required
          />
          <Button disabled={this.state.disabled}>Заригистрироваться</Button>
        </Form>
      </Wrapper>
    );
  }
}
