import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import ProfileTypes from '../../../components/ProfileTypes/ProfileTypes';
import img from '../../img/70.jpg';
import {CONST} from '../../constants';
import './vorota_garaznye.css';

export const vorota_garaznye_short = 'Роллетные системы (другими словами - рольставни или роллеты) устанавливаются на дверные или оконные проемы и обеспечивают надежную защиту помещения от посторонних глаз, шума, погодных условий и взлома.';

const CustomFooter = () => (
  <footer style={{ padding: 24 }}>
    <p>This is some custom stuff I want in the footer.</p>
  </footer>
);

const style = CONST.mobile ? {width: '100%'} : {};
const listClass = CONST.mobile ? 'expansion-list-mobile' : '';

export const vorota_garaznye_extended =
			<div id="vorota_garaznye">
				<p className="bold-header">Гаражные ворота</p>
        <Paper className="image-placeholder"><img src={img} alt="image" role="presentation" /></Paper>
					<p>Каждый год более 200 000 владельцев помещений закрывают проемы при помощи секционных ворот . Среди объектов установки есть и гаражи в загородных домах и дачах, и подземные стоянки, и коттеджи. По мнению заказчиков, ворота от ведущего производителя рынка из Беларуси — однозначный положительный ответ на вопросы хранения авто и имущества, безопасной и удобной работы, теплоизоляции.</p>
					<p>Собирают секционные гаражные ворота из системы стальных направляющих, механизма балансировки (торсионных пружин или пружин растяжения) и стальных сэндвич-панелей с пенополиуретаном внутри. Особенность изделия — в конструкции полотна: при команде «открыть» секции поочередно займут положение под перекрытием объекта. </p>
				<p className="bold-header">Виды гаражных ворот</p>
				<p>Серии <strong className="aluteh-blue-text">Trend</strong> и <strong className="aluteh-blue-text">Classic</strong> предназначены для установки и пользования в частном сегменте построек. Все, что нужно для грамотного выбора конкретной серии ворот — ориентировка на такие критерии: климатический регион установки, наличие отопления в гараже, уровень влажности и ценовой сегмент. </p>
        <ExpansionList className={'md-cell md-cell--12 clear ' + listClass}>
        <ExpansionPanel id="TRENDInfo" headerClassName="panel-header" label="Гаражные ворота TREND" style={style} footer={null}>
          	<section className="icons-wrapper">
          		<div>
					<figure><img src={CONST.ORIGIN + "/upload/iblock/afe/arg-007.png"}/></figure>
					<h4>По доступной цене<br/></h4>
				</div>
				<div>
					<figure><img src={CONST.ORIGIN + "/upload/iblock/1ca/arg-008.png"}/></figure>
					<h4>Для регионов<br/> с умеренным климатом<br/></h4>
				</div>
				<div>
					<figure><img src={CONST.ORIGIN + "/upload/iblock/022/low-humidity-trend.png"}/></figure>
					<h4>Для помещений<br/> с нормальной влажностью</h4>
				</div>
          	</section>

			<ul>
				<li>Панели толщиной 40 мм<br/></li>
				<li>Комплектующие&nbsp;&nbsp;из оцинкованной стали<br/></li>
				<li>Возможность&nbsp;&nbsp;выдвижение рамы в проем<br/></li>
				<li>До 25 000 циклов «подъема-опускания»<br/></li>
				<li>Любой размер с шагом 5 мм<br/></li>
				<li>5 рисунков панелей<br/></li>
				<li>До 10 базовых цветов RAL и 3 цветов «под&nbsp;&nbsp;дерево»</li>
			</ul>
			<section>
				<h4 className="primary-colored-text">Долговечная и надежная панель</h4>
				<div className="addit-info">
				  <div>
				    <img src={CONST.ORIGIN + "/images/product/gate/trend/40-Trend.jpg"} alt="door"/>
				  </div>
				  <div>
				    <ul>
				      <li><p><strong>Замкнутый контур стальных листов</strong></p>Специальная система соединения внутреннего и  лицевого стальных листов защищает панель от расслоения, которое возможно при  нагреве панели на солнце. Их соединяют внизу и вверху в 4 слоя при помощи  саморезов. Так, покупатели ворот с темным цветом полотна могут быть уверены в  долговечности изделия.</li>
				      <li><p><strong>Защита от защемления пальцев</strong></p>В панели «Алютех» реализовали одну из главных  норм европейской безопасности: исключили защемление пальцев (соответствие EN 12604).</li>
				      <li><p><strong>Отличное сцепление стальных листов с пеной</strong></p>Хорошее сцепление стальных листов с пеной  получили за счет слоя адгезионного лака (12 мкм). Тем самым конструкторы  полностью исключили вздутие нагретого на солнце полотна.</li>
				      <li><p><strong>Высокие антикоррозийные свойства</strong></p>Повышенных антикоррозионных свойств панели  удалось достичь за счет грунтовочного слоя (14-16 мкм) и цинкового покрытия (16  мкм).</li>
				      <li><p><strong>Долговечное покрытие</strong></p>Сохранить полотно ворот в первоначальном  привлекательном виде получилось благодаря полиуретановой краске с добавлением  специальных полиамидных частиц (ПУР-ПА), которые повышают антикоррозийные и защитные  свойства панели. </li>
				      <li><p><strong>Хорошая теплоизоляция</strong></p>Хорошая теплоизоляция. 0,74 м² °C/Bт – коэффициент  сопротивления теплопередаче в воротах производителя. Такой же величиной  обладает стена из красного кирпича в 55 см.</li>
				    </ul>
				  </div>
				</div>
			</section>
			<section>
				    <p className="bold-header">Ворота для гаража Trend выпускают и с набором дополнительных элементов и аксессуаров:</p>
				    <hr/>
				    <h4 className="primary-colored-text">Калитка в полотне</h4>
				    <p>Этот вид калитки заказывают, если нужен дополнительный вход в помещение. Ее использование позволяет не только попасть в помещение без открывания ворот, но и сэкономить их ресурс. Опция позволяет пользоваться воротной конструкцией с максимальным комфортом.</p>
				    <p><strong>В ассортименте «Алютех» представлены 3 варианта калиток:</strong></p>
				    <div className="optins-wrapper">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/kalitka-01.jpg"} /></div>
				        <div>
				            <p><strong>Со стандартным порогом 145 мм</strong><br/>(для ворот с размерами ширины от 4,5 до 6 м)</p>
				            <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
				        </div>
				    </div>
				    <div className="optins-wrapper">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/kalitka-02.jpg"} /></div>
				        <div>
				            <p><strong>С низким порогом 100 мм</strong><br/>(для ворот с размерами ширины до 4,5 м)</p>
				            <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
				        </div>
				    </div>
				    <div className="optins-wrapper">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/kalitka-03.jpg"} /></div>
				        <div>
				            <p><strong>С плоским порогом 18 мм</strong><br/>(для ворот с размерами ширины до 5 м)</p>
				            <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
				        </div>
				    </div>
				    <p>Обрамление калитки выбирают из двух базовых цветов – коричневого и серебристого. Альтернативные цветовые решения всегда доступны в каталоге RAL. </p>
				    <hr/>
				    <h4 className="primary-colored-text">Встроенные окна</h4>
				    <div className="windows-wrapper">
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-01.jpg"}  alt=""/></div>
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-02.jpg"}  alt=""/></div>
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-03.jpg"}  alt=""/></div>
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-04.jpg"}  alt=""/></div>
				    </div>
				    <p>Сократить потребление электричества и дать доступ к дневному свету - вот какие задачи решат встроенные окна. Кроме того, такие гаражные ворота запомнят по их необычному оформлению.</p>
				    <hr/>
				    <h4 className="primary-colored-text">Замок</h4>
				    <div className="addit-info">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/lock-04.jpg"} /></div>
				        <div>
				            <p>Для запирания ворот в гараже без дополнительного входа необходим замок. В замке реализована возможность подключения устройства разблокировки электропривода.</p>
				        </div>
				    </div>    
				    <hr/>
				    <h4 className="primary-colored-text">Боковая дверь</h4>
				    <div>
				        <div className="windows-wrapper">
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-01.jpg"}  alt=""/></div>
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-02.jpg"}  alt=""/></div>
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-03.jpg"}  alt=""/></div>
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-04.jpg"}  alt=""/></div>
				        </div>
				    </div>
				    <p>Стиль двери по умолчанию делают единым с гаражными воротами. За счет идентичного рисунка и цвета изделие отлично впишется в фасад любого здания. Так, одинаковые цвет и рисунок смотрятся как единое целое.</p>
					<hr/>
				    <h4 className="primary-colored-text">Разблокировка автоматики</h4>
				    <div className="addit-info">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/block-01.jpg"} /></div>
				        <div>
				            <p>Для автоматизированных ворот необходимо предусмотреть возможность аварийной разблокировки привода снаружи гаража, например, в случае отключения электроэнергии. Удобный и компактный механизм разблокировки обеспечит легкое переключение ворот с автоматического на ручной режим управления.</p>
				        </div>
				    </div>
			</section>
        </ExpansionPanel>
        <ExpansionPanel id="CLASSICInfo" headerClassName="panel-header" label="Гаражные ворота CLASSIC" style={style} footer={null}>
          	<section className="icons-wrapper">
          		<div>
					<figure><img src={CONST.ORIGIN + "/upload/iblock/75e/preim-001.png"}/></figure>
					<h4>Для отапливаемых зданий<br/></h4>
				</div>
				<div>
					<figure><img src={CONST.ORIGIN + "/upload/iblock/2e7/high-humidity-classic-propluspng.png"}/></figure>
					<h4>Для помещений<br/> с высокой влажностью</h4>
				</div>
				<div>
					<figure><img src={CONST.ORIGIN + "/upload/iblock/230/preim-003.png"}/></figure>
					<h4>Для регионов<br/> с холодным климатом</h4>
				</div>
          	</section>

			<ul>
				<li>Панели толщиной 45 мм<br/></li>
				<li>Комплектующие из нержавеющей стали<br/></li>
				<li>Двухлепестковые EPDM-уплотнители<br/></li>
				<li>До 25 000 циклов «подъема-опускания»<br/></li>
				<li>Любой размер с шагом 5 мм<br/></li>
				<li>5 рисунков панелей<br/></li>
				<li>До 10 базовых цветов RAL и 3 цветов «под дерево»</li>
			</ul>
			<section>
				<h4 className="primary-colored-text">Долговечная и надежная панель</h4>
				<div className="addit-info">
				  <div>
				    <img src={CONST.ORIGIN + "/images/product/gate/classic/panel-45.jpg"} alt="door"/>
				  </div>
				  <div>
				    <ul>
				      <li><p><strong>Замкнутый контур стальных листов</strong></p>Специальная система соединения внутреннего и  лицевого стальных листов защищает панель от расслоения, которое возможно при  нагреве панели на солнце. Их соединяют внизу и вверху в 4 слоя при помощи  саморезов. Так, покупатели ворот с темным цветом полотна могут быть уверены в  долговечности изделия.</li>
				      <li><p><strong>Защита от защемления пальцев</strong></p>В панели «Алютех» реализовали одну из главных  норм европейской безопасности: исключили защемление пальцев (соответствие EN 12604).</li>
				      <li><p><strong>Отличное сцепление стальных листов с пеной</strong></p>Хорошее сцепление стальных листов с пеной  получили за счет слоя адгезионного лака (12 мкм). Тем самым конструкторы  полностью исключили вздутие нагретого на солнце полотна.</li>
				      <li><p><strong>Высокие антикоррозийные свойства</strong></p>Повышенных антикоррозионных свойств панели  удалось достичь за счет грунтовочного слоя (14-16 мкм) и цинкового покрытия (16  мкм).</li>
				      <li><p><strong>Долговечное покрытие</strong></p>Сохранить полотно ворот в первоначальном  привлекательном виде получилось благодаря полиуретановой краске с добавлением  специальных полиамидных частиц (ПУР-ПА), которые повышают антикоррозийные и защитные  свойства панели. </li>
				      <li><p><strong>Хорошая теплоизоляция</strong></p>Хорошая теплоизоляция. 0,74 м² °C/Bт – коэффициент  сопротивления теплопередаче в воротах производителя. Такой же величиной  обладает стена из красного кирпича в 55 см.</li>
				    </ul>
				  </div>
				</div>
			</section>
			<section>
				    <p className="bold-header">Ворота для гаража Trend выпускают и с набором дополнительных элементов и аксессуаров:</p>
				    <hr/>
				    <h4 className="primary-colored-text">Калитка в полотне</h4>
				    <p>Этот вид калитки заказывают, если нужен дополнительный вход в помещение. Ее использование позволяет не только попасть в помещение без открывания ворот, но и сэкономить их ресурс. Опция позволяет пользоваться воротной конструкцией с максимальным комфортом.</p>
				    <p><strong>В ассортименте «Алютех» представлены 3 варианта калиток:</strong></p>
				    <div className="optins-wrapper">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/kalitka-01.jpg"} /></div>
				        <div>
				            <p><strong>Со стандартным порогом 145 мм</strong><br/>(для ворот с размерами ширины от 4,5 до 6 м)</p>
				            <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
				        </div>
				    </div>
				    <div className="optins-wrapper">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/kalitka-02.jpg"} /></div>
				        <div>
				            <p><strong>С низким порогом 100 мм</strong><br/>(для ворот с размерами ширины до 4,5 м)</p>
				            <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
				        </div>
				    </div>
				    <div className="optins-wrapper">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/kalitka-03.jpg"} /></div>
				        <div>
				            <p><strong>С плоским порогом 18 мм</strong><br/>(для ворот с размерами ширины до 5 м)</p>
				            <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
				        </div>
				    </div>
				    <p>Обрамление калитки выбирают из двух базовых цветов – коричневого и серебристого. Альтернативные цветовые решения всегда доступны в каталоге RAL. </p>
				    <hr/>
				    <h4 className="primary-colored-text">Встроенные окна</h4>
				    <div className="windows-wrapper">
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-01.jpg"}  alt=""/></div>
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-02.jpg"}  alt=""/></div>
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-03.jpg"}  alt=""/></div>
			            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/win-04.jpg"}  alt=""/></div>
				    </div>
				    <p>Сократить потребление электричества и дать доступ к дневному свету - вот какие задачи решат встроенные окна. Кроме того, такие гаражные ворота запомнят по их необычному оформлению.</p>
				    <hr/>
				    <h4 className="primary-colored-text">Замок</h4>
				    <div className="addit-info">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/lock-04.jpg"} /></div>
				        <div>
				            <p>Для запирания ворот в гараже без дополнительного входа необходим замок. В замке реализована возможность подключения устройства разблокировки электропривода.</p>
				        </div>
				    </div>    
				    <hr/>
				    <h4 className="primary-colored-text">Боковая дверь</h4>
				    <div>
				        <div className="windows-wrapper">
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-01.jpg"}  alt=""/></div>
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-02.jpg"}  alt=""/></div>
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-03.jpg"}  alt=""/></div>
				            <div><img src={CONST.ORIGIN + "/images/product/gate/trend/door-04.jpg"}  alt=""/></div>
				        </div>
				    </div>
				    <p>Стиль двери по умолчанию делают единым с гаражными воротами. За счет идентичного рисунка и цвета изделие отлично впишется в фасад любого здания. Так, одинаковые цвет и рисунок смотрятся как единое целое.</p>
					<hr/>
				    <h4 className="primary-colored-text">Разблокировка автоматики</h4>
				    <div className="addit-info">
				        <div><img src={CONST.ORIGIN + "/images/product/gate/trend/block-01.jpg"} /></div>
				        <div>
				            <p>Для автоматизированных ворот необходимо предусмотреть возможность аварийной разблокировки привода снаружи гаража, например, в случае отключения электроэнергии. Удобный и компактный механизм разблокировки обеспечит легкое переключение ворот с автоматического на ручной режим управления.</p>
				        </div>
				    </div>
			</section>
        </ExpansionPanel>
        </ExpansionList>
          <h4><b>Внешний вид и цветовая палитра гаражных ворот АЛЮТЕХ</b></h4>
          	<p>В оформлении секционных ворот мы также предоставляем заказчикам впечатляющий выбор. Основной элемент для экспериментов со стилем — полотно из сэндвич-панелей. Его внутренняя сторона по умолчанию будет бело-серой, близкой к RAL 9002 (возможна окраска и в другие цвета из палитры RAL). Для наружной стороны в палитре дизайн-решений есть до 40 вариантов: 5 рисунков полотна, от 2 до 10 стандартных цветов по шкале RAL, 3 оттенка «под дерево».</p>
          	<p>Для начала заказчик подбирает нужный рисунок поверхности секции. Это может быть универсальный для классической и современной архитектуры S-гофр. L-гофр и M-гофр отлично сочетаются с фасадами домов, возведенных в стиле «модерн». Редкое и особенно стильное украшение ворот — филенчатые секции формата «кассета». </p>
          	<p className="bold-header"><b>Виды рисунков сэндвич-панелей</b></p>
          	<div className="sandwich-images">
				<div className="col_l2 col_m3"> 
				  <p><b>S-гофр</b></p>
				 <img src={CONST.ORIGIN + '/upload/medialibrary/0cd/prom24.jpg'} title="S-гофр" alt="S-гофр" width="159" height="294"/> </div>
				<div className="col_l2 col_m3"> 
				  <p><b>M-гофр</b></p>
				 <img src={CONST.ORIGIN + '/upload/medialibrary/57b/prom25.jpg'} title="M-гофр" alt="M-гофр" width="159" height="294"/> </div>
				<div className="col_l2 col_m3"> 
				  <p><b>L-гофр</b></p>
				 <img src={CONST.ORIGIN + '/upload/medialibrary/85f/prom26.jpg'} title="L-гофр" alt="L-гофр" width="159" height="294"/>&nbsp; </div>
				 &nbsp; 
				<div className="col_l2 col_m3"> 
				  <p><b>Микроволна</b></p>
				 <img src={CONST.ORIGIN + '/upload/medialibrary/3ea/prom27.jpg'} title="Микроволна" alt="Микроволна" width="159" height="294"/>&nbsp; </div>
				<div className="col_l2 col_m3"> 
				  <p><b>Филенка</b></p>
				 <img src={CONST.ORIGIN + '/upload/medialibrary/51a/prom28.jpg'} title="Филенка" alt="Филенка" width="159" height="294"/> </div>
			</div>
			<p className="bold-header"><b>10 стандартных цветов гаражных ворот*</b></p>
			<div className="sandwich-images"> 
			  <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/fcf/color1.jpg'} title="RAL 9016" alt="RAL 9016" width="162" height="118"/> 
			    <p><b>RAL 9016</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/220/color2.jpg'} title="RAL 1015" alt="RAL 1015" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 1015</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/bea/color3.jpg'} title="RAL 9006" alt="RAL 9006" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 9006</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/6c5/color4.jpg'} title="RAL 6005" alt="RAL 6005" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 6005</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/463/color5.jpg'} title="RAL 3004" alt="RAL 3004" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 3004</b></p>
			   </div>
			 </div>
			 <div className="sandwich-images"> 
			  <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/d3d/color6.jpg'} title="RAL 5010" alt="RAL 5010" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 5010</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/ddf/color7.jpg'} title="RAL 8014" alt="RAL 8014" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 8014</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/195/color8.jpg'} title="RAL 8017" alt="RAL 8017" width="162" height="118"/>&nbsp; 
			    <p><b>RAL 8017</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/96c/color9.jpg'} title="RAL 7016" alt="RAL 7016" width="162" height="118"/>&nbsp;&nbsp; 
			    <p><b>RAL 7016</b></p>
			   </div>
			   <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/208/color10.jpg'} title="ADS 703" alt="ADS 703g" width="162" height="118"/>&nbsp;&nbsp; 
			    <p><b>ADS 703</b></p>
			   </div>
			 </div>
			 <p className="bold-header"><b>Ворота "под дерево"</b></p>
			 <div className="sandwich-images"> 
			  <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/a0d/black-sm.jpg'} alt="Тёмный дуб" title="Тёмный дуб" width="245" height="180"/> 
			    <p><b>Тёмный дуб</b></p>
			   </div>
			   <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/f20/chery-sm.jpg'} alt="Тёмная вишня" title="Тёмная вишня" width="245" height="180"/>&nbsp; 
			    <p><b>Тёмная вишня</b></p>
			   </div>
			   <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/a2b/golden-sm.jpg'} alt="Золотой дуб" title="Тёмная вишня" width="245" height="180"/> 
			    <p><b>Золотой дуб</b></p>
			   </div>
			 </div>
			 <p>Декоративную окраску для ворот выполняют на специализированном оборудовании в заводских условиях. Указанные цветовые решения ‒ RALxxx ‒ близки к карте RAL. В качестве дополнительной опции заказчик вправе выбрать окраску в другие цвета: всего более 230 вариантов. Для защиты окрашенного полотна от выгорания, выцветания и растрескивания используют полиуретановое покрытие ПУР-ПА. </p>
          	<p className="bold-header">Системы управления: Автоматические гаражные ворота</p>
          	<p>Открывайте и закрывайте подъемные гаражные ворота безопасно и с комфортом. Для этого есть два решения: ручное или автоматическое управление.<br/>
						   В первом случае к конструкции монтируют ручки, для тяжелых полотен — канат или цепной редуктор. Пользование воротами получается простым и удобным, ведь вес даже габаритных секций оптимально сбалансирован пружинами. </p>
				<div className="clear">
						<hr/>
					  <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN + '/upload/medialibrary/a85/image005.jpg'} title="Автоматические секционные гаражные ворота АЛЮТЕХ" alt="Автоматические секционные гаражные ворота АЛЮТЕХ"/></Paper></div>
					  <div className="col_l10 col_m10">Автоматика сделает работу ворот для гаража плавной, бережной и максимально комфортной для владельца. Все, что нужно для открывания / закрывания механизма — отправить нужную команду с пульта дистанционного управления, радиоклавиатуры или нажать на специальный выключатель. Местоположение пользователя может быть, как в автомобиле, так и на крыльце дома.</div>
				</div>		
				<div className="clear">
					   <hr/>
					   <div className="col_l12"><b>Автоматические ворота для гаража  — это конструкция с подключенным электроприводом одной из следующих торговых марок: </b><br/></div>
					   <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN + '/upload/medialibrary/de5/image006.png'} title="AN - Motors" alt="AN - Motors"/></Paper></div>
					   <div className="col_l10 col_m10"><p><b>AN - Motors</b>. Линейка приводов заслужила репутацию надежного и оптимального по цене решения.<br/> Подключать ее модели можно на гаражные ворота с площадью до 16 кв. м и высотой до 3,4 м. В каждом устройстве предусмотрели 2 пульта ДУ, функции моментальной остановки в случае наезда на препятствие, перехода на ручное управление и автозакрытия. C защитой от перепадов напряжения автоматика прослужит долгие годы. Гарантия составляет 2 года. </p></div>
				</div>
				<div className="clear">
					<hr/>
					<div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN + '/upload/medialibrary/40c/image007.png'} title="Comunello" alt="Comunello"/></Paper></div>
					<div className="col_l10 col_m10"><p><b>Comunello.</b> Итальянская автоматика с надежной электроникой и стильным дизайном. Устанавливать электроприводы также можно на изделия площадью до 16 кв. м и высотой до 3 м. Для тихой работы и жесткости конструкции в комплекте есть ременная рейка. Владельцу особенно пригодится расширенная настройка параметров движения полотна и рабочего усилия привода. Изделие защитили от перепадов напряжения и наделили гарантией в 3 года. Каждый привод комплектуют двумя пультами ДУ. </p></div>
				</div>
				<div className="clear">
				   <hr/>
				   <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN + '/upload/medialibrary/b32/image008.png'} title="Marantec" alt="Marantec"/></Paper></div>
				   <div className="col_l10 col_m10"><p><b>Marantec.</b>  В немецком подходе к автоматизации секционных ворот много удачных решений. Среди них есть бюджетные, функциональные и премиум-модели. Например, функциональные приводы доступны в скоростной и высокоинтенсивной версии. Максимальная площадь полотна ворот для установки автоматики Marantec — до 9 кв. м для серии Comfort 50/60, до 15 кв. м для серии Comfort 270/280 и высотой до 2,4 м для всех моделей. В комплектации 1 пульт ДУ и гарантия составляет 5 лет.</p></div>
				</div>
			</div>;


<div className="description"><p>Каждый год более 200 000 владельцев помещений закрывают проемы при помощи секционных ворот . Среди объектов установки есть и гаражи в загородных домах и дачах, и подземные стоянки, и коттеджи. По мнению заказчиков, ворота от ведущего производителя рынка из Беларуси — однозначный положительный ответ на вопросы хранения авто и имущества, безопасной и удобной работы, теплоизоляции.</p>
</div>