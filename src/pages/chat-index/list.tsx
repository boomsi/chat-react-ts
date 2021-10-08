import React, { useState } from 'react';
import { IMember } from '@/interface';

const list: IMember<String>[] = [
  {
    id: '1',
    name: 'Project Managers',
    avatar: '',
    last_speak_time: new Date(),
    unread_count: 2,
    message: ['3']
  },
  {
    id: '2',
    name: 'Coffee Club',
    avatar: '',
    last_speak_time: new Date(),
    unread_count: 100,
    message: ['1']
  },
  {
    id: '3',
    name: 'Finance',
    avatar: '',
    last_speak_time: new Date(),
    unread_count: 0,
    message: ['2']
  }
];

function List() {
  const [activeKey, setActiveKey] = useState(list[0].name);

  function changeActive(item: IMember<String>) {
    setActiveKey(item.name);
    // 切换 messgae 信息
  }

  return (
    <div className="chat-list">
      <ul>
        <li className="title">
          <p>PEOPLE</p>
        </li>
        {list.map((item) => (
          <li
            className={item.name === activeKey ? 'active-item' : ''}
            key={item.name}
            onClick={() => changeActive(item)}
          >
            <img src={item.avatar} />
            {item.name}
            {item.unread_count > 0 && <em>{item.unread_count > 99 ? 99 : item.unread_count}</em>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
