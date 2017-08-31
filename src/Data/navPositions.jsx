import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';
import { descr } from './navPositionsDescription/navPositionsDescription';
export const navPositions = [
      {
        label: 'Роллетные системы',
        icon: "format_align_justify",
        children: [
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Роллеты"},
          {descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Рольставни"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Роллетные ворота"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Роллетные решетки"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Автоматика для роллет"},
          {descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Противовзломные роллеты"}
        ]
      }, 
      {
        label: 'Воротные системы',
        icon: "credit_card",
        children: [
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Гаражные ворота"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Промышленные ворота"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Панорамные ворота"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Въездные ворота"},
        ]
      }, 
      {
        label: 'Автоматика для ворот',
        icon: "bug_report",
        children: [
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "для гаражных ворот"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "для промышленных ворот"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "для панорамных ворот"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "для въездных ворот"},
        ]
      }, 
      {
        label: 'Шлагбаумы',
        icon: "vpn_key",
        children: [
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Автоматические шлагбаумы"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Инструкции"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Каталог автоматики"},
        	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Качество"},
        ]
      }, 
      {
        label: 'Перегрузочное оборудование',
        icon: "archive",
        children: [
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Герметизаторы проема"},
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Перегрузочные площадки"},
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Перегрузочные тамбуры"},
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Механические платформы"},
  	    ]
      },
      {
        label: 'Скоростные ворота',
        icon: "compare_arrows",
        children: [
          {descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Герметизаторы проема"},
          {descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Перегрузочные площадки"},
          {descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Перегрузочные тамбуры"},
          {descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Механические платформы"},
        ]
      }, 
      {
        label: 'Другие системы',
        icon: "power_input",
        children: [
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Литье под давлением"},
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Отливы"},
  	    	{descrExtended: descr.RolletsDescrExtended , descrShort: descr.rolletsDescrShort, label: "Противопожарные системы"}
  	    ]
      }];