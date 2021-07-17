import React from "react";
import styled from "styled-components";

function Image({ url }) {
  return (
    <ImageSize>
      <img src={url} alt="img" />
    </ImageSize>
  );
}

const ImageSize = styled.div`
  width: 300px;
  height: 250px;
  padding: 10px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
`;

export default Image;
