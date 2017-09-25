import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import img from '../../img/reshetki.jpg';
import img1 from '../../img/pic_5_thumb.jpg';

import {CONST} from '../../constants';
import './rolet_reshetki.css';

const url = 'http://www.alutech-group.com/content/images/product/roll/rolling_grills/full_desc/page_2/';
const url2 = 'http://www.alutech-group.com/content/images/product/roll/rolling_grills/full_desc/page_2_1/';
const listClass = CONST.mobile ? 'expansion-list-mobile' : '';
const wrapperClass = CONST.mobile ? 'wrapper-mobile' : 'wrapper';
const style = CONST.mobile ? {width: '100%'} : {};

export const rollet_reshetki_short =  'Роллетные решетки – подвижные системы, обеспечивающие прекрасный внешний вид витрин и витражей и надежную защиту ценностей.';

export const rollet_reshetki_extended = 

<div id="rolet_reshetki">
  <h1>Защитные роллетные решетки</h1>
  	<Paper className="image-placeholder"><img src={img} alt="image" role="presentation"/></Paper>
  	<p><strong>Роллетные решетки </strong> – подвижные системы, обеспечивающие прекрасный внешний вид витрин и витражей и надежную защиту ценностей. Они являются атрибутом современных торговых центров и магазинов и гармонично сочетаются с любой архитектурой здания и интерьером торговых помещений. Благодаря роллетным решеткам «АЛЮТЕХ» витрины работают даже ночью. Сертифицированная защита от взлома позволяет успешно применять решетки для охраны офисов и банков, кафе и ресторанов.</p>
  	<p> Роллетные решетки изготавливаются из <strong>алюминиевых экструдированных профилей</strong> – решеточных с прямоугольными  окнами, одностенных, двустенных повышенной прочности. Ширина профилей – от 30  до 84мм, толщина – от 13,5 до 19мм. </p>
					<p>Мы предлагаем широкий ассортимент профилей и комплектующих для роллетных решеток: решеточные, усиливающие, фиксирующие и концевые профили, направляющие шины, защитные короба и боковые крышки, подвижные каретки и др. </p>
	<ExpansionList className={'md-cell md-cell--12 clear ' + listClass}>
		<ExpansionPanel headerClassName="panel-header" label="Цветовые решения" footer={null}><Colours/></ExpansionPanel>
		<ExpansionPanel headerClassName="panel-header" label="Решетки серии AEG56" style={style} footer={null}>
			<h4>Профили и комплектующие для роллетных решеток серии AEG56</h4>
					<p><strong>Роллетные решетки серии AEG56</strong> идеально подходят для небольших и средних по размерам проемов. Maксимальный размер <a href="http://www.alutech-group.com/product/rolleti/reshetki/opisanie/">роллетной решетки</a>: ширина – 3,0 м, площадь – 7,5 кв.м; с усиливающим профилем: ширина – 4,5 м, площадь – 13,5 кв.м. </p>
					<Paper className={wrapperClass}>
						<h4>Роллетные профили</h4>
						<p>Широкая  линейка профилей для роллетных решеток – решеточных, одностенных и двустенных  усиливающих – позволяет подобрать различные комбинации профилей с учетом  предпочтений заказчика и размеров проема. </p>
					  	<p>Классический профиль <strong>AEG</strong><strong>56</strong> с большими  окнами обеспечивает высокий уровень проникновения воздуха и света внутрь  помещения. Профиль <strong>AEG</strong><strong>56/</strong><strong>P</strong> с мелкой и  частой перфорацией создает дополнительный барьер для попадания внутрь решетки  инородных предметов, сохраняя оптимальную свето- и воздухопроницаемость.</p>
					  	<p> Совместное  применение с решеточными профилями <strong>AEG56</strong> <strong>(</strong><strong>AEG</strong><strong>56/</strong><strong>P</strong><strong>)</strong>&nbsp; двустенных фиксирующих профилей <strong>AEG30/S </strong>обеспечивает  повышенную прочность и дополнительную стабильность полотну решетки, что  позволяет установить решетку на более широкие проемы.<strong></strong></p>
					  	<p> Фиксирующий  профиль <strong>AEG56F</strong> предназначен  для соединения полотна с валом и обеспечивает защиту от несанкционированного  подъема решетки в закрытом состоянии. <strong></strong></p>
					  	<p> Одностенный профиль <strong>AER56</strong> препятствует попаданию мусора за  решетку при установке в нижней части полотна и в целом повышает устойчивость  конструкции роллетной решетки.</p>
						<div className="image-wrapper">
							<img src={url+'pic_1.jpg'}/><img src={url+'pic_11.jpg'}/><img src={url+'pic_2.jpg'}/><img src={url+'pic_3.jpg'}/><img src={url+'pic_4.jpg'}/>
						</div>
					</Paper>
		</ExpansionPanel>
		<ExpansionPanel headerClassName="panel-header" label="Решетки серии AEG84" style={style} footer={null}>
			<h4>Профили и комплектующие для роллетных решеток серии AEG84</h4>
					<p><a href="http://www.alutech-group.com/product/rolleti/reshetki/opisanie/">Роллетные решетки серии AEG84</a> рекомендуется устанавливать на больших проемах. Maксимальный размер роллетной решетки: ширина – 5,5 м, площадь – 16,5 кв.м; с усиливающим профилем: ширина – 7,0 м, площадь – 21 кв. м. </p>
					<Paper className={wrapperClass}>
						<h4>Профили роликовой прокатки</h4>
						<p>Широкая  линейка профилей для роллетных решеток – решеточных, одностенных и двустенных  усиливающих – позволяет подобрать различные комбинации профилей с учетом  предпочтений заказчика и размеров проема. </p>
  						<p>Совместное  применение с решеточными профилями <strong>AEG</strong><strong>84</strong> двустенных фиксирующих профилей <strong>AEG</strong><strong>45/</strong><strong>S</strong><strong> </strong>обеспечивает  повышенную прочность и дополнительную стабильность полотну решетки, что  позволяет установить решетку на более широкие проемы.<strong></strong></p>
  						<p>Фиксирующий  профиль <strong>AEG84F</strong> предназначен  для соединения полотна с валом и обеспечивает защиту от несанкционированного  подъема решетки в закрытом состоянии. <strong></strong></p>
  						<p>Одностенный профиль <strong>AER</strong><strong>84</strong> при установке в нижней части  полотна препятствует попаданию мусора за решетку и в целом повышает  устойчивость конструкции.</p>
  						<div className="image-wrapper">
							<img src={url2+'pic_1.jpg'}/><img src={url2+'pic_2.jpg'}/><img src={url2+'pic_3.jpg'}/><img src={url2+'pic_4.jpg'}/>
						</div>
					</Paper>
		</ExpansionPanel>
	</ExpansionList>
	<h4>Основные  достоинства роллетных решеток</h4>
		<ul className="flex-list">
			<div>
			  <li><p>Возможность  установки роллетной решетки на проемах шириной до 7 м и площадью до 21 м<sup>2</sup>  с использованием усиливающего профиля, который обеспечивает повышенную  прочность и дополнительную стабильность решетки.</p></li>
			  <li><p>Сохранение  единого стиля на одном объекте с различными проемами благодаря использованию  решеток серии AEG56 на проемах шириной до 4,5м  и серии AEG84 – на проемах шириной до 7м.</p></li>
			  <li><p>Высокая  защита от взлома. Роллетные решетки сертифицированы на классы устойчивости ко  взлому Р3 и Р4 в соответствии с ГОСТ Р 52502-2005, ГОСТ Р 52503-2005.</p></li>
			  <li><p>Специальный  фиксирующий профиль для соединения полотна с валом обеспечивает защиту от  несанкционированного подъема роллетной решетки в закрытом состоянии.</p></li>
			</div>
			<div>
			  <li><p>Круглосуточная  демонстрация витрин магазинов и торговых центров. Даже когда магазин закрыт,  реклама товара продолжается. Решетки позволяют потенциальным покупателям  увидеть новинки и вернуться к Вам за покупками.</p></li>
			  <li><p>Возможность поднять и опустить решетку при необходимости и в любой  момент – это неоспоримое преимущество роллетных решеток по сравнению со стационарными металлическими решетками, которые абсолютно  неподвижны.   </p></li>
			  <li><p>Богатый  выбор цветовых решений – 19 цветов – позволяет отобразить индивидуальность и  внести дополнительный декоративный элемент в интерьер и внешний вид фасада  здания.</p></li>
			</div>
		</ul>
		<h4>Преимущества алюминиевых роллетных  решеток по сравнению со стальными конструкциями</h4>
			<Paper className="image-placeholder"><img src={img1} alt="image" role="presentation"/></Paper>
			<ul>
			<li>Высокая  стойкость к коррозии, устойчивость к атмосферным осадкам и UV-излучению </li>
			<li>Легкость  конструкции</li>
			<li>Меньший  уровень шума при эксплуатации алюминиевой роллетной решетки </li>
			</ul>
</div>