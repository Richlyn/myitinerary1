import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getItins } from "../../Store/Actions/itineraryAction";
import PropTypes from "prop-types";
// import Card from "react-bootstrap/Card";
import "./Itineraries.css";

class ItineraryList extends Component {
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    itineraries: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  componentDidMount() {
    this.props.getItins();
  }

  render() {
    const { itineraries } = this.props;
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
// card(
//   <Card>
//     <Card.Img variant="top" src="holder.js/100px180" />
//     <Card.Body>
//       <Card.Text>
//         Some quick example text to build on the card title and make up the bulk
//         of the card's content.
//       </Card.Text>
//     </Card.Body>
//   </Card>
// );

const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesObj.itineraries
  };
};

export default connect(
  mapStateToProps,
  { getItins }
)(ItineraryList);
