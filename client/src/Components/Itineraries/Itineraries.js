import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItins } from "../../Store/Actions/itineraryAction";
import PropTypes from "prop-types";

class ItineraryList extends Component {
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    itineraries: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItineraries();
  }

  render() {
    const { itineraries } = this.props;
    console.log(itineraries);
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="itinerary-list">
            {itineraries &&
              itineraries.map(itineraries => {
                return (
                  <CSSTransition
                    key={itineraries.title}
                    timeout={500}
                    classNames="fade"
                  >
                    <ListGroupItem>
                      {this.props.isAuthenticated ? (
                        <Button
                          className="remove-btn"
                          color="danger"
                          size="sm"
                          onClick={this.onDeleteClick.bind(
                            this,
                            itineraries.title
                          )}
                        >
                          &times;
                        </Button>
                      ) : null}
                      {itineraries.title}, {itineraries.rating},{" "}
                      {itineraries.duration}, {itineraries.price}
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
    itineraries: state.itinerariesObj.itineraries
  };
};

export default connect(
  mapStateToProps,
  { getItins }
)(ItineraryList);
