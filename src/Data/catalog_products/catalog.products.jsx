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
      {
        label: 'Роллетные системы',
        icon: "format_align_justify",
         
        children: [
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Роллеты/Рольставни"},
        	{img: rolvorot_img, descrExtended: ITEM_DESCR.rollet_gates_extended, descrShort: ITEM_DESCR.rollet_gates_short, label: "Роллетные ворота"},
        	{img: rolresh_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Роллетные решетки"},
        	{img: avtvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Автоматика для роллет"},
          {img: rolprot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Противовзломные роллеты"}
        ]
      }, 
      {
        label: 'Воротные системы',
        icon: "credit_card",
        children: [
        	{img: garvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Гаражные ворота"},
        	{img: promvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Промышленные ворота"},
        	{img: panoramvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Панорамные ворота"},
        	{img: vjezdvorot_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Въездные ворота"}
        ]
      }, 
      {
        label: 'Автоматика для ворот',
        icon: "bug_report",
        children: [
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для гаражных ворот"},
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для промышленных ворот"},
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для панорамных ворот"},
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для въездных ворот"},
        ]
      }, 
      {
        label: 'Шлагбаумы',
        icon: "vpn_key",
        children: [
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Автоматические шлагбаумы"},
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Инструкции"},
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Каталог автоматики"},
        	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Качество"},
        ]
      }, 
      {
        label: 'Перегрузочное оборудование',
        icon: "archive",
        children: [
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Герметизаторы проема"},
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные площадки"},
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные тамбуры"},
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Механические платформы"},
  	    ]
      },
      {
        label: 'Скоростные ворота',
        icon: "compare_arrows",
        children: [
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Герметизаторы проема"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные площадки"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные тамбуры"},
          {img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Механические платформы"},
        ]
      }, 
      {
        label: 'Другие системы',
        icon: "power_input",
        children: [
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Литье под давлением"},
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Отливы"},
  	    	{img: rolets_img, descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Противопожарные системы"}
  	    ]
      }];