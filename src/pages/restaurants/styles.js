import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 70px 30px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);

  img {
    padding: 20px 100px 0 0px;
  }

  button:nth-child(3) {
    background: #c8c6c6;
    position: absolute;
    width: calc(100% - 578px);
  }

  @media (max-width: 900px) {
    img {
      width: 100px;
      padding: 20px 10px 0 0px;
    }

    button:nth-child(3) {
      width: calc(100% - 348px);
    }
  }

  @media (max-width: 700px) {
    button:nth-child(3) {
      width: calc(100% - 290px);
    }
  }

  @media (max-width: 540px) {
    flex-direction: column;
    height: 160px;

    img {
      padding: 20px 10px 30px 0;
    }

    input {
      margin-bottom: 30px;
    }

    svg {
      position: absolute;
      margin-top: -248px !important;
    }

    button:nth-child(3) {
      top: 135px;
      width: calc(100% - 179px);
    }

    @media (max-width: 500px) {
      button:nth-child(3) {
        width: calc(100% - 60px);
      }

      button:nth-child(2) {
        margin-top: 0px;
      }

      svg {
        position: absolute;
        margin-top: -178px !important;
      }
    }
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

  @media (max-width: 540px) {
    display: flex;
    flex-direction: column;
  }
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
    font-size: 18px;
    margin-bottom: 20px;
    text-transform: uppercase;
  }

  .faStar {
    color: #484848;
    font-size: 18px;
  }

  @media (max-width: 700px) {
    label {
      font-size: 16px;
      font-family: 'open sans';
      margin-bottom: 15px;
    }

    .faStar {
      font-size: 14px;
    }
  }
`

export const ContentsNote = styled.div`
  display: flex;
  align-items: center;
  font-family: "open sans";
  color: #484848;
  font-size: 18px;
  max-width: 350px;

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 1px solid #ccc;
    outline: none;
    margin-bottom: 21px;
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

  @media (max-width: 700px) {
    font-size: 14px;

    input[type="checkbox"] {
      width: 15px;
      height: 15px;
    }

    svg {
      width: 15px;
      height: 15px;
    }
  }
`

export const Contents = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px 20px 20px;

  .contents {
    grid-area: contents;
  }

  .title_restaurant {
    font-size: 18pt;
    font-family: 'open sans';
    font-weight: 600;
    color: #2e2e2e;
    @media (max-width: 600px) {
      font-size: 20px;
    }
  }
`
export const FlexCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`