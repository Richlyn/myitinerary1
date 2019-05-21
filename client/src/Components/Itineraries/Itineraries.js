import React, { Component } from "react";
import { connect } from "react-redux";
import { getItins } from "../../Store/Actions/itineraryAction";
import PropTypes from "prop-types";

import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Activities from "../../Components/Activities/Activities";
import "./Itineraries.css";

class ItineraryList extends Component {
  state = { expanded: false };
  static propTypes = {
    // getCities: PropTypes.func.isRequired,
    itineraries: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  componentDidMount() {
    this.props.getItins();
  }
  render() {
    const { itineraries } = this.props;

    return (
      <Card className={itineraries}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={itineraries.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={itineraries.MYtineraryName}
          subheader="September 14, 2016" //create time stamp
        />
        <CardMedia
          className={itineraries.title}
          image="/static/images/cards/paella.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            {itineraries.city} {itineraries.country} {itineraries.duration} ,
            {itineraries.rating}
          </Typography>
        </CardContent>
        <CardActions className={itineraries.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
          <IconButton
            className={classnames(itineraries.expand, {
              [itineraries.expandOpen]: this.state.expanded
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Activities:</Typography>
            <Typography paragraph>Here's what you can do</Typography>
            <Typography paragraph>
              <Activities />
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

// Itineraries.propTypes = {
//   itineraries: PropTypes.object.isRequired
// };
const mapStateToProps = state => {
  return {
    itineraries: state.itinerariesObj.itineraries
  };
};
// export default withStyles(styles)(RecipeReviewCard);
export default connect(
  mapStateToProps,
  { getItins }
)(ItineraryList);

// render() {
//   const { itineraries } = this.props;
//   return (
//     <Container>
//       <ListGroup>
//         <TransitionGroup className="itinerary-list">
//           {itineraries &&
//             itineraries.map(itineraries => {
//               return (
//                 <CSSTransition
//                   key={itineraries.title}
//                   timeout={500}
//                   classNames="fade"
//                 >
//                   <ListGroupItem>
//                     {this.props.isAuthenticated ? (
//                       <Button
//                         className="remove-btn"
//                         color="danger"
//                         size="sm"
//                         onClick={this.onDeleteClick.bind(
//                           this,
//                           itineraries.title
//                         )}
//                       >
//                         &times;
//                       </Button>
//                     ) : null}
//                     {itineraries.MYtineraryName}, {itineraries.rating},{" "}
//                     {itineraries.duration}, {itineraries.city},
//                     {itineraries.country}
//                   </ListGroupItem>
//                 </CSSTransition>
//               );
//             })}
//         </TransitionGroup>
//       </ListGroup>
//     </Container>
//   );
// }
// }
