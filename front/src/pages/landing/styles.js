import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bg && props.bg});
  background-repeat: no-repeat;
  background-size: contain;
`