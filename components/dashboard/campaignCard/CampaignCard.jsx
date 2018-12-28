import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Videocam from '@material-ui/icons/Videocam';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const styles = theme => ({
  cardRow: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'row'
  },
  cardCol: {
    margin: theme.spacing.unit * 2,
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  // avatar: {
  //   backgroundColor: red[500],
  // },
  video: {
    // height: '30vw', //TODO take aspect ratio as props
    width: '100%',
    border: '1px solid black',
    objectFit: 'contain',
    // flex-shrink: 0;
  },
  flexEnd: {
    justifyContent: 'flexEnd',
    textAlign: 'right',
  },
});

class CampaignCard extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

  render() {
    console.log('WINDOW.INNERWIDTH', window.innerWidth);
    const { classes, title, date, picture, videoM4a, videoWebm, viewN, funded, price, paid } = this.props;
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const isMenuOpen = Boolean(anchorEl);
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Pause Campaign</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>Edit</MenuItem>
      </Menu>
    );
    const video = (
      <video poster={picture} alt="Video" controls ref="video" className={classes.video}>
        <source src={videoM4a} type="video/mp4" />
        <source src={videoWebm} type="video/webm" />
        Your browser does not support the video types.
      </video>
    );
    const cardHeader = (
      <CardHeader
        action={
          <IconButton aria-haspopup="true" onClick={this.handleProfileMenuOpen} color="inherit">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={date}
      />
    );
    const cardContent = (
      <CardContent>
        <div className={classes.root}>
          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <Videocam />
              </ListItemIcon>
              <ListItemText primary="Times Viewed" />
              <ListItemText primary={viewN} className={classes.flexEnd} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              <ListItemText primary="Funded Amount" />
              <ListItemText primary={funded} className={classes.flexEnd} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Price per View" />
              <ListItemText primary={price} className={classes.flexEnd} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Total Paid" />
              <ListItemText primary={paid} className={classes.flexEnd} />
            </ListItem>
          </List>
        </div>
      </CardContent>
    );

    return (
      <div>
        { window.innerWidth > '700' ?
          <Card className={classes.cardRow}>
            <div style={{ width: '100%' }}>
              {video}
            </div>
            <div style={{ width: '100%' }}>
              {cardHeader}
              {renderMenu}
              {cardContent}
            </div>
          </Card>
        :
          <Card className={classes.cardCol}>
            {cardHeader}
            {renderMenu}
            {video}
            {cardContent}
          </Card>
        }
      </div>
    );
  }
}

CampaignCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CampaignCard);
