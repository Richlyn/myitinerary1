import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getActivs } from "../../Store/Actions/activityAction";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";

class Activities extends Component {
  static propTypes = {
    activities: PropTypes.object.isRequired
  };
  componentDidMount() {
    this.props.getActivs();
  }

  render() {
    const { activities } = this.props;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="city-list">
            {activities &&
              activities.map(activities => {
                return (
                  <CSSTransition
                    key={activities.title}
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
                            activities._id
                          )}
                        >
                          &times;
                        </Button>
                      ) : null}
                      {activities.title}
                    </ListGroupItem>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }

  //   render() {
  //     const { activities } = this.props;
  //     return (
  //       <Carousel>
  //         <Carousel.Item>
  //           <img
  //             className="d-block w-100"
  //             src="holder.js/800x400?text=First slide&bg=373940"
  //             alt="First slide"
  //           />
  //           <Carousel.Caption>
  //             <h3>First slide label</h3>
  //             <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="d-block w-100"
  //             src="holder.js/800x400?text=Second slide&bg=282c34"
  //             alt="Third slide"
  //           />

  //           <Carousel.Caption>
  //             <h3>Second slide label</h3>
  //             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //         <Carousel.Item>
  //           <img
  //             className="d-block w-100"
  //             src="holder.js/800x400?text=Third slide&bg=20232a"
  //             alt="Third slide"
  //           />

  //           <Carousel.Caption>
  //             <h3>Third slide label</h3>
  //             <p>
  //               Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //             </p>
  //           </Carousel.Caption>
  //         </Carousel.Item>
  //       </Carousel>
  //     );
  //   }
  // }
}
const mapStateToProps = state => {
  return {
    activities: state.activitiesObj.activities
  };
};

export default connect(
  mapStateToProps,
  { getActivs }
)(Activities);
