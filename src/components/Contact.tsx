import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTelegram,
  faGithub,
  faDiscord,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from './container/Container';
import Wraper from './container/Wraper';
import Floatdiv from './container/Floatdiv';
import incoJpg from '../../static/img/inco.jpg';

export default class Contact extends React.Component {
  render() {
    const styles = {
      padding: '5%',
      display: 'flex',
      'flex-direction': 'column',
      justifyContent: 'center',
      alignItems: 'center',
    };
    return (
      <Container>
        <Wraper width="800px" height="600px">
          <Floatdiv class="float-div" float="left">
            <div style={styles}>
              <img className="contact-img" src={incoJpg} alt="icon"/>
            </div>
            <div style={styles}>
              <h2>Wias Liaw</h2>
              <hr/>
            </div>
          </Floatdiv>
          <Floatdiv class="float-div" float="right">
            <a className="contact" href="mailto:leewei48750@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
              <span>leewei48750@gmail.com</span>
            </a>
            <a className="contact" target="_blank">
              <FontAwesomeIcon icon={faFacebook} className="contact-icon" />
              <span>Facebook</span>
            </a>
            <a className="contact" target="_blank" href="https://t.me/chialiaw">
              <FontAwesomeIcon icon={faTelegram} className="contact-icon" />
              <span>Telegram</span>
            </a>
            <a className="contact" target="_blank" href="https://github.com/wiasliaw77210">
              <FontAwesomeIcon icon={faGithub} className="contact-icon" />
              <span>wiasliaw77210</span>
            </a>
            <a className="contact" target="_blank" href="https://discordapp.com/">
              <FontAwesomeIcon icon={faDiscord} className="contact-icon" />
              <span>Discord</span>
            </a>
            <a className="contact" target="_blank" href="">
              <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
              <span>Linkedin</span>
            </a>
          </Floatdiv>
        </Wraper>
      </Container>
    );
  }
}
