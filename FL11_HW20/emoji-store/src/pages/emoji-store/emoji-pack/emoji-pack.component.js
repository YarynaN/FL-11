import React from 'react';
import PropTypes from 'prop-types';

import {Button, Card} from "react-bootstrap";
import styles from './emoji-pack.module.scss';
import {Star, StarHalf, StarBorder} from '@material-ui/icons';

function renderStars(rate) {
  let stars = [];
  for (let i = 0; i < 5; i++) {
    if (rate >= 1) {
      stars.push(<Star key={i}/>);
    } else if (rate < 1 && rate > 0) {
      stars.push(<StarHalf key={i}/>);
    } else {
      stars.push(<StarBorder key={i}/>);
    }
    rate--;
  }

  return (
      <span>{stars}</span>
  )
}

export function EmojiPack(props) {
  return (
    <Card className={styles.card}>
      <Card.Body className={styles.cardBody}>
        <Card.Title>
          <div className={styles.cardHeader}>
            {props.icons.map((item, index) => <span className={styles.icon} key={index}>{item}</span>)}
          </div>
          <div>
            {props.title}
          </div>
        </Card.Title>
        <Card.Text className={styles.cardText}>
          {renderStars(props.stars)}
        </Card.Text>
        <Button variant="primary" onClick={()=>props.onBuy()} disabled={props.disabled}>Get ({props.price})</Button>
      </Card.Body>
    </Card>
  )
}

EmojiPack.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  icons: PropTypes.array,
  onBuy: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
