import React from 'react';
import FontIcon from 'react-md/lib/FontIcons';

import About from '../redux/selectors/about.selector';
// import Works from '../redux/selectors/works.selector';
import Product from '../redux/selectors/product.selector';
import Service from '../redux/selectors/service.selector';
import Contact from '../redux/selectors/contact.selector';
import Docums from '../redux/selectors/docums.selector';

export const tabs = [
        {label: 'О компании', icon: <FontIcon>home</FontIcon>, children: [<About key="About"/>], path: '/about'},
        // {label: 'Наши Работы', icon: <FontIcon>directions_car</FontIcon>, children: [<Works key="Works"/>], path: '/works'},
        {label: 'Продукция', icon: <FontIcon>list</FontIcon>, children: [<Product key="Product"/>], path: '/product'},
        {label: 'Сервис', icon: <FontIcon>feedback</FontIcon>, children: [<Service key="Service"/>], path: '/service'},
        {label: 'Контакты', icon: <FontIcon>feedback</FontIcon>, children: [<Contact key="Contacts"/>], path: '/contact'},
        {label: 'Документация', icon: <FontIcon>import_contacts</FontIcon>, children: [<Docums key="Docums"/>], path: '/docs'}
      ];