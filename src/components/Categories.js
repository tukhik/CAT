import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { getImages } from "../actions/index";

function Categories({ name, id, params, getImages }) {
  const handleClick = () => {
    params = {
      limit: 10,
      page: 1,
      category_ids: id,
    };
    getImages(params);
  };
  return <Category onClick={handleClick} >{name.toUpperCase()}</Category>;
}

const Category = styled.button`
  width: 100%;
  text-align: center;
  font-size: 15px;
  padding: 3%;
  border: 1px solid  red;
  border-radius: 5px;
  background-color: red;
  color: white;
  cursor: pointer;
  margin-top: 5px;
  &:hover {
    background-color:  white;
    color: red;
  }
  
`;

const mapStateToProps = (state) => {
  return {
    params: state.imageReducer.params,
  };
};

const mapDispatchToProps = {
  getImages,
};
export default connect(mapStateToProps, mapDispatchToProps)(Categories);
