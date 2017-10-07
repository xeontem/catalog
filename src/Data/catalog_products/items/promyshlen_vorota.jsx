import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import ProfileTypes from '../../../components/ProfileTypes/ProfileTypes';
// import img from '../../img/0-protrend.jpg';
import {CONST} from '../../constants';
import './promyshlen_vorota.css';

export const promyshlen_vorota_short = 'Роллетные системы (другими словами - рольставни или роллеты) устанавливаются на дверные или оконные проемы и обеспечивают надежную защиту помещения от посторонних глаз, шума, погодных условий и взлома.';

const url = 'http://www.alutech-group.com/upload/iblock/809/0-protrend.jpg';
const CustomFooter = () => (
  <footer style={{ padding: 24 }}>
    <p>This is some custom stuff I want in the footer.</p>
  </footer>
);

const style = CONST.mobile ? {width: '100%'} : {};
const listClass = CONST.mobile ? 'expansion-list-mobile' : '';
const construct_preview_image = CONST.mobile ? "center-image-mobile" : "center-image";

export const promyshlen_vorota_extended =
			<div id="promyshlen_vorota">
				<h3>Промышленные ворота</h3>
        <Paper className="image-placeholder"><img src="/static/media/promvorot.76c2d760.jpg" alt="image" role="presentation" /></Paper>
        <p>Для возможности оптимального выбора промышленных секционных ворот и последующей установки с учетом климатических условий региона и особенностей помещения, мы предлагаем две серии промышленных ворот ProPlus и ProTrend.</p>
        <p>Для возможности оптимального выбора промышленных секционных ворот и последующей установки с учетом климатических условий региона и особенностей помещения, мы предлагаем две серии промышленных ворот ProPlus и ProTrend.</p>
				<h3>Виды гаражных ворот</h3>
				<p>Серии <strong className="aluteh-blue-text">Trend</strong> и <strong className="aluteh-blue-text">Classic</strong> предназначены для установки и пользования в частном сегменте построек. Все, что нужно для грамотного выбора конкретной серии ворот — ориентировка на такие критерии: климатический регион установки, наличие отопления в гараже, уровень влажности и ценовой сегмент. </p>
        <ExpansionList className={'md-cell md-cell--12 clear ' + listClass}>
          <ExpansionPanel headerClassName="panel-header" label="Промышленные ворота PROTREND" style={style} footer={null}>
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
              <li>Сэндвич-панель толщиной 40 мм<br/></li>
              <li>Детали из оцинкованной стали<br/></li>
              <li>Базовый ресурс пружин до 25 000 циклов «подъема-опускания»<br/></li>
              <li>Расширенный ресурс пружин до 100 000 циклов «подъема-опускания»<br/></li>
              <li>10 типов монтажа<br/></li>
              <li>Максимальный размер ворот 7000х6000 мм<br/></li>
              <li>Любой размер ворот с шагом 5 мм<br/></li>
              <li>Системы безопасности в базовом комплекте ворот</li>
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
              <p className="bold-header">Для ворот промышленного типа ProTrend разработали несколько практичных опций:</p>
              <hr/>
              <h4 className="primary-colored-text">Калитка в полотне</h4>
              <p>Этот вид калитки заказывают, если нужен дополнительный вход в помещение. Ее использование позволяет не только попасть в помещение без открывания ворот, но и сэкономить их ресурс. Опция позволяет пользоваться воротной конструкцией с максимальным комфортом.</p>
              <p><strong>В ассортименте «Алютех» представлены 3 варианта калиток:</strong></p>
              <div className="optins-wrapper">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/kalitka-04.jpg"} /></div>
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
                    <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/win-02.jpg"}  alt=""/></div>
                    <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/win-03.jpg"}  alt=""/></div>
                    <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/win-04.jpg"}  alt=""/></div>
              </div>
              <p>Применение окон в воротах позволяет экономить на освещении производственных цехов. В ассортименте имеются различные виды остекления промышленных ворот.</p>
              <hr/>
              <h4 className="primary-colored-text">Замок</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/lock-pro.jpg"} /></div>
                  <div>
                      <p>Для помещений без дополнительного входа предлагается ригельный замок. Он позволяет открывать и закрывать ворота как изнутри, так и снаружи.</p>
                  </div>
              </div>
              <hr/>
              <h4 className="primary-colored-text">Боковая дверь</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/door-pro.jpg"} /></div>
                  <div>
                     <p>Боковая дверь и секционные ворота выполнены в едином стиле и гармонично вписываются в фасад здания, идеально дополняя друг друга. Калитка изготавливается из панелей с таким же рисунком и цветом, как и секционные ворота.</p>
                  </div>
              </div>
              <hr/>
              <h4 className="primary-colored-text">Панорамное остекление</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/panoram-01.jpg"} /></div>
                  <div>
                      <p>Одна или несколько панорамных панелей – и новый облик ваших ворот готов. По сравнению со встроенными окнами, вы получите еще больший обзор и освещение.</p>
                  </div>
              </div>
              <hr/>
              <h4 className="primary-colored-text">Защита от вандалов</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/domkrat-01.jpg"} /></div>
                  <div>
                      <p>С устройством от поддомкрачивания ворота защищены от взлома. Устройство заблокирует полотно при его несанкционированном подъеме.</p>
                  </div>
              </div>
            </section>
          </ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Промышленные ворота PROPLUS" style={style} footer={null}>
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
              <p className="bold-header">Для ворот промышленного типа ProPlus разработали несколько практичных опций:</p>
              <hr/>
              <h4 className="primary-colored-text">Калитка в полотне</h4>
              <p>Этот вид калитки заказывают, если нужен дополнительный вход в помещение. Ее использование позволяет не только попасть в помещение без открывания ворот, но и сэкономить их ресурс. Опция позволяет пользоваться воротной конструкцией с максимальным комфортом.</p>
              <p><strong>В ассортименте «Алютех» представлены 3 варианта калиток:</strong></p>
              <div className="optins-wrapper">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/kalitka-04.jpg"} /></div>
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
                    <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/win-02.jpg"}  alt=""/></div>
                    <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/win-03.jpg"}  alt=""/></div>
                    <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/win-04.jpg"}  alt=""/></div>
              </div>
              <p>Применение окон в воротах позволяет экономить на освещении производственных цехов. В ассортименте имеются различные виды остекления промышленных ворот.</p>
              <hr/>
              <h4 className="primary-colored-text">Замок</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/lock-pro.jpg"} /></div>
                  <div>
                      <p>Для помещений без дополнительного входа предлагается ригельный замок. Он позволяет открывать и закрывать ворота как изнутри, так и снаружи.</p>
                  </div>
              </div>
              <hr/>
              <h4 className="primary-colored-text">Боковая дверь</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/door-pro.jpg"} /></div>
                  <div>
                     <p>Боковая дверь и секционные ворота выполнены в едином стиле и гармонично вписываются в фасад здания, идеально дополняя друг друга. Калитка изготавливается из панелей с таким же рисунком и цветом, как и секционные ворота.</p>
                  </div>
              </div>
              <hr/>
              <h4 className="primary-colored-text">Панорамное остекление</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/panoram-01.jpg"} /></div>
                  <div>
                      <p>Одна или несколько панорамных панелей – и новый облик ваших ворот готов. По сравнению со встроенными окнами, вы получите еще больший обзор и освещение.</p>
                  </div>
              </div>
              <hr/>
              <h4 className="primary-colored-text">Защита от вандалов</h4>
              <div className="addit-info">
                  <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/domkrat-01.jpg"} /></div>
                  <div>
                      <p>С устройством от поддомкрачивания ворота защищены от взлома. Устройство заблокирует полотно при его несанкционированном подъеме.</p>
                  </div>
              </div>
            </section>
          </ExpansionPanel>
        </ExpansionList>
</div>