import React from 'react';
import { Button, Avatar, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.less';

import List from './list'

const { Search } = Input;

function Wrapper() {
  function onSearch() {}

  return (
    <div className="root-wrapper">
      <header className="top-header">
        <div>
          <Button type="primary">New Chat</Button>
        </div>
        <div>Logo</div>
        <div className="setting-block">
          <Search placeholder="Search history" onSearch={onSearch} />
          <Avatar icon={<UserOutlined />} />
        </div>
      </header>
      <aside className="space-aside">
        <List />
        <List />
      </aside>
      <header className="team-header">team-header</header>
      <main className="talk-main">talk-main</main>
      <aside className="team-aside">team-aside</aside>
    </div>
  );
}

export default Wrapper;
