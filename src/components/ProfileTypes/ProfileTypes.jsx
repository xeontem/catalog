import React, { PureComponent } from 'react';
import Paper from 'react-md/lib/Papers';
import { CONST } from '../../Data/constants';
import './profileTypes.css';

const url = 'http://www.alutech-group.com/content/images/product/roll/sec_rollingshutter/full_desc/page_2/';

const classicRolicProcatki = [
	url + 'pic_14.jpg',
	url + 'pic_5.jpg',
	url + 'pic_6.jpg',
	url + 'pic_2.jpg',
	url + 'pic_3.jpg',
	url + 'pic_7.jpg',
	url + 'pic_4.jpg',
	url + 'pic_16.jpg',
	url + 'pic_9.jpg'];

	const economyRolicProcatki = [
	url + 'pic_18.jpg',
	url + 'pic_19.jpg',
	url + 'pic_20.jpg'];

	const classicRolicExtrud = [
	url + 'pic_10.jpg',
	url + 'pic_11.jpg',
	url + 'pic_12.jpg'];

	const economyRolicExtrud = [
	url + 'pic_11.jpg',
	url + 'pic_17.jpg'];

export default class ProfileTypes extends PureComponent {

	render() {
		const wrapperClass = CONST.mobile ? 'wrapper-mobile' : 'wrapper';
		return (
			<div id="profileTypes" ><h2>Роллетные профили </h2>
					<p>Основная часть роллеты - роллетное полотно, которое состоит из  алюминиевых профилей роликовой прокатки или экструдированных. Ассортимент  роллетных профилей «Алютех» включает профили двух серий – <strong><a href="/product/rolleti/roll/classicandeconomy/" title="Роллеты серий Classic и Economy">Classic и Economy</a></strong>. Профили серии Classic отличаются  повышенной прочностью и предлагаются в расширенной цветовой гамме. Профили  серии Economy – чуть менее прочные, с ограниченным набором цветов и  более доступные по цене.</p>
				<h4>Роллетные профили роликовой прокатки</h4>
					<p>Профили  изготовлены из высококачественной алюминиевой ленты с двухслойным лакокрасочным  покрытием, отличающимся высокой износоустойчивостью. Благодаря пенозаполнению профили обладают тепло- и звукоизоляционными характеристиками.  Профили роликовой прокатки могут быть с перфорацией и без перфорации. Перфорированные профили имеют узкие отверстия вдоль верхней замковой части. Рассеянный свет, проникающий сквозь отверстия, создает приятный полумрак. </p>
					<Paper className={wrapperClass}>
						<h5>Серия Classic</h5>
						<div className="image-wrapper">
							{classicRolicProcatki.map((src, i) => <img key={`classicRolicProcatki${i}`} src={src}/>)}
						</div>
					</Paper>
				 	<Paper className={wrapperClass}>
						<h5>Серия Economy</h5>
						<div className="image-wrapper">
							{economyRolicProcatki.map((src, i) => <img key={`economyRolicProcatki${i}`} src={src}/>)}
						</div>
					</Paper>
				<h4>Роллетные профили экструдированные</h4>
					<p> Экструдированные профили для роллетных систем производятся из  алюминиевых столбов по технологии прессования через фильеры матрицы. Роллеты, изготовленные из этих профилей, отличаются повышенной устойчивостью ко взлому благодаря большой толщине стенок и наличию поперечного ребра жесткости.</p>
					<Paper className={wrapperClass}>
						<h5>Серия Classic</h5>
						<div className="image-wrapper">
							{classicRolicExtrud.map((src, i) => <img key={`classicRolicExtrud${i}`} src={src}/>)}
						</div>
					</Paper>
					<Paper className={wrapperClass}>
						<h5>Серия Economy</h5>
						<div className="image-wrapper">
							{economyRolicExtrud.map((src, i) => <img key={`economyRolicExtrud${i}`} src={src}/>)}
						</div>
					</Paper>
		</div>
	)}
}