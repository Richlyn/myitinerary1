import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../../Store/Actions/firstAction";

class MyOtherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addItem(this.state);
  };
  render() {
    const myItems = this.props.myItems;
    console.log(myItems);

    return (
      <div>
        <h4>Component subscribed to store dispaching an action</h4>
        <ul>
          {myItems.map(item => {
            return (
              <li style={{ listStyle: "none" }} key={item.name}>
                {item.name}
              </li>
            );
          })}
        </ul>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">New Item</h5>
          <div className="input-field">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={this.handleChange} />
          </div>
        </form>
        <button className="mydispatchButton" onClick={this.handleSubmit}>
          Add Item
        </button>
      </div>
    );
  }
}
const mapStateToProp = state => {
  return {
    myEntries: state.myItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};

export default connect(
  mapStateToProp,
  mapDispatchToProps
)(MyOtherComponent);
