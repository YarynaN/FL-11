import React from 'react';
import PropTypes from 'prop-types';
import Button from "react-bootstrap/Button";
import {Clear} from "@material-ui/icons";
import styles from './basket.module.scss';

export function Basket(props) {
  return (
      <div className={styles.basketWrapper}>
        <h3>Basket</h3>
        {props.basket.length > 0 &&
          (
            <div>
              <div className={styles.purchaseList}>
                {props.basket.map(emoji =>
                    <div key={emoji.id} className={styles.item}>{emoji.title} - {emoji.price}$
                      <a onClick={()=> props.onRemove(emoji)} href='/#'><Clear/></a>
                    </div>
                )}
              </div>
              <Button onClick={() => props.onPurchase()}>Purchase</Button>
            </div>
          )
        }
        {!props.basket.length &&
          (
            <div className={styles.emptyText}>No items to purchase</div>
          )
        }
      </div>
  )
}

Basket.propTypes = {
  title: PropTypes.string,
  price: PropTypes.string,
  onPurchase: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};
