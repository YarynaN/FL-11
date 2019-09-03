import React from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import styles from './emoji-banner.module.scss'


export function EmojiBanner(props) {
  return (
      <div className={styles.bannerWrapper}>
        <h1>New! {props.title}</h1>
        <p>includes</p>
        <p>{props.icons}</p>
        <Button variant="primary" onClick={()=>props.onBuy()} disabled={props.disabled}>Get ({props.price}$)</Button>
      </div>
  )
}

EmojiBanner.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.array,
  price: PropTypes.number.isRequired,
  onBuy: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
