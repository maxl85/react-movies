import React from 'react';
import { Layout } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { BiCameraMovie } from 'react-icons/bi';

const { Header } = Layout;

const _Header = () => {
  return (
    <Header>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
          <div style={{ color: 'white', fontSize: 25, display: 'inline' }}>Movies</div>
          <BiCameraMovie style={{ color: 'white', fontSize: 30 }} />
        </div>
        <GithubOutlined style={{ color: 'white', fontSize: 30 }} />
      </div>
    </Header>
  )
}

export default _Header