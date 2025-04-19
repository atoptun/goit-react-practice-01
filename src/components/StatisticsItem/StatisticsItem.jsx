import style from './StatisticsItem.module.css';
import * as FaIcons from 'react-icons/fa';

const StatisticsItem = ({ title, total, icon: Icon }) => {
  return (
    <>
      <Icon />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
