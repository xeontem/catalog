import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DataTable from 'react-md/lib/DataTables/DataTable';
import TableHeader from 'react-md/lib/DataTables/TableHeader';
import TableBody from 'react-md/lib/DataTables/TableBody';
import TableRow from 'react-md/lib/DataTables/TableRow';
import TableColumn from 'react-md/lib/DataTables/TableColumn';
import TablePagination from 'react-md/lib/DataTables/TablePagination';

import { CONST } from '../../Data/constants';
import './colours.css';

const coloursImgs = 'http://www.alutech-group.com/content/images/product/roll/sec_rollingshutter/color/table/img/';
const headers = [...new Array(6)].map((_, i) => `Column ${i + 1}`);
const data = [
  { row: ['01 Белый', '9016'].concat([...new Array(15)].map((_, i) => coloursImgs + '01.jpg'))},
  { row: ['02 Коричневый', '8014'].concat([...new Array(15)].map((_, i) => coloursImgs + '02.jpg'))},
  { row: ['03 Серый', '8014'].concat([...new Array(15)].map((_, i) => coloursImgs + '03.jpg'))},
  { row: ['04 Бежевый', '8014'].concat([...new Array(15)].map((_, i) => coloursImgs + '04.jpg'))},
  { row: ['06 Небесно-синий', '8014'].concat([...new Array(15)].map((_, i) => i === 1 || i === 2 || i === 3 || i === 4 || i === 6 || i === 8 || i === 11 || i === 14 ? null : coloursImgs + '06.jpg'))},
  { row: ['07 Красный рубин', '8014'].concat([...new Array(15)].map((_, i) => i === 3 || i === 14 ? null : coloursImgs + '07.jpg'))},
  { row: ['08 Серебристый металлик', '8014'].concat([...new Array(15)].map((_, i) => coloursImgs + '08.jpg'))},
  { row: ['10 Черный', '8014'].concat([...new Array(15)].map((_, i) => i === 2 || i === 3 || i === 8 || i === 14 ? null : coloursImgs + '10.jpg'))},
  { row: ['13 Антрацит', '8014'].concat([...new Array(15)].map((_, i) => i === 3 || i === 6 || i === 14 ? null : coloursImgs + '13.jpg'))},
  { row: ['15 Зеленая ель', '8014'].concat([...new Array(15)].map((_, i) => i === 2 || i === 14 ? null : coloursImgs + '15.jpg'))},
  { row: ['16 Лазурно-синий', '8014'].concat([...new Array(15)].map((_, i) => i === 2 || i === 3 || i === 4 || i === 6 || i === 8 || i === 11 || i === 14 ? null : coloursImgs + '16.jpg'))},
  { row: ['19 Золотой дуб', '8014'].concat([...new Array(15)].map((_, i) => i === 3 || i === 5 || i === 6 || i === 7 || i === 9 || i === 10 || i === 11 || i === 12 || i === 13 || i === 14 ? null : coloursImgs + '19.jpg'))},
  { row: ['20 Желтый', '8014'].concat([...new Array(15)].map((_, i) => i === 1 || i === 2 || i === 3 || i === 4 || i === 6 || i === 8 || i === 11 || i === 14 ? null : coloursImgs + '20.jpg'))},
  { row: ['21 Кремовый', '8014'].concat([...new Array(15)].map((_, i) => i === 14 ? null : coloursImgs + '21.jpg'))},
  { row: ['22 Темно-коричневый', '8014'].concat([...new Array(15)].map((_, i) => i === 14 ? null : coloursImgs + '22.jpg'))},
  { row: ['23 Слоновая кость', '8014'].concat([...new Array(15)].map((_, i) => i === 6 || i === 11 || i === 14 ? null : coloursImgs + '23.jpg'))},
  { row: ['24 Темно-бежевый', '8014'].concat([...new Array(15)].map((_, i) => i === 4 || i === 6 || i === 8 || i === 11 || i === 14 ? null : coloursImgs + '24.jpg'))},
  { row: ['25 Зеленый мох', '8014'].concat([...new Array(15)].map((_, i) => i === 1 || i === 3 || i === 14 ? null : coloursImgs + '25.jpg'))},
  { row: ['26 Темно-синий', '8014'].concat([...new Array(15)].map((_, i) => i === 3 || i === 14 ? null : coloursImgs + '26.jpg'))},
  { row: ['29 Бронза', '8014'].concat([...new Array(15)].map((_, i) => i === 2 || i === 4 || i === 6 || i === 8 || i === 11 || i === 14 ? null : coloursImgs + '29.jpg'))},
  { row: ['39 Ирландский дуб', '8014'].concat([...new Array(15)].map((_, i) => i === 2 || i === 3 || i === 5 || i === 6 || i === 7 || i === 8 || i === 9 || i === 10 || i === 11|| i === 12 || i === 13 || i === 14 ? null : coloursImgs + '39.jpg'))},
  { row: ['49 Вишня', '8014'].concat([...new Array(15)].map((_, i) => i === 3 || i === 5 || i === 6 || i === 7 || i === 9 || i === 10 || i === 11|| i === 12 || i === 13 || i === 14 ? null : coloursImgs + '49.jpg'))},
  { row: ['59 Орех', '8014'].concat([...new Array(15)].map((_, i) => i === 3 || i === 5 || i === 6 || i === 7 || i === 9 || i === 10 || i === 11|| i === 12 || i === 13 || i === 14 ? null : coloursImgs + '59.jpg'))}];

