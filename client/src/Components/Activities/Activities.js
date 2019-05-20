import React, { Component } from "react";
import { Container } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { getActivs } from "../../Store/Actions/activityAction";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import Cards from "../../Components/Activities/Cards";

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
        <Carousel>
          <TransitionGroup className="city-list">
            {activities &&
              activities.map(activities => {
                return (
                  <CSSTransition>
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=First slide&bg=373940"
                        alt="First slide"
                      />
                      <Carousel.Caption>
                        <h3>{activities.title}</h3>
                        <p>
                          Nulla vitae elit libero, a pharetra augue mollis
                          interdum.
                        </p>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>
        </Carousel>
      </Container>
    );
  }
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
