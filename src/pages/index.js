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
  function click2() {
    router.push("/test2");
  }
  return (
    <div className={styles.normal}>
      <Button onClick={click}>测试31</Button>
      <Button onClick={click1}>策士4</Button>
      <Button onClick={click2}>测试3</Button>
      <Button onClick={click3}>123请问23423423</Button>
      <Button onClick={click3}>345请问2342343</Button>
    </div>
  );
}
