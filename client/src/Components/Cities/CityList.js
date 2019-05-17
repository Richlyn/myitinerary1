import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getCities } from "../../Store/Actions/cityAction";
import PropTypes from "prop-types";

class CityList extends Component {
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    cities: PropTypes.object.isRequired
    //isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getCities();
  }

  // onDeleteClick = id => {
  //   this.props.deleteCities(id);
  // };

  render() {
    const { cities } = this.props;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="city-list">
            {cities &&
              cities.map(cities => {
                return (
                  <CSSTransition
                    key={cities._id}
                    timeout={500}
                    classNames="fade"
                  >
                    <ListGroupItem>
                      {this.props.isAuthenticated ? (
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(this, cities._id)}
                        >
                          &times;
                        </Button>
                      ) : null}
                      {cities.cityName}, {cities.country}
                    </ListGroupItem>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.citiesObj.cities
  };
};

export default connect(
  mapStateToProps,
  { getCities }
)(CityList);
