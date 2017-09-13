import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import rolets_img from '../img/pic_4.jpg';
import rolstav_img from '../img/pic_4.jpg';
import rolvorot_img from '../img/pic_1.jpg'
import rolresh_img from '../img/reshetki.jpg';
import avtvorot_img from '../img/avtvorot.jpg';
import rolprot_img from '../img/rolprot2.jpg';
//--------------------------vorotnyje systemy ----------------------
import garvorot_img from '../img/vorot.jpg';
import promvorot_img from '../img/promvorot.jpg';
import panoramvorot_img from '../img/panvorot.jpg';
import vjezdvorot_img from '../img/vjezdvorot.jpg';

import { ITEM_DESCR } from './catalog.items.descriptions';

export const CATALOG_PRODUCTS = [
        	{img: garvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Гаражные ворота"},
        	{img: promvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Промышленные ворота"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Роллеты/Рольставни"},
          {img: rolresh_img, descrExtended: ITEM_DESCR.rollet_reshetki_extended, descrShort: ITEM_DESCR.rollet_reshetki_short, label: "Роллетные решетки"},
          {img: vjezdvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Въездные ворота"},
          {img: panoramvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Комплектующие"},
          {img: avtvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Автоматика"},
          {img: rolprot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Панорамные ворота"},
          {img: rolvorot_img, descrExtended: ITEM_DESCR.rollet_gates_extended, descrShort: ITEM_DESCR.rollet_gates_short, label: "Роллетные ворота"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочное оборудование"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Системы ограждения"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Комплектующие для откатных ворот"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Скоростные ворота"}];
          