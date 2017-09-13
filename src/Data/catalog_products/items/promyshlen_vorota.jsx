import React from 'react';
import Paper from 'react-md/lib/Papers';
import { ExpansionList, ExpansionPanel } from 'react-md/lib/ExpansionPanels';

import Colours from '../../../components/Colours/Colours';
import ProfileTypes from '../../../components/ProfileTypes/ProfileTypes';
import img from '../../img/0-protrend.jpg';
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

export const promyshlen_vorota_extended =
			<div id="promyshlen_vorota">
				<h3>Промышленные ворота</h3>
        <Paper className="image-placeholder"><img src={img} alt="image" role="presentation" /></Paper>
        <p>Для возможности оптимального выбора промышленных секционных ворот и последующей установки с учетом климатических условий региона и особенностей помещения, мы предлагаем две серии промышленных ворот ProPlus и ProTrend.</p>
        <p>Для возможности оптимального выбора промышленных секционных ворот и последующей установки с учетом климатических условий региона и особенностей помещения, мы предлагаем две серии промышленных ворот ProPlus и ProTrend.</p>
				<h3>Виды гаражных ворот</h3>
				<p>Серии <strong className="aluteh-blue-text">Trend</strong> и <strong className="aluteh-blue-text">Classic</strong> предназначены для установки и пользования в частном сегменте построек. Все, что нужно для грамотного выбора конкретной серии ворот — ориентировка на такие критерии: климатический регион установки, наличие отопления в гараже, уровень влажности и ценовой сегмент. </p>
        <ExpansionList className={'md-cell md-cell--12 clear ' + listClass}>
          <ExpansionPanel headerClassName="panel-header" label="Промышленные ворота PROTREND" style={style} footer={null}>
          </ExpansionPanel>
          <ExpansionPanel headerClassName="panel-header" label="Промышленные ворота PROPLUS" style={style} footer={null}><ProfileTypes/></ExpansionPanel>
        </ExpansionList>
</div>