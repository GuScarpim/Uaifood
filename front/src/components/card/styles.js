import styled from "styled-components";

// Open Sans Extra Bold
// Open Sans Light
// Open Sans Regular
// Open Sans Semi Bold

export const Card = styled.div`
  width: 450px;
  margin: 30px 0px 20px 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);

  content {
    display: flex;
    flex-direction: column;
    padding: 10px;

    label {
      font-family: 'open sans';
      font-size: 20pt;
      height: 30px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      color: #2e2e2e;
    }

    a {
      color: #2e2e2e;
      cursor: pointer;
    }

    span {
      font-size: 16pt;
      color: #484848;
      margin: 0 0 10px 0;
    }
  }

  img {
    width: 100%;
    height: 180px;
  }

  @media (max-width: 1200px) {
    width: 380px;

    content {

      label {
        font-size: 22px;
      }

      span {
        font-size: 16px;
      }
    }

    img {
      height: 150px;
    }

    @media (max-width: 900px) {
      width: 320px;

      content {

        label {
          font-size: 20px;
        }

        span {
          font-size: 14px;
        }
      }

      img {
        height: 140px;
      }
    }

    @media (max-width: 700px) {
      content {

        label {
          font-size: 20px;
        }

        span {
          font-size: 14px;
        }
      }

      img {
        height: 140px;
      }
    }

    @media (max-width: 540px) {
      margin: 20px 10px 20px 0px;
    }
  }
`

export const PositionInfo = styled.div`
  @font-face {
    font-family: 'Open Sans Semi Bold';
    src: local('Open Sans Semi Bold'), url('./assets/fonts/OpenSans-SemiBold.ttf') format('ttf');
  }

  display: flex;
  align-items: center;
  padding: 10px 10px 20px 10px;

  .price {
    min-width: 140px;
    height: 35px;
    background: #39b54a;
    color: #FFF;
    display: flex;
    align-items: center;
  }

  svg {
    margin-left: 20px;
    font-size: 16pt;
  }

  span {
    font-family: 'Open Sans Semi Bold';
    margin-left: 10px;
    font-size: 16pt;
  }

  .type_meet {
    display: flex;
    justify-content: center;
    text-align: center;
    min-width: 140px;
    height: 35px;
    background: #ccc;
    color: #000;
    display: flex;
    align-items: center;
    margin-left: 20px;
    font-size: 14pt;
  }

  @media (max-width: 1200px) {

    svg {
      font-size: 16px;
    }

    span {
      font-size: 20px;
    }
  }
`
