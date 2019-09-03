import React from 'react';

import {EmojiPack} from './emoji-pack'
import {API} from "../../shared/constants/api.constants";
import Container from "@material-ui/core/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {EmojiBanner} from "./emoji-banner/emoji-banner.component";
import {Basket} from "./basket/basket.component";

import styles from './emoji-store.module.scss';

export class EmojiStore extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      emojies: [],
      basket: [],
    }
  }

  componentDidMount() {
    fetch(`${API}/emoji-shop`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            emojies: res.emoji,
            basket: []
          })
        })
  }

  buy(emoji) {
    this.setState(prevState => {
      return {
        ...prevState,
        basket: [...prevState.basket, emoji]
      }
    })
  }

  remove(emoji){
    this.setState(prevState => {
      return {
        ...prevState,
        basket: prevState.basket.filter(item => item !== emoji)
      }
    })
  }

  purchase() {
    alert('Your purchase is complete!');
    this.setState(prevState => {
      return {
        ...prevState,
        basket: []
      }
    })
  }

  renderEmojiPack(emoji) {
    const icons = emoji.emoji.map(item => item.char).slice(0, 3);
    return (
        <Col lg={4}
             key={emoji.id}
        >
          <EmojiPack
              title={emoji.title}
              stars={emoji.stars}
              price={`${emoji.price}$`}
              icons={icons}
              onBuy={() => {
                this.buy(emoji);
              }}
              disabled={this.state.basket.includes(emoji)}
          />
        </Col>
    )
  }

  render() {
    if (!this.state.emojies.length) {
      return <p>Loading...</p>
    }

    const featuredEmoji = this.state.emojies[0];

    return (
        <Container className={styles.container}>
          <Row>
            <Col lg={8}>
              <EmojiBanner title={featuredEmoji.title}
                           icons={featuredEmoji.emoji.map(item => item.char).slice(0, 3)}
                           price={featuredEmoji.price}
                           onBuy={() => {
                             this.buy(featuredEmoji);
                           }}
                           disabled={this.state.basket.includes(featuredEmoji)}
              />
              <Row>
                {this.state.emojies.map(emoji => this.renderEmojiPack(emoji))}
              </Row>
            </Col>
            <Col lg={4}>
              <Basket basket={this.state.basket}
                      onPurchase={() => this.purchase()}
                      onRemove={(emoji) => this.remove(emoji)}
              />
            </Col>
          </Row>
        </Container>
    )
  }
}
