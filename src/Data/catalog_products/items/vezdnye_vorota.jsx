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
const construct_preview_image = CONST.mobile ? "center-image-mobile" : "center-image";
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
                <img className={construct_preview_image} src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_11.jpg'}/>
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
          <ExpansionPanel headerClassName="panel-header" label="Распашные ворота" style={style} footer={null}>
            <section className="icons-wrapper">
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/b88/rasp-1.png"}/></figure>
                <h4>Надежность эксплуатации<br/></h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/4e4/rasp-2.png"}/></figure>
                <h4>Многообразие конструктивных решений</h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/1a4/rasp-3.png"}/></figure>
                <h4>Быстрая сборка и монтаж</h4>
              </div>
            </section>
            <ul>
              <li>Более 20 вариантов конструктивных решений распашных ворот, различных по стоимости и исполнению<br/></li>
              <li>Основные элементы конструкции изготавливаются из алюминиевого профиля с полимерным покрытием<br/></li>
              <li>Высокая надежность соединений, исключающая провисание створок в процессе эксплуатации<br/></li>
              <li>Надежные и качественные трехсекционные накладные петели Fapim<br/></li>
              <li>Скрытый крепеж гарантирует высокую степень защиты от несанкционированного доступа<br/></li>
              <li>Легко разборная конструкция для устранения повреждений или замены заполнения</li>
            </ul>
            <section>
              <h4 className="primary-colored-text">Назначение и применение</h4>
              <Paper className="image-placeholder"><img src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_22.jpg'} alt="image" role="presentation" /></Paper>
              <p>Распашные ворота представляют собой две створки, закрепленные к столбам  проема с помощью трех секционных петель. Створки ворот состоят из рам,  собранных из алюминиевых профилей, в которых установлено заполнение. Заполнение  может располагаться как внутри рамы (встроенный тип монтажа), так и снаружи  (накладной тип монтажа). По желанию заказчика можно изготовить полотно  распашных ворот со сплошным, разреженным или комбинированным заполнением.  Заполнения можно установить горизонтально или вертикально.</p>
              <p>Для обеспечения дополнительной жесткости и возможности дальнейшей автоматизации  устанавливается профиль импоста, который входит в стандартную комплектацию.</p>
            </section>
            <section>
              <h4 className="primary-colored-text">Преимущества распашных ворот</h4>
              <p>Высокая технологичность системы, широкая цветовая гамма, возможность  установки различных по структуре, материалу и исполнению заполнений и их комбинаций  позволяют создать и предложить действительно уникальные конструкции  автоматических распашных ворот.</p>
              <ul>
                <li>Уникальная конфигурация профилей серии ADS400  позволяет предложить конечному потребителю более 20 вариантов конструктивных  решений распашных ворот, различных по стоимости и исполнению.</li>
                <li>Все основные элементы конструкции распашных  ворот для дачи изготавливаются из алюминиевого профиля с полимерным покрытием,  что надежно защищает полотно ворот от неблагоприятного воздействия атмосферы,  исключает коррозию и увеличивает срок эксплуатации изделий.</li>
                <li>Профили рамы обрабатываются под углом 45˚. При  сборке угловых соединений используется кнопочный стягивающий уголок и  алюминиевый угловой соединитель. Все это обеспечивает высокую надежность  соединения и исключает возможное провисание створок в процессе эксплуатации  распашных ворот.</li>
                <li>Створки распашных ворот фиксируются с помощью  надежных и качественных трехсекционных накладных петель <em>Fapim</em>, которые  исключают провисание створок в процессе использования готового изделия.</li>
                <li>Скрытый крепеж гарантирует более высокую степень  защиты от несанкционированного доступа. Отсутствие видимых элементов крепежа  обеспечивает эстетичный внешний вид конструкций.</li>
                <li>Конструкция ворот «АЛЮТЕХ» предусматривает  возможность быстро устранять различного рода повреждения или менять один вид  заполнения на другой, не прибегая к демонтажу конструкции.</li>
              </ul>
              <div className="sandwich-images"> 
                <div classassName="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/vezdnye-vorota/pic_23_thumb.jpg'} alt="petlya" title="Тёмный дуб" width="245" height="180"/> 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/vezdnye-vorota/pic_24_thumb.jpg'} alt="ugolok" title="Тёмная вишня" width="245" height="180"/>&nbsp; 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/vezdnye-vorota/pic_25_thumb.jpg'} alt="dveri" title="Тёмная вишня" width="245" height="180"/> 
                </div>
              </div>
            </section>
            <section>
              <h4 className="primary-colored-text">Типы заполнений распашных ворот</h4>
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
              <p>Конструкция автоматических распашных ворот «АЛЮТЕХ» отличается надежностью и долговечностью, высокими прочностными характеристиками профилей и качественными комплектующими для распашных ворот.</p>
              <img className={construct_preview_image} src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_26.jpg'}/>
              <div className="sandwich-images">
                <ol start="1">
                  <li>Столб проема</li>
                  <li>Забор</li>
                  <li>Створка ворот</li>
                  <li>Створка ворот</li>
                </ol>
                <ol start="5">
                  <li>Упор боковой</li>
                  <li>Упор центральный</li>
                  <li>Кронштейн крепления электропривода к створке</li>
                </ol>
                <ol start="9">
                  <li>Электропривод</li>
                  <li>Засов</li>
                  <li>Кронштейн крепления электропривода к столбу проема</li>
                </ol>
              </div>
            </section>
          </section>
          </ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Калитка" style={style} footer={null}>
            <section className="icons-wrapper">
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/e25/kali-1.png"}/></figure>
                <h4>Удобство и комфорт<br/></h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/9dd/kali-2.png"}/></figure>
                <h4>Минимум 15 лет эксплуатации</h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/91e/kali-3.png"}/></figure>
                <h4>Широкая цветовая  гамма</h4>
              </div>
            </section>
            <ul>
              <li>Полимерное покрытие основных элементов<br/></li>
              <li>Высокая надежность соединений, исключающая провисание створок в процессе эксплуатации<br/></li>
              <li>Различные виды и комбинации заполнения<br/></li>
              <li>Надежные и качественные трехсекционные накладные петели Fapim<br/></li>
              <li>Скрытый крепеж гарантирует высокую степень защиты от несанкционированного доступа<br/></li>
              <li>Разделительный профиль позволяет монтаж комбинированного заполнения в одной раме<br/></li>
              <li>Легко разборная конструкция для устранения повреждений или замены заполнения</li>
            </ul>
            <section>
              <h4 className="primary-colored-text">Преимущества калитки</h4>
              <Paper className="image-placeholder"><img src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_29_thumb.jpg'} alt="image" role="presentation" /></Paper>
              <p>Конструкция калиточных профилей серии ADS400 предусматривает возможность  исполнения калитки в едином стиле с конструкцией откатных и распашных ворот.  Конфигурация профилей системы позволяет изготовить конструкции с различными  типами открывания и монтажа.</p>
              <ul>
                <li>Все основные элементы конструкции  изготавливаются из алюминиевого профиля, окрашенного с помощью полимерного  покрытия, что надежно защищает полотно ворот от неблагоприятного воздействия  атмосферы, исключает коррозию и увеличивает срок эксплуатации изделий.</li>
                <li>Угловые соединения собираются при помощи  стягивающего уголка и алюминиевого углового соединителя. Все это обеспечивает  высокую надежность соединения и исключает провисание калитки в процессе  эксплуатации ворот.</li>
                <li>Высокая технологичность системы, возможность  установки различных видов заполнений и их комбинаций позволяет предложить  различные по стоимости и исполнению конструкцию калитки.</li>
                <li>Створки калитки фиксируются с помощью надежных и  качественных трехсекционных накладных петель <em>Fapim</em>, которые исключают  провисание створок в процессе использования готового изделия.</li>
                <li>Скрытый крепеж гарантирует более высокую степень  защиты от несанкционированного доступа. Отсутствие видимых элементов крепежа  обеспечивает эстетичный внешний вид конструкций.</li>
                <li>Установка разделительного профиля позволяет  осуществить монтаж комбинированного заполнения в одной раме.</li>
                <li>Конструкция калитки «АЛЮТЕХ» предусматривает  возможность быстро устранять различного рода повреждения или заменять один вид  заполнения на другой, не прибегая к демонтажу конструкции. </li>
              </ul>
              <h4 className="primary-colored-text">Назначение и применение калитки</h4>
              <p>Петли и ручки для калиток распашных ворот доступны в 6 цветах: RAL8014, RAL3004, RAL9006, RAL6005, RAL9016, RAL8017. Фурнитура вышеперечисленных цветов поставляется клиентам без дополнительной платы.
                 Благодаря разнообразным цветовым решениям петель и ручек для калиток и ворот распашного типа можно добиться стилистического единства всего объекта!</p>
              <div className="sandwich-images"> 
                <div classassName="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/vezdnye-vorota/pic_33_thumb.jpg '} alt="petlya" title="Тёмный дуб" width="245" height="180"/> 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/vezdnye-vorota/pic_34_thumb.jpg'} alt="ugolok" title="Тёмная вишня" width="245" height="180"/>&nbsp; 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/vezdnye-vorota/pic_35_thumb.jpg'} alt="dveri" title="Тёмная вишня" width="245" height="180"/> 
                </div>
              </div>
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
                <p>В качестве полезной опции в калитку может быть установлена электрозащелка,  которую можно устанавливать совместно с домофонами и другими системами контроля  доступа. Установка производится в заранее подготовленный паз ответной планки  калитки.</p>
                <p>Калитка во въездных воротах может быть дополнена: </p>
                <ol>
                  <li>Доводчиком рычажным. Данную опцию можно устанавливать на калитки ADS400 всех размеров; он предназначен для работы в особо холодных условиях (до - 420C). Благодаря доводчику можно контролировать необходимое для закрытия усилие. </li>
                  <li>Электрозащелкой. Работу элемента легко совместить с системами контроля доступа (кодовые панели, бесконтактные карты, домофоны и др). Элемент устанавливают в предварительно подготовленный паз ответной планки калитки.</li>
                </ol>
                <p>Калитку возможно установить и во въездные ворота серии «Comfort».</p>
                <p>Кроме того, встроенная калитка в отличие от отдельной обойдется дешевле  своему будущему владельцу. Срок пользования воротной конструкцией ADS400 с  такой калиткой будет существенно увеличен. </p>
                <img className={construct_preview_image} src={CONST.ORIGIN+'/images/product/gate/vezdnye-vorota/pic_38.jpg'}/>
                <p>Преимущества встроенной калитки:</p>
                <ul>
                  <li>Прочная и жесткая конструкция;</li>
                  <li>Все элементы крепежа надежно скрыты от  посторонних глаз;</li>
                  <li>Общая стилистика с въездными воротами;</li>
                  <li>Повышенная стойкость к коррозии и надежная  работа на долгие годы;</li>
                  <li>Широкий проход (900 мм);</li>
                  <li>Экономия бюджета;</li>
                  <li>Максимальный комфорт.</li>
                </ul>
                <p>Для установки калитки перекрываемый проем не должен превышать следующих  значений: </p>
                <ul>
                  <li>высота – от 1835 до 2210 мм</li>
                  <li>ширина – 3500 до 4250 мм.</li>
                </ul>
              </section>
            </section>
          </ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Секции ограждения" style={style} footer={null}>
            <section className="icons-wrapper">
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/c28/ogr-1.png"}/></figure>
                <h4>Комплексное решение<br/></h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/d0b/ogr-2.png"}/></figure>
                <h4>Высококачественное покрытие</h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/720/ogr-3.png"}/></figure>
                <h4>Передовые решения для въездных ворот</h4>
              </div>
            </section>
            <ul>
              <li>Возможность изготовления в едином стиле с воротами серии ADS400<br/></li>
              <li>Различные типы монтажа (накладной, встроенный)<br/></li>
              <li>Широкий ассортимент заполнений (сэндвич-панель, AG77, алюминиевый профиль шириной 87, 82 и 37 мм)<br/></li>
              <li>Ремонтопригодность<br/></li>
              <li>Высокая надежность<br/></li>
              <li>Простой монтаж</li>
            </ul>
            <section>
              <h4 className="primary-colored-text">Преимущества калитки</h4>
              <p>Для изготовления секций ограждений используется  алюминиевый профиль шириной 68 мм, позволяющий  собрать прочную и надежную конструкцию, которая позволяет  изготавливать секции с максимальными размерами 5000×3210 мм.</p>
              <p>Дизайн  ограждений ADS400 гармонично сочетается с внешним видом въездных ворот,  позволяя создать единство стиля.</p>
              <p>Секции заборные серии ADS400 сочетают в себе  традиционно высокое качество, современные технологии, долговечность,  современный дизайн и гарантируют следующие преимущества.</p>
              <ul>
                <li>Возможность изготовления в едином стиле с  воротами серии ADS400</li>
                <li>Различные типы монтажа (накладной, встроенный)</li>
                <li>Широкий ассортимент заполнений  (сэндвич-панель, AG77, алюминиевый профиль шириной 87, 82 и 37 мм)</li>
                <li>Ремонтопригодность</li>
                <li>Высокая надежность</li>
                <li>Простой монтаж</li>
            </ul>
            <p>Конструкция  ограждений предусматривает накладной и встроенный варианты установки. Для более  простого монтажа в базовый комплект входят кронштейны крепления. </p>
            <p>Стандартная палитра рамы представлена 7  вариантами: RAL9016 белый, RAL8014 коричневый, RAL8017 шоколадный, RAL3004  красный рубин, RAL5010 синий, RAL6005 зеленый мох, RAL9006 серебристый  металлик.</p>
            <p>По желанию секции ограждения серии ADS400 можно окрасить в любой цвет по шкале RAL (на дополнительных условиях).</p>
            <p>Разнообразие цветовой гаммы заполнения  позволит с легкостью подобрать цвет конструкции заборных секций, въездных ворот  и калитки, а также создать единство архитектурного стиля вашего дома и&nbsp;окружающей  его оригинально оформленной территории.<strong></strong></p>
            <p>Конструкция  секций ограждений предусматривает возможность изготовления полотна от  стандартных вариантов до экономичных. В алюминиевую раму можно установить, сэндвич-панель, профиль роликовой прокатки AG/77, алюминиевый профиль, профилированный лист, деревянную доску или любой другой листовой материал.</p>
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
            </section>
          </ExpansionPanel>
        </ExpansionList>
</div>