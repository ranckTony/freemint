import React, { useEffect, useState } from "react";
import styles from "./index.module.less"

function Task() {
  return <div className={styles.task}>
    <span className={styles.name}>Task</span>
  </div>;
}

export default Task;
