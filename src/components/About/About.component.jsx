import R from 'ramda';
import React, { Component } from 'react';
import { PropTypes } from 'prop-types'; 
import Paper from 'react-md/lib/Papers';
import Button from 'react-md/lib/Buttons/Button';
import FontIcon from 'react-md/lib/FontIcons';
import { Route } from 'react-router-dom';

import ExendedInfoCard from '../../redux/selectors/extendedInfoCard.selector'; 
import Works from '../../redux/selectors/works.selector';
import logo from './logo.png';
import stripe from '../../Data/img/stripeBg.gif';

import './about.css';

export default class About extends Component {
  static propTypes = {
    mobile: PropTypes.bool.isRequired,
    // sliderImages: PropTypes.array.isRequired,
    // imageIndex: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    PORTFOLIO: PropTypes.array.isRequired,
    sliderInfo: PropTypes.object.isRequired,
    nextImg: PropTypes.func.isRequired
  };

  showInfo = (e) => {
    if(e.target.dataset.id) {
    }
  }

  hideInfo = (e) => {

  }

  render() {
    setTimeout(() => this.props.nextImg(), 5000);
    let sliderInfo = this.props.sliderInfo;//[this.props.imageIndex] ? this.props.sliderInfo[this.props.imageIndex] : this.props.sliderInfo[0];
    return (
      <Paper className="paper">
        <Route path='/roster'/>
        <section className="header">
          <img className ="space-around logo" src={logo} />
          <div className="space-around">
            <h2>Контактные номера:</h2>
            <div className="phone-container"><FontIcon>phone</FontIcon><a className="phone-number" href="tel:+375259595131">+375 (25) 959 - 51 - 31</ a></div>
            <div className="phone-container"><FontIcon>phone</FontIcon><a className="phone-number" href="tel:+375259595131">+375 (33) 959 - 51 - 31</ a></div>
          </div>
        </section>
        <section className="slider-container">
          <div className="slider-stripes-container">
            <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
          </div>
          <div className="slider-image-placeholder">
            <img className="slider-image" src={this.props.imgSrc}/>
            <div className="info-over-slider">
              <div className={`info-over-slider-square container ${sliderInfo.color}`}><span>{sliderInfo.big}</span><br/>{sliderInfo.little}</div>
              <div className="info-over-slider-text container"><span>{sliderInfo.mainBig}</span>
                <p>{sliderInfo.mainLittle}</p>
              </div>
            </div>
          </div>
          <div>
            <Button data-id="0" className="slider-button aluteh-purple-back" flat children="Дилерам" onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo} />
            <Button data-id="1" className="slider-button aluteh-orange-back" flat children="Архитекторам" onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo} />
            <Button data-id="2" className="slider-button aluteh-blue-back" flat children="Застройщикам" onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo} />
            <Button data-id="3" className="slider-button aluteh-green-back" flat children="Покупателям" onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo} />
          </div>
        </section>
        <section className className="container">
          <div className="row">
          <h1>Изготовление надежных автоматических ворот, роллет, алюминиевых профильных систем и автоматики</h1>
          <p>«АЛЮТЕХ» – это международная компания, которая объединяет <strong>5 производственных</strong> и <strong> 20 сбытовых предприятий в странах СНГ и Европы</strong> и специализируется <strong>на изготовлении секционных автоматических ворот, роллетных и алюминиевых профильных систем</strong>.</p>
          <p>Руководствуясь собственной этикой бизнеса и эстетикой качества, «АЛЮТЕХ» предлагает решения, которые пользуются признанием и спросом в <strong>более чем 65 странах мира</strong>:</p>
            <div className="md-grid">
              <div className="md-cell md-cell--6">
                <ul>
                  <li><span>интерьерные и архитектурные профильные системы;</span></li>
                  <li><span>роллеты для окон и дверей, роллетные ворота и решетки;</span></li>
                  <li><span>роллеты с антимоскитной сеткой, противовзломные роллеты;</span></li>
                  <li><span>секционные, распашные, откатные ворота;</span></li>
                  <li><span>автоматику для роллетных систем и ворот;</span></li>
                </ul>
              </div>
              <div className="md-cell md-cell--6">
                <ul>
                  <li><span>шлагбаумы;</span></li>
                  <li><span>отливы;</span></li>
                  <li><span>перегрузочное оборудование (доклевеллеры и докшелтеры);</span></li>
                  <li><span>противопожарные системы (противопожарные окна, двери, перегородки, ворота);</span></li>
                  <li><span>программное обеспечение.</span></li>
                </ul>
              </div>
            </div>
          <p>Продукция выпускается в соответствии с национальными и международными требованиями к качеству и безопасности. Поддерживать изготовление ворот, роллет и алюминиевых профилей «АЛЮТЕХ» на высоком уровне позволяет применение качественного сырья, материалов и технологий. Завершающим этапом изготовления секционных автоматических ворот, роллетных систем и алюминиевых профилей становятся испытания качества. Так, во время производства роллет «АЛЮТЕХ» отслеживает <strong>свыше 50 параметров, применяя более 40 контрольных методов</strong>. Благодаря такому подходу изделия отличаются совершенной конструкцией и долгим сроком службы.</p>
          <p>Продукция «АЛЮТЕХ» постоянно проходит сертификацию <strong>в центрах TÜV-Süd-Czech (Чехия), CSTB (Франция), Wintech (Великобритания), TREZOR&nbsp;TEST&nbsp;S.&nbsp;r.&nbsp;o&nbsp;(Чехия); Ржевском научно-исследовательском сертификационном центре (РФ), институте ift. Rosenheim (Германия), лабораториях NCTL и ATI (США)</strong>. Сертификаты, полученные по результатам испытаний в авторитетных организациях, подтверждают, что изготовление секционных автоматических ворот, роллет, профилей из алюминия ведется с учетом высочайших стандартов. </p>
          <p>Системный подход к организации производства и ведению бизнеса позволяет «АЛЮТЕХ» учитывать интересы всех участников рынка.</p>
          <p><span><strong className="aluteh-purple-text">Партнеры</strong></span> Группы компаний могут рассчитывать на комплексность предложения, конкурентные качество и цены, бесперебойность и оперативность поставок, а также эффективную маркетинговую поддержку.</p>
          <p><span><strong className="aluteh-orange-text">Архитекторы</strong></span>, работающие с продукцией «АЛЮТЕХ», получают детальную проектную документацию, значительно упрощающую построение и монтаж конструкций и отдельных узлов.</p>
          <p><span><strong className="aluteh-blue-text">Клиентам</strong></span> гарантированы исчерпывающая информационная поддержка, быстрая и удобная покупка, качественные установка и обслуживание, а также безграничные комфорт и удовольствие от использования продукции под маркой «АЛЮТЕХ».</p>
          <p>Таким образом, «АЛЮТЕХ» – это компания, ориентированная не только на изготовление секционных автоматических ворот, роллет и алюминиевых профильных систем высокого качества, но и на порядочность, надежность, лояльность и внимательность в отношениях с партнерами и клиентами.</p>
                  </div>
        </section>
        <section className={!this.props.mobile && 'container'}>
          <h2>Наши Работы</h2>
          {this.props.PORTFOLIO.map((work, i) => <Works key={`$work${i}`} work={work}/>)}
        </section>
        <div className="slider-stripes-container">
          <img src={stripe}/><img src={stripe}/><img src={stripe}/><img src={stripe}/>
        </div>
      </Paper>
    );
  }
}
