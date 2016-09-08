import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import { fetchStarships } from '../../actions/starshipsActions'
import { fetchStarshipDetails } from '../../actions/starshipDetailsActions'

import './StarshipsList.css';
import './Starship.css';

export default class StarshipsList extends Component {
  componentWillMount() {
    this.props.fetchStarships()
  }

  render() {
    const { starships } = this.props;
    const mappedStarships = starships.map(
      (starship, index) =>
        <li key={index} class="starships-list__item starship">
          <span class="starship__tail starship__tail--active"></span>
          <a class="starship__body"
            onClick={() => this.props.fetchStarshipDetails(starship.url)}>
            <span class="starship__name">{starship.name}</span>
            <span class="starship__window"></span>
          </a>
        </li>
    );

    return <ul class="starships-list">{mappedStarships}</ul>
  }
}

StarshipsList.propTypes = {
  starships: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
  fetchStarships: PropTypes.func.isRequired,
  fetchStarshipDetails: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    starships: state.starships.starships,
  }
}

export default connect(
  mapStateToProps,
  {
    fetchStarships,
    fetchStarshipDetails,
  },
)(StarshipsList)
