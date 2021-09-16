import React from 'react'
import { Button } from 'antd'
import './layout.less'
import Search from 'antd/lib/transfer/search';

function Wrapper() {
  return (
    <div className="root-wrapper">
      <header className="top-header">
          <Button>New Chat</Button>
          <div>Logo</div>
          <div>
              <Search />
          </div>
      </header>
      <aside className="space-aside">space-aside</aside>
      <header className="team-header">team-header</header>
      <main className="talk-main">talk-main</main>
      <aside className="team-aside">team-aside</aside>
    </div>
  );
}

export default Wrapper;
