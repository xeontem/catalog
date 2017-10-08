import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import ProfileTypes from '../../../components/ProfileTypes/ProfileTypes';
// import img from '../../img/0-protrend.jpg';
import {CONST} from '../../constants';
import './panoramnye_vorota.css';
import panoramImage from '../../img/panoram.jpg'; 

// const CONST.ORIGIN = 'http://www.alutech-group.com/upload/iblock/809/0-protrend.jpg';
const CustomFooter = () => (
  <footer style={{ padding: 24 }}>
    <p>This is some custom stuff I want in the footer.</p>
  </footer>
);

const style = CONST.mobile ? {width: '100%'} : {};
const listClass = CONST.mobile ? 'expansion-list-mobile' : '';
const construct_preview_image = CONST.mobile ? "center-image-mobile" : "center-image";

export const panoramnye_vorota_short = 'В панорамных воротах воплощены все важнейшие качества и новейшие тенденции, представленные на рынке секционных ворот: превосходная функциональность, широкий размерный ряд, разнообразная цветовая гамма.';
export const panoramnye_vorota_extended =
			<div id="panoramnye_vorota">
				<h3>Панорамные ворота</h3>
        <Paper className="image-placeholder"><img src={panoramImage} alt="panoramnye vorota" role="presentation" /></Paper>
        <p>В панорамных воротах воплощены все важнейшие качества и новейшие тенденции, представленные на рынке секционных ворот: превосходная функциональность, широкий размерный ряд, разнообразная цветовая гамма. Изящная алюминиевая конструкция с максимальным остеклением отвечает современным требованиям к дизайнерскому оформлению, обеспечивая при этом хорошую тепло- и звукоизоляцию. Панорамные ворота являются идеальным решением для зданий в стиле Hi-tech и автосалонов.</p>
        <p>Панорамные ворота представлены тремя сериями, которые учитывают любые запросы клиентов: AluTrend, AluPro и AluTherm.</p>
        <ExpansionList className={'md-cell md-cell--12 clear ' + listClass}>
          <ExpansionPanel headerClassName="panel-header" label="Панорамные ворота AluTrend" style={style} footer={null}>
            <section className="icons-wrapper">
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/ea6/arg-007.png"}/></figure>
                <h4>Конкурентная цена<br/></h4>
              </div>
              <div>
                <figure><img src={CONST.ORIGIN + "/upload/iblock/0d2/ystanovka.png"}/></figure>
                <h4>Широкие возможности применения</h4>
              </div>
            </section>
            <ul>
              <li>Панорамные панели из алюминиевых профилей толщиной 40 мм<br/></li>
              <li>Детали из оцинкованной стали<br/></li>
              <li>Базовый ресурс пружин до 25 000 циклов «подъема-опускания»<br/></li>
              <li>Расширенный ресурс пружин до 100 000 циклов «подъема-опускания»<br/></li>
              <li>10 типов монтажа<br/></li>
              <li>Максимальный размер ворот 7000х6000 мм<br/></li>
              <li>Любой размер ворот с шагом 5 мм<br/></li>
              <li>Системы безопасности в базовом комплекте ворот<br/></li>
              <li>9 стандартных цветов</li>
            </ul>
            <section>
              <h4 className="primary-colored-text">Типы полотна ворот</h4>
            </section>
            <section>
              <div className="clear">
                  <hr/>
                  <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/panoram/tipi10.jpg'} title="Автоматические секционные гаражные ворота АЛЮТЕХ" alt="Автоматические секционные гаражные ворота АЛЮТЕХ"/></Paper></div>
                  <div className="col_l10 col_m10"><p>АЛП. Вариант полотна выполненного из панорамных панелей.</p></div>
              </div>    
              <div className="clear">
                   <hr/>
                   <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/panoram/tipi11.jpg'} title="AN - Motors" alt="AN - Motors"/></Paper></div>
                   <div className="col_l10 col_m10"><p>АЛПС. Вариант полотна с нижней частью в виде сэндвич-панели (толщина 40 мм и на выбор рисунок «S-гофр» или «Микроволна») и панорамными панелями.</p></div>
              </div>
              <div className="clear">
                <hr/>
                <div className="col_l2 col_m2 col_x12"><Paper className="bottom-images"><img src={CONST.ORIGIN+'/images/product/gate/panoram/tipi12.jpg'} title="Comunello" alt="Comunello"/></Paper></div>
                <div className="col_l10 col_m10"><p>ПО. Полотно ворот из сэндвич-панелей ProTrend с одной или несколькими панорамными панелями.</p></div>
              </div>
              <div className="clear"><hr/></div>
            </section>
            <section>
              <h4 className="primary-colored-text">Панорамные ворота со сплошным остеклением</h4>
              <p>Сплошное остекление разработали для помещений, где важно обеспечить доступ к естественному свету. Выгодный показ продукции – вот важное преимущество таких ворот при установке в автосалонах и магазинах.</p>
              <div className="sandwich-images"> 
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoram/tipi4.jpg'} alt="Без импоста" title="Тёмный дуб" width="245" height="180"/> 
                 <p>Ворота шириной до 3000 мм<br/> выпускают без импоста.</p>
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoram/tipi5.jpg'} alt="С импостом" title="Тёмная вишня" width="245" height="180"/>&nbsp; 
                 <p>Ворота шириной до 5000 мм<br/> могут выпускать с одним импостом.</p>
                </div>
              </div>
              <section>  
                <h4 className="primary-colored-text">Панорамные панели: варианты исполнения</h4>
                <hr/> 
                <div className="sandwich-images">
                  <div className="col_l4 col_m6 col_pad quad">
                    <p>Двойное остекление 26 мм</p>
                    <ul>
                      <li>Используют стойкий к ударам SAN-пластик с максимальной прозрачностью.</li>
                      <li>9 стандартных цветов по каталогу RAL по стандартной цене (без дополнительной наценки)</li>
                      <li>Возможна окраска в любой цвет по каталогу RAL</li>
                    </ul>
                  </div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/colors/double-9006.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/ass2.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/ass2-2.jpg'} alt="image"/></div>
                </div>
                <hr/> 
                <div className="sandwich-images">
                  <div className="col_l4 col_m6 col_pad quad">
                    <p>Одинарное остекление 3 мм</p>
                    <ul>
                      <li>Используют стойкий к ударам акрил с максимальной прозрачностью.</li>
                      <li>9 стандартных цветов по каталогу RAL по стандартной цене (без дополнительной наценки)</li>
                      <li>Возможна окраска в любой цвет по каталогу RAL</li>
                    </ul>
                  </div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/colors/single-9006.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/ass6.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/ass6-2.jpg'} alt="image"/></div>
                </div>
                <hr/> 
                <div className="sandwich-images">
                  <div className="col_l4 col_m6 col_pad quad">
                    <p>Композитная алюминиевая панель 26 мм</p>
                    <ul>
                      <li>Панель выпускают из двух алюминиевых листов с тиснением stucco и заполняют полистиролом.</li>
                      <li>9 стандартных цветов по каталогу RAL по стандартной цене (без дополнительной наценки)</li>
                      <li>Возможна окраска рамы и панели в любой цвет по каталогу RAL</li>
                    </ul>
                  </div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/colors/kompozit26-9006.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/kompo-1.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/kompo-2.jpg'} alt="image"/></div>
                </div>
                <hr/> 
                <div className="sandwich-images">
                  <div className="col_l4 col_m6 col_pad quad">
                    <p>Композитная алюминиевая панель 3 мм</p>
                    <ul>
                      <li>Панель выпускают из двух алюминиевых листов без тиснения и заполняют полиэтиленом под высоким давлением.</li>
                      <li>9 стандартных цветов по каталогу RAL по стандартной цене (без дополнительной наценки)</li>
                      <li>Возможна окраска рамы и панели в любой цвет по каталогу RAL</li>
                    </ul>
                  </div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/colors/kompozit3-9006.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/kompo-4.jpg'} alt="image"/></div>
                  <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/kompo-3.jpg'} alt="image"/></div>
                </div>
              </section>
            </section>
          </ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Панорамные ворота AluPro" style={style} footer={null}>
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
              <Paper className="image-placeholder"><img src={CONST.ORIGIN+'/images/product/gate/panoramnye-vorota/pic_22.jpg'} alt="image" role="presentation" /></Paper>
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
                <div classassName="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoramnye-vorota/pic_23_thumb.jpg'} alt="petlya" title="Тёмный дуб" width="245" height="180"/> 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoramnye-vorota/pic_24_thumb.jpg'} alt="ugolok" title="Тёмная вишня" width="245" height="180"/>&nbsp; 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoramnye-vorota/pic_25_thumb.jpg'} alt="dveri" title="Тёмная вишня" width="245" height="180"/> 
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
                <img className={construct_preview_image} src={CONST.ORIGIN+'/images/product/gate/panoramnye-vorota/pic_26.jpg'}/>
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
          <ExpansionPanel headerClassName="panel-header" label="Панорамные ворота AluTherm" style={style} footer={null}>
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
              <Paper className="image-placeholder"><img src={CONST.ORIGIN+'/images/product/gate/panoramnye-vorota/pic_29_thumb.jpg'} alt="image" role="presentation" /></Paper>
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
                <div classassName="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoramnye-vorota/pic_33_thumb.jpg '} alt="petlya" title="Тёмный дуб" width="245" height="180"/> 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoramnye-vorota/pic_34_thumb.jpg'} alt="ugolok" title="Тёмная вишня" width="245" height="180"/>&nbsp; 
                </div>
                <div className="col_l4 col_m6 col_pad"> <img src={CONST.ORIGIN + '/images/product/gate/panoramnye-vorota/pic_35_thumb.jpg'} alt="dveri" title="Тёмная вишня" width="245" height="180"/> 
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
                <img className={construct_preview_image} src={CONST.ORIGIN+'/images/product/gate/panoramnye-vorota/pic_38.jpg'}/>
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
        </ExpansionList>
        <section>
            <p className="bold-header">Панорамные ворота выпускают и с набором дополнительных элементов и аксессуаров:</p>
            <hr/>
            <h4 className="primary-colored-text">Калитка в полотне</h4>
            <p>Этот вид калитки заказывают, если нужен дополнительный вход в помещение. Ее использование позволяет не только попасть в помещение без открывания ворот, но и сэкономить их ресурс. Опция позволяет пользоваться воротной конструкцией с максимальным комфортом.</p>
            <p><strong>В ассортименте «Алютех» представлены 3 варианта калиток:</strong></p>
            <div className="optins-wrapper">
                <div><img src={CONST.ORIGIN + "/images/product/gate/panoram/kalitka-2.jpg"} /></div>
                <div>
                    <p><strong>Со стандартным порогом 145 мм</strong><br/>(для ворот с размерами ширины от 4,5 до 6 м)</p>
                    <p>- Линейный доводчик;<br/>- Встроенный датчик положения калитки;<br/>- Противодождевой козырек;<br/>- Надежные металлические ручки;<br/>- Специальный ловитель, исключающий провисание створки.</p>
                </div>
            </div>
            <div className="optins-wrapper">
                <div><img src={CONST.ORIGIN + "/images/product/gate/panoram/kalitka-1.jpg"} /></div>
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
            <h4 className="primary-colored-text">Решетчатое заполнение</h4>
            <div className="sandwich-images">
              <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/opt-001.jpg'} alt="image"/></div>
              <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/opt-002.jpg'} alt="image"/></div>
              <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/opt-003.jpg'} alt="image"/></div>
              <div className="col_l4 col_m6 col_pad quad"><img src={CONST.ORIGIN + '/images/product/gate/panoram/opt-004.jpg'} alt="image"/></div>
            </div>
            <p>Для помещений, в которых необходимо постоянное проветривание, отлично подойдут панорамные ворота с решетчатым заполнением. Такое решение будет наиболее востребованно на паркингах. На ваш выбор предлагается три типа решеток: стальная тянутая решетка, стальная решетка, перфорированный алюминиевый лист.</p>
            <hr/>
            <h4 className="primary-colored-text">Замок</h4>
            <div className="addit-info">
                <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/lock-pro.jpg"} /></div>
                <div><p>Для запирания ворот в гараже без дополнительного входа необходим замок. В замке реализована возможность подключения устройства разблокировки электропривода.</p></div>
            </div>    
            <hr/>
            <h4 className="primary-colored-text">Боковая дверь</h4>
            <div className="addit-info">
                <div><img src={CONST.ORIGIN + "/images/product/gate/panoram/bokovaya-2.jpg"} /></div>
                <div><p>Боковая дверь и панорамные ворота выполнены в едином стиле и гармонично вписываются в фасад здания, идеально дополняя друг друга.</p></div>
            </div>    
            <hr/>
            <h4 className="primary-colored-text">Защита от взлома</h4>
            <div className="addit-info">
                <div><img src={CONST.ORIGIN + "/images/product/gate/protrend/domkrat-01.jpg"} /></div>
                <div><p>С устройством против поддомкрачивания ворота надежно защищены от злоумышленников. В случае несанкционированного подъема опция заблокирует полотно.</p></div>
            </div>    
            <hr/>
            <h4 className="primary-colored-text">Остекление, стойкое к образованию царапин</h4>
            <div className="addit-info">
                <div><img src={CONST.ORIGIN + "/images/product/gate/panoram/carapina.jpg"} /></div>
                <div><p>Для защиты остекления от возможных повреждений (царапин) в процессе эксплуатации ворот применяется SAN-пластик со специальным антиабразивным покрытием. Данное покрытие сохраняет прозрачность остекления в течение длительного времени даже после многократной чистки. Доступно для двойного остекления 26 мм.</p></div>
            </div>    
            <hr/>
          </section>
</div>