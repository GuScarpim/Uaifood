import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 30px 30px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  img {
    padding: 20px 100px 0 0px;
  }
`

export const Container = styled.div`
  padding: 20px;
  display: grid;
  height: 100%;
  grid-template-columns: 0.4fr 1.7fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas: "note contents";
`

export const Note = styled.div`
  height: 80vh;
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  .note { 
    display: flex;
    flex-direction: column;
    height: 100%;
    grid-area: note; 
  }

  label {
    color: #A5A5A5;
    font-size: 18pt;
    margin-bottom: 20px;
  }

  .faStar {
    color: #484848;
    font-size: 18pt;
  }
`

export const ContentsNote =styled.div`
  display: flex;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    outline: none;
  }
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;

  .contents { 
    grid-area: contents; 
  }
`