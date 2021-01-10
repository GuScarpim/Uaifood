import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bg && props.bg});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
`

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: 100px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
`

export const PositionContents = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    color: #FFF;
    font-family: 'Open Sans', sans-serif;
    font-size: 60pt;
    line-height: 10px;
  }

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

export const PositionSearch = styled.div`
  display: flex;

  input {
    box-sizing: border-box;
    border: 1px solid #fff;
    background-color: #FFF;
    padding: 10px 15px 10px 50px;
    outline: none;
    font-size: 20px;
    width: 100%;
  }

  button {
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
    color: #FFF;
    background: #39b54a;
    border: none;
    outline: none;
    font-size: 24pt;
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