const colSpans = (i) => {
  switch(i) {
    case 0: return 2;
    case 1: return 5;// 'Профили роликовой прокатки'
    case 2: return 2;// 'Профили экструдированные'
    case 3: return 3; // 'Защитные короба и боковые крышки'
    case 4: return 3;// 'Концевые профили'
    case 5: return 2; // 'Направляющие шины'
    default: return 1;
  }
}

export default class Colours extends PureComponent {

  state = {
    theader: {
      upper: ['', 'Профили роликовой прокатки', 'Профили экструдированные', 'Защитные короба и боковые крышки', 'Концевые профили', 'Направляющие шины']
    }
  };

  handlePagination = (start, rowsPerPage) => {
    this.setState({ slicedData: data.slice(start, start + rowsPerPage) });
  };

  render() {
    const wrapperClass = CONST.mobile ? 'wrapper-mobile' : 'wrapper';
    const { slicedData } = this.state;
    const rowsPerPageLabel = this.props.mobile ? 'Rows' : 'Rows per page';
    return (
      <DataTable id="colours" className={wrapperClass} baseId="colPag" plain>
        <TableHeader className="upper-header">
          <TableRow children={this.state.theader.upper.map((title, i) => <TableColumn key={`header2${i}`} colSpan={colSpans(i)}>{title}</TableColumn>)}>
          </TableRow>
        </TableHeader>
        <TableHeader>
          <TableRow children={[
            <TableColumn>Цвет</TableColumn>,
            <TableColumn className="divider">PAL-код</TableColumn>,
            <TableColumn><div>AR/377(N)<br/>AR/39(N)<br/>AR/41(N)</div></TableColumn>,
            <TableColumn><div>AR/40(N)<br/>ARH/40(N)<br/>AR/55m(N)<br/>AR/52(N)</div></TableColumn>,
            <TableColumn><div>AR/45(N)</div></TableColumn>,
            <TableColumn><div>AR/55(N)<br/>ARH/55(N)</div></TableColumn>,
            <TableColumn className="divider"><div>AG/77<br/>AG/77H</div></TableColumn>,
            <TableColumn><div>AER42<br/>AER44/S<br/>AER55/S<br/>AER55m/S<br/>AEG56<br/>AEG84</div></TableColumn>,
            <TableColumn className="divider"><div>EA/77<br/>EV/77W</div></TableColumn>,
            <TableColumn><div>SF45<br/>SF20<br/>SF-R<br/>SF-QR</div></TableColumn>,
            <TableColumn><div>SB45<br/>SB20</div></TableColumn>,
            <TableColumn className="divider"><div>SB-P/RE<br/>SB-R<br/>SB-P/QRE<br/>SB-QR</div></TableColumn>,
            <TableColumn className="text-center"><div>для<br/> роллетных<br/> систем</div></TableColumn>,
            <TableColumn className="text-center"><div>для<br/> воротных<br/> систем</div></TableColumn>,
            <TableColumn className="divider text-center"><div>для<br/> роллетных<br/> решеток</div></TableColumn>,
            <TableColumn className="text-center">со<br/> свтавкой</TableColumn>,
            <TableColumn className="text-center">без<br/> вставок</TableColumn>]}/>
        </TableHeader>
        <TableBody>
          {data.map((o, i) => 
            <TableRow key={i} children={o.row.map((item, j) => <TableColumn id={`column${i}${j}`} key={`column${i}${j}`}>{j > 1 ? <img src={item}/> : item}</TableColumn>)}>
            </TableRow>
          )}
        </TableBody>
      </DataTable>
    );
  }
}