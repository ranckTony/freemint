import React, { useEffect, useState } from "react";
import { Tabs } from "antd";

import Description from "./components/Description";
import Empty from "./components/Empty";
import styles from "./index.module.less";

const { TabPane } = Tabs;

function Task() {
  return (
    <div className={styles.task}>
      <Description></Description>
      <Tabs defaultActiveKey="2">
        <TabPane
          tab={
            <span>
              Current Task
            </span>
          }
          key="1"
        >
          Tab 1
        </TabPane>
        <TabPane
          tab={
            <span>
              Historical Task
            </span>
          }
          key="2"
        >
          Tab 2
        </TabPane>
      </Tabs>
      <Empty></Empty>
      <span className={styles.name}>Task</span>
    </div>
  );
}

export default Task;
