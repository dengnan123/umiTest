// import React, { Component } from 'react';
import { Button } from 'antd';
import router from 'umi/router';
import styles from './index.css';

export default function() {
  function click() {
    router.push('/test');
  }
  return (
    <div className={styles.normal}>
      <Button onClick={click}>点击我啊老哥</Button>
    </div>
  );
}
