import style from './StatisticsItem.module.css'

const StatisticsItem = ({ icon: Icon, iconSize, title, total }) => {
  return (
    <>
      <Icon size={iconSize} />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
