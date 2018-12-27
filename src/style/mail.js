import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  width: 1024px;
  padding: 20px;
`;
export const WrapUserList = styled.div`
  width: 100%;
`;
export const Item = styled.div`
  width: 100%;
  padding: 15px 0;
  overflow: hidden;
  border-top: 1px solid #eeeeee;
  display: flex;

  &:last-child {
    border-bottom: 1px solid #eeeeee;
  }
`;

export const AvatarWrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background: #ccc;

  img {
    width: 100%;
    display: block;
  }
`;

export const UserNameWrapper = styled.div`
  height: 50px;
  display: flex;
  justify-content: center;
  margin-left: 15px;
  flex-direction: column;
`;

export const FirstName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin: 3px 0;
`;

export const LastName = styled.p`
  font-size: 11px;
`;

export const ButtonLogOut = styled.button`
  display: block;
  width: 120px;
  height: 35px;
  float: right;
  margin-bottom: 20px;
  outline: 0;
  border: 0;
  background: #6040b0;
  border-radius: 1px;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  transition: 150ms ease-out;

  &:hover {
    opacity: 0.8;
  }
`;
