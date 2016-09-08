import React, { Component, PropTypes } from 'react'

import './Loader.css';

export default class Loader extends Component {

  render() {
    const isLoaderActive = (this.props.active === true ? ' loader--active': '');
    const cssClass = `loader${isLoaderActive}`;

    return (
      <div class={cssClass}>
        <svg width='198px' height='198px' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-gps">
          <rect x="0" y="0" width="100" height="100" fill="none" class="bk"></rect>
          <circle cx="50" cy="50" r="20" fill="#c0c0c0">
            <animate attributeName="opacity" from="1" to="1" dur="1s" repeatCount="indefinite" values="1;1;0;0;1" keyTimes="0;0.4;0.5;0.9;1"></animate>
          </circle>
          <path d="M90,45h-1.3C86.4,27.5,72.5,13.6,55,11.3V10c0-2.8-2.2-5-5-5s-5,2.2-5,5v1.3C27.5,13.6,13.6,27.5,11.3,45H10 c-2.8,0-5,2.2-5,5s2.2,5,5,5h1.3C13.6,72.5,27.5,86.4,45,88.7V90c0,2.8,2.2,5,5,5s5-2.2,5-5v-1.3C72.5,86.4,86.4,72.5,88.7,55H90 c2.8,0,5-2.2,5-5S92.8,45,90,45z M55,80.6V80c0-2.8-2.2-5-5-5s-5,2.2-5,5v0.6C31.9,78.5,21.5,68.1,19.4,55H20c2.8,0,5-2.2,5-5 s-2.2-5-5-5h-0.6C21.5,31.9,31.9,21.5,45,19.4V20c0,2.8,2.2,5,5,5s5-2.2,5-5v-0.6C68.1,21.5,78.5,31.9,80.6,45H80c-2.8,0-5,2.2-5,5 s2.2,5,5,5h0.6C78.5,68.1,68.1,78.5,55,80.6z" fill="#c0c0c0">
          <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="90 50 50" dur="1s" repeatCount="indefinite" values="0 50 50;90 50 50;90 50 50" keyTimes="0;0.5;1"></animateTransform>
          </path>
        </svg>
      </div>
    )
  }
}

Loader.propTypes = {
  active: PropTypes.bool,
}
