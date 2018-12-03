import React, { Component } from "react";
import { connect } from "dva";
import router from "umi/router";
import { ReactComponent as TimelineIcon } from "../../assets/TimelineIcon.svg";
import { ReactComponent as TimelineIconOther } from "../../assets/TimelineIconOther.svg";
import {
  Row,
  Col,
  Table,
  Popconfirm,
  Divider,
  Icon,
  Card,
  Input,
  Button,
  Timeline
} from "antd";
import styles from "./index.less";
class Time extends Component {
  render() {
    return (
      <div className={styles.content}>
        <Timeline>
          <div className={styles.div}>
            <p className={styles.time}>123123123123</p>
            <Timeline.Item dot={<TimelineIcon />}>
              Create a services site 2015-09-01
            </Timeline.Item>
          </div>
          <div className={styles.div}>
            <p className={styles.time}>123123123123</p>
            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
          </div>
          <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
          <Timeline.Item>
            Network problems being solved 2015-09-01
          </Timeline.Item>
        </Timeline>
        {/* <Timeline mode="right" className={styles.right}>
          <Timeline.Item dot={<TimelineIcon />}>
            <span>08/02</span>
          </Timeline.Item>
          <Timeline.Item dot={<TimelineIconOther />}>
            <span className={styles.spanNone}>Network123</span>
          </Timeline.Item>
          <Timeline.Item dot={<TimelineIconOther />}>
            <span className={styles.spanNone}>Networkadsd</span>
          </Timeline.Item>
          <Timeline.Item dot={<TimelineIconOther />}>
            <span>08/01</span>
          </Timeline.Item>
        </Timeline> */}
      </div>
    );
  }
}

export default Time;
