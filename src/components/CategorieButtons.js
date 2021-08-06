import styled from "styled-components";
import Categories from "./Categories";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCategories } from "../actions/index";

function CategorieButtons(props) {
  const { categories } = props;
  useEffect(() => {
    props.getCategories();
     // eslint-disable-next-line
  }, []);

  let categoryList = categories.map((el) => {
    return <Categories key={el.id} name={el.name} id={el.id} />;
  });
  return <CategorieButton>{categoryList}</CategorieButton>;
}

const CategorieButton = styled.div`
  width: 10%;
  height: 200px;
  padding: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer.categories,
  };
};

const mapDispatchToProps = {
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategorieButtons);
