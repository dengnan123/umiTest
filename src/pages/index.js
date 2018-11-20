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
      <Button onClick={click}>test112312qweqw</Button>
      <Button onClick={click1}>test212312qweqwe3123</Button>
    </div>
  );
}
