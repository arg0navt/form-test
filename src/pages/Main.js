import React, { Component } from "react";
import {
  Wrapper,
  Content,
  ButtonLogOut,
  Item,
  AvatarWrapper,
  UserNameWrapper,
  FirstName,
  LastName,
  WrapUserList
} from "../style/mail";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preloader: true,
      users: []
    };

    this.loadUsers();
  }

  loadUsers = async () => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const json = await response.json();
      this.setState({ users: json.data }, () =>
        this.setState({ preloader: false })
      );
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { preloader, users } = this.state;
    return (
      <Wrapper>
        <Content>
          <ButtonLogOut
            onClick={() => {
              localStorage.removeItem("token-test");
              window.location = "/";
            }}
          >
            Log out
          </ButtonLogOut>
          {preloader ? (
            "Loading..."
          ) : (
            <WrapUserList className="wrap-user-list">
              {users.map(user => (
                <Item key={user.id}>
                  <AvatarWrapper>
                    <img
                      src={user.avatar}
                      alt={`${user.first_name} ${user.last_name}`}
                    />
                  </AvatarWrapper>
                  <UserNameWrapper>
                    <FirstName>{user.first_name}</FirstName>
                    <LastName>{user.last_name}</LastName>
                  </UserNameWrapper>
                </Item>
              ))}
            </WrapUserList>
          )}
        </Content>
      </Wrapper>
    );
  }
}
