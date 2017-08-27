import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

import Home from '../components/Home/Home';
import Catalog from '../components/Catalog/Catalog';
import Delivery from '../components/Delivery/Delivery';
import Contact from '../components/Contact/Contact';

export const tabs = [
        {label: 'Главная', icon: <FontIcon>home</FontIcon>, children: [<Home key="Home"/>], path: '/home'},
        {label: 'Каталог', icon: <FontIcon>list</FontIcon>, children: [<Catalog key="Catalog"/>], path: '/catalog'},
        {label: 'Доставка', icon: <FontIcon>directions_car</FontIcon>, children: [<Delivery key="Delivery"/>], path: '/delivery'},
        {label: 'Контакты', icon: <FontIcon>feedback</FontIcon>, children: [<Contact key="Contacts"/>], path: '/feedback'},
      ];