import React from "react";
import styled from "styled-components";
import Image from "./Image";
import { getImages } from "../actions/index";
import { connect } from "react-redux";

function ImageBox(props) {
  const { images, getImages, params } = props;

  const handleClick = () => {
    const newParams = {
      limit: params.limit + 10,
      page: params.page + 1,
      id: params.id,
    };
    getImages(newParams);
  };

  const imgList = images.map((el) => {
    return <Image key={el.id} url={el.url} />;
  });
  return (
    <GlobalBox>
        <Discription>CATS IMAGES</Discription>
      {imgList.length > 0 ? (
        <>
          <ImageList>{imgList}</ImageList>
          <LoadMore onClick={handleClick}>
            <booton>More images...</booton>
          </LoadMore>
        </>
      ) : (
        <SelectCategory>
          <div> Select categories for images cats, please</div>
        </SelectCategory>
      )}
    </GlobalBox>
  );
}

const GlobalBox = styled.div`
  width: 90%;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
const Discription = styled.h1`
  text-align: center;
  font-size: 35px;  
  font-family: Arila;
  text-shadow: 1px 1px 1px red,
                2px 2px 1px red;
`;
const ImageList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const LoadMore = styled.div`
  margin: 0 auto;
  booton {
    display: inline-block;
    padding: 0.75rem 1.25rem;
    border-radius: 10rem;
    font-size: 15px;
    letter-spacing: 0.15rem;
    transition: all 0.3s;
    position: relative;
    border: 1px solid  red;
    font-family: Arial;
    text-decoration: none;
    color: red;
    &:hover {
      background-color:  red;
      color: white;
      &:before {
        width: 100%;
      }
    } 
  }
`;

const SelectCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    margin: 100px auto;
    font-size: 20px;
    color: red;
  }
  height: 300px;
`;
const mapStateToProps = (state) => {
  return {
    images: state.imageReducer.images,
    params: state.imageReducer.params,
  };
};

const mapDispatchToProps = {
  getImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageBox);
