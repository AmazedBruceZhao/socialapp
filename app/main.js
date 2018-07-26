import React from 'react';
import {render} from 'react-dom';
import { hashHistory } from 'react-router'

import RouteMap from './router/routeMap.js'


render(<RouteMap history={hashHistory} />, document.querySelector('#root'));
