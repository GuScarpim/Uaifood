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
`
