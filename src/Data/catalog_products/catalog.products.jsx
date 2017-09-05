import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

import { ITEM_DESCR } from './catalog.items.descriptions';

export const CATALOG_PRODUCTS = [
      {
        label: 'Роллетные системы',
        icon: "format_align_justify",
        children: [
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Роллеты"},
          {descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Рольставни"},
        	{descrExtended: ITEM_DESCR.rollet_gates_extended, descrShort: ITEM_DESCR.rollet_gates_short, label: "Роллетные ворота"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Роллетные решетки"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Автоматика для роллет"},
          {descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Противовзломные роллеты"}
        ]
      }, 
      {
        label: 'Воротные системы',
        icon: "credit_card",
        children: [
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Гаражные ворота"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Промышленные ворота"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Панорамные ворота"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Въездные ворота"},
        ]
      }, 
      {
        label: 'Автоматика для ворот',
        icon: "bug_report",
        children: [
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для гаражных ворот"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для промышленных ворот"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для панорамных ворот"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "для въездных ворот"},
        ]
      }, 
      {
        label: 'Шлагбаумы',
        icon: "vpn_key",
        children: [
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Автоматические шлагбаумы"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Инструкции"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Каталог автоматики"},
        	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Качество"},
        ]
      }, 
      {
        label: 'Перегрузочное оборудование',
        icon: "archive",
        children: [
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Герметизаторы проема"},
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные площадки"},
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные тамбуры"},
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Механические платформы"},
  	    ]
      },
      {
        label: 'Скоростные ворота',
        icon: "compare_arrows",
        children: [
          {descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Герметизаторы проема"},
          {descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные площадки"},
          {descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Перегрузочные тамбуры"},
          {descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Механические платформы"},
        ]
      }, 
      {
        label: 'Другие системы',
        icon: "power_input",
        children: [
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Литье под давлением"},
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Отливы"},
  	    	{descrExtended: ITEM_DESCR.rollets_extended, descrShort: ITEM_DESCR.rollets_short, label: "Противопожарные системы"}
  	    ]
      }];