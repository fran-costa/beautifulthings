import React from 'react';
import PropTypes from 'prop-types';

import { isDateStringValid, getCurrentDateString } from 'utils/date';

import Calendar from './Calendar.svg';
import styles from './index.module.scss';

export default class DatePicker extends React.PureComponent {
  static propTypes = {
    /**
     * The initial date to show
     */
    date: PropTypes.string.isRequired,
  };

  state = { datePicked: this.props.date };

  _handleChange = event => {
    const newDatePicked = event.target.value;
    const isNewDatePickedValid = isDateStringValid(newDatePicked);

    if (isNewDatePickedValid) this.setState({ datePicked: newDatePicked });
  }

  _getLabel() {
    return (
      <label>
        When?
      </label>
    );
  }

  _getInput() {
    const maxDate = getCurrentDateString();

    return (
      <input
        className={styles.input}
        type="date"
        max={maxDate}
        value={this.state.datePicked}
        onChange={this._handleChange}
      />
    );
  }

  _getCalendarIcon() {
    return (
      <img
        className={styles.calendarIcon}
        src={Calendar}
        alt=""
        onClick={this._togglePasswordVisibility}
      />
    )
  }

  getDate() {
    return this.state.datePicked;
  }

  render() {
    const label = this._getLabel();
    const input = this._getInput();
    const calendarIcon = this._getCalendarIcon();

    return (
      <div>
        <div className={styles.labelContainer}>
          {label}
        </div>
        <div className={styles.inputContainer}>
          {input}
          {calendarIcon}
        </div>
      </div>
    );
  }
}
