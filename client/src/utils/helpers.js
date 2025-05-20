import { PRIORITY_LABELS, PRIORITY_CLASSES } from './constans';

export const getPriorityLabel = (priority) => PRIORITY_LABELS?.[priority] || 'Normal';
export const getPriorityClass = (priority) => PRIORITY_CLASSES?.[priority] || 'normal-priority';
