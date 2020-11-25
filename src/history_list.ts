import { History } from './history';

function get_current_date(){
    let today = new Date().toUTCString();
    return today;
}

    export const HISTORY_LIST: History[] = [
  { id: 1, title: 'Best football goals', url: 'https://www.youtube.com', date: get_current_date() },
  { id: 2, title: 'Despacito', url: 'https://www.youtube.com', date: get_current_date() },
  { id: 3, title: "Don't let me go", url: 'https://www.youtube.com', date: get_current_date() },
  { id: 4, title: 'Coldplay', url: 'https://www.youtube.com', date: get_current_date() },
  { id: 5, title: 'Pink Floyd best songs', url: 'https://www.youtube.com', date: get_current_date() },
  { id: 6, title: 'Youtube Rewind 2020', url: 'https://www.youtube.com', date: get_current_date() },
];