import {config} from 'dotenv';
import merge from 'lodash.merge';
import {settings} from './settings';

export const connfig = merge({}, settings);
