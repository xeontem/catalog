import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

export const navPositions = [
      {
        label: 'Роллетные системы',
        icon: "format_align_justify",
        children: [
        	{label: "Роллеты/Рольставни"},
        	{label: "Роллетные ворота"},
        	{label: "Роллетные решетки"},
        	{label: "Автоматика для роллет"},
        ]
      }, 
      {
        label: 'Воротные системы',
        icon: "credit_card",
        children: [
        	{label: "Гаражные ворота"},
        	{label: "Промышленные ворота"},
        	{label: "Панорамные ворота"},
        	{label: "Въездные ворота"},
        ]
      }, 
      {
        label: 'Автоматика для ворот',
        icon: "bug_report",
        children: [
        	{label: "для гаражных ворот"},
        	{label: "для промышленных ворот"},
        	{label: "для панорамных ворот"},
        	{label: "для въездных ворот"},
        ]
      }, 
      {
        label: 'Шлагбаумы',
        icon: "vpn_key",
        children: [
        	{label: "Автоматические шлагбаумы"},
        	{label: "Инструкции"},
        	{label: "Каталог автоматики"},
        	{label: "Качество"},
        ]
      }, 
      {
        label: 'Перегрузочное оборудование',
        icon: "archive",
        children: [
	    	{label: "Герметизаторы проема"},
	    	{label: "Перегрузочные площадки"},
	    	{label: "Перегрузочные тамбуры"},
	    	{label: "Механические платформы"},
	    ]
      }, 
      {
        label: 'Другие системы',
        icon: "power_input",
        children: [
	    	{label: "Литье под давлением"},
	    	{label: "Отливы"},
	    	{label: "Противопожарные системы"}
	    ]
      }];