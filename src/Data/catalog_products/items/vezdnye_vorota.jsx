import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import ProfileTypes from '../../../components/ProfileTypes/ProfileTypes';
import img from '../../img/0-protrend.jpg';
import {CONST} from '../../constants';
import './vezdnye_vorota.css';

export const vezdnye_vorota_short = 'Роллетные системы (другими словами - рольставни или роллеты) устанавливаются на дверные или оконные проемы и обеспечивают надежную защиту помещения от посторонних глаз, шума, погодных условий и взлома.';

const url = 'http://www.alutech-group.com/upload/iblock/809/0-protrend.jpg';
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
        <Paper className="image-placeholder"><img src={img} alt="image" role="presentation" /></Paper>
        <p>Для возможности оптимального выбора промышленных секционных ворот и последующей установки с учетом климатических условий региона и особенностей помещения, мы предлагаем две серии промышленных ворот ProPlus и ProTrend.</p>
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
          <ExpansionPanel headerClassName="panel-header" label="Откатные ворота" style={style} footer={null}></ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Распашные ворота" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Калитка" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Секции ограждения" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
        </ExpansionList>
</div>