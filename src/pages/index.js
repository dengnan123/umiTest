// import React, { Component } from 'react';
import { Button } from "antd";
import router from "umi/router";
import styles from "./index.css";

export default function() {
  function click() {
    router.push("/test");
  }
  function click1() {
    router.push("/test1");
  }
  return (
    <div className={styles.normal}>
      <Button onClick={click}>测试1</Button>
      <Button onClick={click1}>策士</Button>
      <Button onClick={click1}>测试</Button>
    </div>
  );
}
