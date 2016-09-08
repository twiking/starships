import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import './StarshipDetailsItem.css';

export default class StarshipDetailsItem extends Component {
  render() {
    const iconSrc = 'assets/svg/' + this.props.icon + '.svg';

    return (
      <div class="starship-details-item">
        <h2 class="starship-details-item__title">
          <img src={iconSrc} alt={this.props.title}
            class="starship-details-item__icon" />
          {this.props.title}
        </h2>
        <span class="starship-details-item__info">{this.props.info}</span>
      </div>
    )
  }
}

StarshipDetailsItem.propTypes = {
  icon: PropTypes.string,
}
