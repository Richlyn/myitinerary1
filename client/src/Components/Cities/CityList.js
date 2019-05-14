import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getCities } from "../../Store/Actions/cityAction";
//import { getItems, deleteItemms } from "../Actions/cityAction";
import PropTypes from "prop-types";

class CityList extends Component {
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    cities: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getCities();
  }

  // onDeleteClick = id => {
  //   this.props.deleteCities(id);
  // };

  render() {
    const { cities } = this.props;
    console.log(this.props);
    return (
      <Container>
        {/* <ListGroup>
          <TransitionGroup className="city-list">
            {cities.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  {this.props.isAuthenticated ? (
                    <Button
                      className="remove-btn"
                      color="danger"
                      size="sm"
                      onClick={this.onDeleteClick.bind(this, _id)}
                    >
                      &times;
                    </Button>
                  ) : null}
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    // cities: state.cityName
  };
};

export default connect(
  mapStateToProps,
  { getCities }
)(CityList);
