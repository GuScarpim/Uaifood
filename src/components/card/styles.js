import styled from "styled-components";

export const Card = styled.div`
  width: 450px;
  margin: 30px 0px 20px 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  -webkit-animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  animation: scale-up-center 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;

  @-webkit-keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
  }
  @keyframes scale-up-center {
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
    }
}

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
      color: #333;
    }

    a {
      font-family: 'open sans';
      font-weight: 600;
      color: #333;
      cursor: pointer;
      text-decoration: none;
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
    font-family: 'Open Sans';
    font-weight: 600;
    margin-left: 10px;
    font-size: 16pt;
  }

  .type_meet {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 140px;
    width: 100%;
    margin-right: 100px;
    height: 35px;
    background: #ccc;
    color: #000;
    margin-left: 20px;

    span {
      text-align: center;
      font-family: 'Open Sans';
      font-weight: 400;
      font-size: 16px;
      height: 20px;
      overflow: hidden;
      display: -webkit-box;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
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
