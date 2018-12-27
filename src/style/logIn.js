import styled from 'styled-components';

const blackBackground = "#0C0C0C"

const backgroundForm = {
  light: '#ffffff',
  medium: "#eeeeee",
  dark: "#424242"
}

const paddingForm = "80px 64px  64px 64px"

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${blackBackground};
`

export const Form = styled.form`
  background: ${backgroundForm.light};
  padding: ${paddingForm};
`

export const InputBlock = styled.div`
  display: block;
  margin-bottom: 32px;
  position: relative;

  &:last-child {
    margin-bottom: 0
  }

  label {
    position: absolute;
    font-size: 15px;
    color: rgba(66, 66 , 66, .4);
    height: 19px;
    top: 0;
    bottom: 0;
    margin: auto;
    left: 0;
    display: inline-block;
    margin-left: 12px;
    transition: transform 150ms ease-out, font-size 200ms ease-out;
  }

  input {
    width: 240px;
    height: 48px;
    background: transparent;
    z-index: 2;
    outline: 0;
    border: 1px solid #eeeeee;
    position: relative;
    border-radius: 2px;
    border-bottom: 1px solid rgba(66, 66, 66, .4);
    padding-left: 12px;
    font-size: 15px;

    &:focus + label, &.active + label {
      font-size: 12px;
      transform: translateY(-34px)translateX(-12px);
      color: #6040B0;
    }

    &.active:invalid {
      border-bottom: 1px solid #E1325A;
    }

    &.active:valid {
      border-bottom: 1px solid #6040B0;
    }
  }
`

export const Button = styled.button`
  width: 240px;
  height: 48px;
  outline: 0;
  border: 0;
  background: #6040B0;
  border-radius: 1px;
  font-size: 15px;
  color: #ffffff;
  cursor: pointer;
  transition: 150ms ease-out;

  &:hover {
    opacity: .8;
  }
`