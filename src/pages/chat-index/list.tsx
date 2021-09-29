import React, { useState } from 'react';

interface IList {
  name: string;
  avatar: string;
  count: number;
}

const list: IList[] = [
  {
    name: 'Project Managers',
    avatar: '',
    count: 3
  },
  {
    name: 'Coffee Club',
    avatar: '',
    count: 99
  },
  {
    name: 'Finance',
    avatar: '',
    count: 0
  }
];

function List() {
  const [activeKey, setActiveKey] = useState('');

  function changeActive(item: IList) {
    setActiveKey(item.name);
  }

  return (
    <div className="chat-list">
      <ul>
        <li className="title">
          <p>ROOMS</p>
        </li>
        {list.map((item) => (
          <li
            className={item.name === activeKey ? 'active-item' : ''}
            key={item.name}
            onClick={() => changeActive(item)}
          >
            <img src={item.avatar} />
            {item.name}
            {item.count > 0 && <em>{item.count}</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
