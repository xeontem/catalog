import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import ProfileTypes from '../../../components/ProfileTypes/ProfileTypes';
// import img from '../../img/0-protrend.jpg';
import {CONST} from '../../constants';
import './vezdnye_vorota.css';

export const vezdnye_vorota_short = 'Роллетные системы (другими словами - рольставни или роллеты) устанавливаются на дверные или оконные проемы и обеспечивают надежную защиту помещения от посторонних глаз, шума, погодных условий и взлома.';

// const CONST.ORIGIN = 'http://www.alutech-group.com/upload/iblock/809/0-protrend.jpg';
const CustomFooter = () => (
  <footer style={{ padding: 24 }}>
    <p>This is some custom stuff I want in the footer.</p>
  </footer>
);

const style = CONST.mobile ? {width: '100%'} : {};
const listClass = CONST.mobile ? 'expansion-list-mobile' : '';

export const vezdnye_vorota_extended =
			<div id="vezdnye_vorota">
				<h3>Въездные ворота</h3>
        <Paper className="image-placeholder"><img src={CONST.ORIGIN+'/upload/iblock/d4a/07.jpg'} alt="image" role="presentation" /></Paper>
        <p>Система комплектующих ALUTECH серии ADS400 применяется для изготовления въездных конструкций (откатных, распашных ворот и калиток), а также секций ограждений и предназначается для установки на частных и промышленных объектах.</p>
        <p>Мы предлагаем высококачественные конструкции ворот серии ADS400 для различных ценовых сегментов.</p>
        <ul className="aaddss">
          <li><b>ELEGANT</b> – более экономичный  вариант конструкции распашных и откатных ворот, изготовленных на базе профилей  шириной 68 мм. Модель <em>Elegant</em> позволяет изготавливать:
            <ol>
          <li>откатные ворота с максимальными размерами 4250×2460 мм;  </li>
          <li>распашные ворота с максимальными размерами 4000×2585 мм; </li>
        </ol></li></ul>
        <ul className="aaddss">
          <li><b>COMFORT</b> – конструкции распашных и откатных ворот, изготовленных на базе стандартных профилей шириной 96 мм. Модель Comfort позволяет изготавливать ворота с максимальными размерами 5000×3210 мм.</li>
        </ul>
				<h3>Виды гаражных ворот</h3>
				<p>Серии <strong className="aluteh-blue-text">Trend</strong> и <strong className="aluteh-blue-text">Classic</strong> предназначены для установки и пользования в частном сегменте построек. Все, что нужно для грамотного выбора конкретной серии ворот — ориентировка на такие критерии: климатический регион установки, наличие отопления в гараже, уровень влажности и ценовой сегмент. </p>
        <ExpansionList className={'md-cell md-cell--12 clear ' + listClass}>
          <ExpansionPanel headerClassName="panel-header" label="Откатные ворота" style={style} footer={null}>
            <section className="icons-wrapper">
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/ff4/otk-1.png"}/></figure>
                <h4>Минимум 25 000 циклов открывания-закрывания<br/></h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/9dd/otk-2.png"}/></figure>
                <h4>Эстетика. Современный дизайн</h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/b47/otk-3.png"}/></figure>
                <h4>Передовые решения для въездных ворот</h4>
              </div>
            </section>
            <ul>
              <li>Более 20 вариантов заполнения полотна<br/></li>
              <li>Полимерное покрытие основных элементов<br/></li>
              <li>Универсальный алюминиевый профиль шины, совмещенный с профилем рамы, обеспечивает высокую жесткость, прочность и надежность конструкции сдвижных ворот<br/></li>
              <li>Минимальный рабочий ресурс 25 000 циклов открытия и закрытия<br/></li>
              <li>Скрытый крепеж гарантирует высокую степень защиты<br/></li>
              <li>Бесшумная работа за счет опорных роликов из стеклонаполненного полиамида и нейлоновой зубчатой рейки<br/></li>
              <li>Ремонтопригодная конструкция для устранения повреждений или замены заполнения</li>
            </ul>
            <section>
              <h4 className="primary-colored-text">Назначение и применение автоматических откатных ворот серии ADS400</h4>
              <p>Мы усовершенствовали устройство въездных ворот и создали продукт нового поколения – откатные автоматические ворота серии ADS400, которые займут достойное место как на даче, так и на промышленных объектах.</p>
              <p>Въездные ворота «Алютех» сочетают в себе традиционно высокое качество, современные технологии, долговечность и эстетичный дизайн. Улучшенный вариант сдвижных ворот привлекает доступной ценой, сроком эксплуатации не менее 15 лет, возможностью установки более 20 вариантов заполнений полотна ворот различными материалами — алюминиевым профилем сплошного или разреженного заполнения, сэндвич-панелью толщиной 45 мм, роллетным профилем AG/77, листовым материалом (профлистом, деревянной доской), высоким качеством комплектующих и ремонтопригодностью.</p>
              <p>Раздвижные автоматические ворота новой серии ADS400 представлены в таком широком ассортименте, что потребителю не составит труда, исходя из своих запросов и возможностей, выбрать оптимальный вариант конструкции ворот.</p>
            </section>
            <section>
              <h4 className="primary-colored-text">Преимущества откатных ворот</h4>
              <p>Мы усовершенствовали устройство въездных ворот и создали продукт нового поколения – откатные автоматические ворота серии ADS400, которые займут достойное место как на даче, так и на промышленных объектах.</p>
              <p>Въездные ворота «Алютех» сочетают в себе традиционно высокое качество, современные технологии, долговечность и эстетичный дизайн. Улучшенный вариант сдвижных ворот привлекает доступной ценой, сроком эксплуатации не менее 15 лет, возможностью установки более 20 вариантов заполнений полотна ворот различными материалами — алюминиевым профилем сплошного или разреженного заполнения, сэндвич-панелью толщиной 45 мм, роллетным профилем AG/77, листовым материалом (профлистом, деревянной доской), высоким качеством комплектующих и ремонтопригодностью.</p>
              <p>Раздвижные автоматические ворота новой серии ADS400 представлены в таком широком ассортименте, что потребителю не составит труда, исходя из своих запросов и возможностей, выбрать оптимальный вариант конструкции ворот.</p>
              <p>Современная и постоянная система контроля на каждом из этапов разработки и  производства продукта обеспечивает высокое качество и длительный срок  эксплуатации продукции. </p>
            </section>
            <section>
              <div className="clear">
                  <hr/>
                  <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_4_thumb.jpg'} title="Автоматические секционные гаражные ворота АЛЮТЕХ" alt="Автоматические секционные гаражные ворота АЛЮТЕХ"/></Paper></div>
                  <div className="col_l10 col_m10">Конструкция профилей серии ADS400  предусматривает возможность установки более 20 вариантов внутреннего или  накладного заполнений полотна автоматических сдвижных ворот. Использование  различных заполнений позволяет воплотить в готовых изделиях различные по  стоимости и исполнению конструкции — от элитных до экономичных.</div>
              </div>    
              <div className="clear">
                   <hr/>
                   <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_5_thumb.jpg'} title="AN - Motors" alt="AN - Motors"/></Paper></div>
                   <div className="col_l10 col_m10"><p>Все основные элементы конструкции откатных ворот  изготавливаются из алюминиевого профиля с полимерным покрытием, которое надежно  защищает полотно ворот от неблагоприятного воздействия атмосферы, исключает  коррозию и увеличивает срок эксплуатации изделий.</p></div>
              </div>
              <div className="clear">
                <hr/>
                <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_6_thumb.jpg'} title="Comunello" alt="Comunello"/></Paper></div>
                <div className="col_l10 col_m10"><p>Универсальный алюминиевый профиль шины 96х177  мм, совмещенный с профилем рамы, обеспечивает высокую жесткость, прочность и  надежность конструкции сдвижных ворот. Минимальный рабочий ресурс ворот составляет 25  000 циклов открывания и закрывания ворот, что ориентировочно соответствует 15  годам эксплуатации откатных ворот (по четыре открывания и закрывания ворот  ежедневно на протяжении всего периода). Бесшумность работы раздвижных ворот  обеспечивается за счет использования опор с роликами из стеклонаполненного  полиамида и нейлоновой зубчатой рейки.</p></div>
              </div>
              <div className="clear">
                 <hr/>
                 <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_7_thumb.jpg'} title="Marantec" alt="Marantec"/></Paper></div>
                 <div className="col_l10 col_m10"><p> Конструкция ворот «АЛЮТЕХ» предусматривает  возможность быстро устранять различного рода повреждения или менять один вид  заполнения на другой, не прибегая к демонтажу конструкции. Скрытый крепеж гарантирует более высокую степень  защиты от несанкционированного доступа. Отсутствие видимых элементов крепежа  обеспечивает более эстетичный внешний вид конструкций.</p></div>
              </div>
              <div className="clear"><hr/></div>
            </section>
            <section>
              <h4 className="primary-colored-text">Типы заполнений ворот серии ADS400</h4>
              <p>Ворота серии ADS400 в равной степени будут соответствовать архитектуре как современного дома в стиле <em>hi-tech</em>, так и коттеджа в классическом исполнении.</p>
              <p>Благодаря различным вариантам рисунков (микроволна, горизонтальный гофр, филенка) и цветам панелей въездные ворота идеально сочетаются с любым отделочным материалом.</p>
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
            
            <section>
              <p>Ворота из  сэндвич-панелей, имитирующих текстуру древесины (золотой дуб, темный дуб,  вишня), обладают всеми преимуществами стальных ворот и придают коттеджу  элементы престижа и индивидуальности.</p>
            </section>

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

            <section>
              <h4 className="primary-colored-text">Цветовая  гамма алюминиевых профилей</h4>
              <p>Алюминиевые  профили имеют глянцевую структуру поверхности и представлены в различных  цветах: от классических белого и коричневого до оригинальных – красный рубин,  зеленый мох, серебристый металлик, шоколадный.</p>
              <div className="sandwich-images"> 
                <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/fcf/color1.jpg'} title="RAL 9016" alt="RAL 9016" width="162" height="118"/> 
                  <p><b>RAL 9016</b></p>
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
                <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/d3d/color6.jpg'} title="RAL 5010" alt="RAL 5010" width="162" height="118"/>&nbsp; 
                  <p><b>RAL 5010</b></p>
                </div>
                <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/ddf/color7.jpg'} title="RAL 8014" alt="RAL 8014" width="162" height="118"/>&nbsp; 
                  <p><b>RAL 8014</b></p>
                </div>
                <div className="col_l2 col_m3 col_pad"> <img src={CONST.ORIGIN + '/upload/medialibrary/195/color8.jpg'} title="RAL 8017" alt="RAL 8017" width="162" height="118"/>&nbsp; 
                  <p><b>RAL 8017</b></p>
                </div>
              </div>
            </section>
            <section>
              <h4 className="primary-colored-text">Конструкция откатных самонесущих ворот</h4>
              <p>Откатные  ворота представляют собой самонесущую конструкцию, в которой алюминиевая рама  ворот с заполнением перемещается по роликовым опорам, установленным на  фундаменте вне зоны проезда ворот (за проемом). </p>
              <img className="center-image" src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_11.jpg'}/>
              <div className="sandwich-images">
                <ol start="1">
                  <li>Столб проема</li>
                  <li>Забор</li>
                  <li>Полотно</li>
                  <li>Улавливатель верхний</li>
                </ol>
                <ol start="5">
                  <li>Улавливатель нижний</li>
                  <li>Кронштейн крепления</li>
                  <li>Опорная рама</li>
                  <li>Столб удерживающий с роликами</li>
                </ol>
                <ol start="9">
                  <li>Столб дополнительный с роликами</li>
                  <li>Раскос</li>
                  <li>Двигатель</li>
                  <li>Засов</li>
                </ol>
              </div>
              <p>Правильный  монтаж раздвижных ворот позволяет без труда открывать и закрывать ворота  вручную. Для запирания используется засов, который входит в базовую  комплектацию. </p>
            </section>
            <section>
              <h4 className="primary-colored-text">Дополнительная комплектация автоматических въездных  ворот</h4>
              <p>Сдвижные  ворота производства «АЛЮТЕХ» могут комплектоваться следующими элементами:</p>
              <ul>
                <li>рамой опорной для бетонирования; </li>
                <li>столбом поддерживающим и раскосом; </li>
                <li>рейкой зубчатой. </li>
              </ul>
              <p>Для  дополнительного комфорта откатные ворота для дачи и промышленных объектов можно  дополнить отдельно стоящей калиткой, которая обеспечит удобный проход на  территорию.</p>
            </section>
          </section>
          </ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Распашные ворота" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Калитка" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Секции ограждения" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
        </ExpansionList>
</div>