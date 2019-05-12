import React from "react";
import { connect } from "react-redux";

function MyComponent({ myItems }) {
  return <div>{myItems}</div>;
}
const mapStateToProps = state => {
  return {
    myItems: state.myItems
  };
};
export default connect(mapStateToProps)(MyComponent);
