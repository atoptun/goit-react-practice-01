import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ stats, title: Tag = 'h3' }) => {
  const icon = [
    <FaRegThumbsUp key={stats.id} />,
    <MdPeople key={stats.id} />,
    <MdOutlineProductionQuantityLimits key={stats.id} />,
    <GiTreeDoor key={stats.id} />,
  ];

  const listIcon = icon.map((item, idx) => ({ id: idx, icon: item }));

  return (
    <>
      <h3 className={style.title}>{Tag}</h3>

      <ul className={style.list}>
        {stats.map((item, i) => (
          <li key={item.id} className={style.item}>
            <StatisticsItem img={listIcon[i].icon} {...item} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
