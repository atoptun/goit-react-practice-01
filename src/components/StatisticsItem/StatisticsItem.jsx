import style from './StatisticsItem.module.css';

const StatisticsItem = ({ img, total, title }) => {
  return (
    <>
      {img}
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
