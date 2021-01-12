import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    

  .faMapMarkerAlt {
    margin-top: -46px;
    margin-left: 15px;
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    outline: none;
  }
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 100px;
`

export const PositionSearch = styled.div`
  display: flex;

  input {
    box-sizing: border-box;
    background-color: #FFF;
    padding: 10px 15px 10px 50px;
    outline: none;
    font-size: 20px;
    border: 1.5px solid #ccc;
    border-radius: 2px;
    width: 100%;
  }

  button {
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
    color: #FFF;
    border-radius: 2px;
    background: #39b54a;
    border: none;
    outline: none;
    font-size: 24pt;
    cursor: pointer;
    padding: 10px 100px 10px 100px;
  }
`

export const ResultSearch = styled.button`
  transition: all 1s;
  display: flex;
  flex-direction: column;
  width: calc(100% - 325px);
  background-color: #FFF;
  margin-top: 15px;
  border: none;
  border-top: 1px solid #ccc;
  padding: 10px 15px 10px 20px;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  label {
    font-size: 20px;
    cursor: pointer;
  }

  span {
    font-size: 16px;
  }

  &:hover { 
    transition: all 1s;
    background-color: #ccc;
  }
`