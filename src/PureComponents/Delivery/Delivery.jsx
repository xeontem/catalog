import React, { Component } from 'react';
import Paper from 'react-md/lib/Papers';
import './delivery.scss';

export default class Delivery extends Component {
  render() {
    return (
      <Paper className="paper container contact">
        <section className="contact-about">  
        <h2>Доставка</h2>
        Наш интернет-магазин осуществляет доставку по Минску и областям РБ:<br/>
        Курьерская доставка по Минску — <span>20 руб.</span><br/>
        Почтовая доставка по РБ — от <span>15 руб.</span> в зависимости от адреса доставки.
      </section>
      <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2349.781005132894!2d27.586977714958024!3d53.91786733945009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfa6a72e2c85%3A0x1f2b3065cb46c37f!2spraspiekt+Niezalie%C5%BEnasci+58%2C+Minsk!5e0!3m2!1sen!2sby!4v1503780263362" frameBorder="0" allowFullScreen></iframe>
      </Paper>
    );
  }
}