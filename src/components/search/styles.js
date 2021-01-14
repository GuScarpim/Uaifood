import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

  .faMapMarkerAlt {
    margin-top: -36px;
    margin-left: 15px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    outline: none;

    @media (max-width: 500px) {
      margin-top: -216px;
      margin-left: 8px;
    }
  }
`

export const Logo = styled.div`

  @media (max-width: 500px) {
      margin-top: -50px !important;
  }
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
    font-size: 18px;
    cursor: ${(props) => props.disabled ? 'pointer' : 'not-allowed'};
    padding: 10px 100px 10px 100px;
  }

  @media (max-width: 900px) {

    button {
      padding: 10px 50px 10px 50px;
    }

    @media (max-width: 700px) {
      button {
        padding: 10px 20px 10px 20px;
      }
    }

    @media (max-width: 500px) {
      display: flex;
      flex-direction: column;

      button {
        margin: 70px 0;
        width: 100%;
        padding: 10px 20px 10px 20px;
      }

      input {
        height: 40px;
        font-size: 18px;
      }
    }
  }
`

export const ResultSearch = styled.button`
  transition: all 1s;
  display: flex;
  flex-direction: column;
  width: calc(100% - 280px);
  background-color: #FFF;
  margin-top: 11px;
  border: none;
  border-top: 1px solid #ccc;
  padding: 10px 15px 10px 20px;
  cursor: pointer;
  outline: none;
  text-decoration: none;

  label {
    font-size: 18px;
    cursor: pointer;
  }

  span {
    font-size: 16px;
  }

  &:hover {
    transition: all 1s;
    background-color: #ccc;
  }

  @media (max-width: 900px) {
    width: calc(100% - 180px);

    @media (max-width: 700px) {
      width: calc(100% - 119px);
    }

    @media (max-width: 500px) {
      width: 100%;
      margin-top: 7px;
    }
  }
`