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
      <Button onClick={click}>test页面shell部署</Button>
      <Button onClick={click1}>shell部署</Button>
    </div>
  );
}
