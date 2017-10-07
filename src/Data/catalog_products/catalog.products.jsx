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
        	{path:'/garazh_vorota', img: garvorot_img, descrExtended: ITEM_DESCR.vorota_garaznye_extended, descrShort: ITEM_DESCR.vorota_garaznye_short, label: "Гаражные ворота"},
        	{path:'/prom_vorota', img: promvorot_img, descrExtended: ITEM_DESCR.promyshlen_vorota_extended, descrShort: ITEM_DESCR.promyshlen_vorota_short, label: "Промышленные ворота"},
          {path:'/rollets', img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Роллеты/Рольставни"},
          {path:'/roll_reshetki', img: rolresh_img, descrExtended: ITEM_DESCR.rollet_reshetki_extended, descrShort: ITEM_DESCR.rollet_reshetki_short, label: "Роллетные решетки"},
          {path:'/vezd_vorota', img: vjezdvorot_img, descrExtended: ITEM_DESCR.vezdnye_vorota_extended, descrShort: ITEM_DESCR.vezdnye_vorota_short, label: "Въездные ворота"},
          {path:'/complect', img: panoramvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Комплектующие"},
          {path:'/automatics', img: avtvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Автоматика"},
          {path:'/panoram_vorota', img: rolprot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Панорамные ворота"},
          {path:'/rollet_vorota', img: rolvorot_img, descrExtended: ITEM_DESCR.rollet_gates_extended, descrShort: ITEM_DESCR.rollet_gates_short, label: "Роллетные ворота"},
          {path:'/peregruz_oborud', img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочное оборудование"},
          {path:'/syst_ograzhd', img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Системы ограждения"},
          {path:'/complect_vorot', img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Комплектующие для откатных ворот"},
          {path:'/speed_vorota', img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Скоростные ворота"}];
          