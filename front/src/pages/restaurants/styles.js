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
    text-transform: uppercase;
  }

  .faStar {
    color: #484848;
    font-size: 18pt;
  }
`

export const ContentsNote = styled.div`
  display: flex;
  align-items: center;
  font-family: "open sans";
  color: #484848;
  font-size: 18pt;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    outline: none;
    margin-bottom: 20px;
    cursor: pointer;
  }

  svg {
    margin: 0 0 15px 10px;
    width: 20px;
    height: 20px;
  }

  span {
    margin: 0 0 20px 10px;
  }
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 40px;

  .contents {
    grid-area: contents;
  }

  .title_restaurant {
    font-size: 18pt;
    font-family: 'open sans';
    font-weight: 400;
    color: #2e2e2e;
  }
`
export const FlexCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`