import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const _Footer = () => {
  return (
    <Footer style={{ textAlign: 'center', background: 'LightGray' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  )
}

export default _Footer