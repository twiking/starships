import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { getStarshipDetails } from '../../reducers/starshipsReducer'
import { getFetchStatus } from '../../reducers/starshipDetailsReducer'
import { setDialogClosed } from '../../actions/starshipDetailsActions'
import Loader from '../Loader/Loader'
import StarshipDetailsItem from '../StarshipDetailsItem/StarshipDetailsItem'

import './StarshipDialog.css';

export default class StarshipDialog extends Component {

  handleOverlayClick(e) {
    if (e.target.id === 'js-starship-dialog') {
      this.props.setDialogClosed();
    }
  }

  handleEscKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.setDialogClosed();
    }
  }

  componentDidMount() {
    var overlayElement = document.getElementById('js-starship-dialog');
    overlayElement.addEventListener('click', this.handleOverlayClick.bind(this));

    document.addEventListener('keydown', this.handleEscKeyDown.bind(this));
  }

  componentWillUnmount() {
    var overlayElement = document.getElementById('js-starship-dialog');
    overlayElement.removeEventListener('click', this.handleOverlayClick);

    document.removeEventListener('keydown', this.handleEscKeyDown);
  }

  render() {
    const { details = {}, fetchStatus } = this.props;

    const isDialogActive = (fetchStatus.fetched || fetchStatus.fetching) && !fetchStatus.closed;
    const dialogModifierCss = isDialogActive ? 'starship-dialog--active' : '';

    const isContentLoaded = !fetchStatus.closed && !fetchStatus.fetching;
    const contentModifierCss = isContentLoaded ? 'starship-dialog__content--active' : '';

    return (
      <div class={`starship-dialog ${dialogModifierCss}`} id="js-starship-dialog" role="dialog">
        <Loader active={fetchStatus.fetching} />
        <div class={`starship-dialog__content ${contentModifierCss}`}>
          <h1 class="starship-dialog__title">{details.name}</h1>

          <StarshipDetailsItem
            title="Model"
            icon="model"
            info={details.model} />
          <StarshipDetailsItem
            title="Passengers"
            icon="alien"
            info={details.passengers} />
          <StarshipDetailsItem
            title="Cost"
            icon="money"
            info={details.cost_in_credits} />
          <StarshipDetailsItem
            title="Max atmosphering speed"
            icon="bolt"
            info={details.max_atmosphering_speed} />
          <StarshipDetailsItem
            title="Cargo Capacity"
            icon="capacity"
            info={details.cargo_capacity} />

          <a class="starship-dialog__close"
            onClick={() => this.props.setDialogClosed()}>X</a>
        </div>
      </div>
    )
  }
}

StarshipDialog.propTypes = {
  details: PropTypes.object.isRequired,
  fetchStatus: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => {
  return {
    details: getStarshipDetails(state),
    fetchStatus: getFetchStatus(state)
  }
}

export default connect(
  mapStateToProps,
  { setDialogClosed }
)(StarshipDialog)
