import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faLaptopCode,
  faEdit,
  faDrawPolygon,
  faBullhorn,
  faMapMarkerAlt,
  faPhone,
  faPaperPlane,
  faDatabase,
  faParagraph,
  faScrewdriver
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* add any additional icon to the library */
library.add(fab,faScrewdriver,faParagraph,faDatabase, faLaptopCode, faDrawPolygon, faEdit, faEdit, faBullhorn, faMapMarkerAlt, faPhone, faPaperPlane);

const Icon = ({ ...props }) => <FontAwesomeIcon {...props} />;

export default Icon;
