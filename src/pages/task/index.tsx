import React, { useState } from "react";
import { Tabs, Input, DatePicker, Switch, Button, Modal, Table } from "antd";
import type { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';

import Description from "./components/Description";
import styles from "./index.module.less";
import classNames from "classnames";
import { LeftOutlined } from '@ant-design/icons';
import eth from "@/assets/eth.png";

const { TabPane } = Tabs;
const { RangePicker } = DatePicker;


function Task() {

  const { Column } = Table

  const [mintShow, setMintShow] = useState<boolean>(false);
  const [mintType, setMintType] = useState<string>('follow');

    const onChange = (
        value: DatePickerProps['value'] | RangePickerProps['value'],
        dateString: [string, string] | string,
    ) => {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: DatePickerProps['value'] | RangePickerProps['value']) => {
        console.log('onOk: ', value);
    };

    const onProtectionSwitchChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };

  const mintModel = mintType === 'follow' ?
      <div>
          <div className={styles.inputHeader}>Task Name</div>
          <Input className={styles.input} bordered={false} placeholder="Less than 10 characters required"/>

          <div className={styles.inputHeader}>Follow Address</div>
          <Input className={styles.input} bordered={false} placeholder="0x..." />

          <div className={styles.inputHeader}>Mint Limit</div>
          <Input className={styles.input} bordered={false} placeholder="0" />

          <div className={styles.gasFeeHeader}>
              <span className={styles.inputHeader}>Single Gas Fee Cap</span>
              <span className={classNames(styles.gasFeeRange, styles.inputHeader)}>24h Gas Fee Low:0.02 ETH - High 0.5ETH</span>
          </div>
          <Input className={styles.input} bordered={false} placeholder="0" />

          <div className={styles.inputHeader}> Time</div>
          <RangePicker
              className={styles.input}
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
              // bordered={false}
              showNow={true}
              suffixIcon={null}
              placeholder={['Start Date', 'End Date']}
          />

          <div className={styles.inputHeader}>Followed Wallet Address</div>
          <Input className={styles.input} bordered={false} placeholder="0x..." />
      </div> :
      <div>
          <p className={styles.inputHeader}>Task Name</p>
          <Input className={styles.input} bordered={false} placeholder="Less than 10 characters required"/>

          <div className={styles.switchHeader}>
              <span className={styles.inputHeader}>Rules</span>
              <Switch defaultChecked />
          </div>
          <div className={classNames(styles.input, styles.rulesCon)} placeholder="Less than 10 characters required">
              <div>
                  <Input className={styles.innerInput} placeholder="0"/>
                  <span>Mins</span>
              </div>
              <span>Number of mint/total issue</span>
              <div>
                  <span>Overtake</span>
                  <Input className={styles.innerInput} placeholder="0"/>
                  <span>%</span>
              </div>
          </div>

          <div className={styles.switchHeader}>
              <span className={styles.inputHeader}>The remaining quantity as a percentage of the total</span>
              <Switch defaultChecked />
          </div>
          <Input className={styles.input} bordered={false} placeholder="Less than 10 characters required" suffix="%"/>

          <p className={styles.inputHeader}> Time</p>
          <RangePicker
              className={styles.input}
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              onChange={onChange}
              onOk={onOk}
              // bordered={false}
              showNow={true}
              suffixIcon={null}
              placeholder={['Start Date', 'End Date']}
          />

          <div className={styles.switchHeader}>
              <span className={styles.inputHeader}>Single Gas Fee Cap</span>
              <Switch defaultChecked />
          </div>
          <Input className={styles.input} bordered={false} placeholder="Less than 10 characters required"/>

          <p className={styles.inputHeader}>Minting protection</p>
          <div className={styles.protection}>
              <p>Contract anomaly detection, once the contract has additional issuance & price change, the minting will be stopped</p>
              <Switch defaultChecked onChange={onProtectionSwitchChange} />
          </div>

          <p className={styles.inputHeader}>Followed Wallet Address</p>
          <Input className={styles.input} bordered={false} placeholder="0x..." />
      </div>


    const [modalVisible, setModalVisible] = useState<boolean>(false);


    interface TaskDataType {
        key?: string;
        taskName: string;
        taskType: string;
        quantity: number;
        volume: number[];
    }

    const [currentTasks, setCurrentTasks] = useState<TaskDataType[]>([]);

    const addTaskData = () => {
        setModalVisible(false);
        setMintShow(false);
        if (mintType === 'follow') {
            setCurrentTasks([...currentTasks, {
                taskName: 'Murakami.Flowers',
                taskType: 'Follow',
                quantity: 447,
                volume: [5.22, 328.85]
            }]);
        } else {
            setCurrentTasks([...currentTasks, {
                taskName: 'North Las Vegas',
                taskType: 'Condition',
                quantity: 447,
                volume: [5.22, 328.85]
            }]);
        }
    }

    const currentTaskTable =
        <Table dataSource={currentTasks} tableLayout="fixed" pagination={false} >
            <Column
                title="Task Name"
                key="name"
                width="120px"
                className={styles.textColumn}
                render={(_: any, record: TaskDataType) => (
                    <span>{record.taskName}</span>
                )}
            />
            <Column
                title="Type"
                key="type"
                width="120px"
                className={styles.textColumn}
                render={(_: any, record: TaskDataType) => (
                    <div className={record.taskType === 'Follow' ? styles.taskFollow : styles.taskCondition}>{record.taskType}</div>
                )}
            />
            <Column
                title="Quantity"
                key="quantity"
                width="120px"
                className={styles.textColumn}
                render={(_: any, record: TaskDataType) => (
                    <span>{record.quantity}</span>
                )}
            />
            <Column
                title={
                    <span className={styles.volumeHeader}>Volume</span>
                }
                key="volume"
                width="120px"
                className={styles.textColumn}
                render={(_: any, record: TaskDataType) => (
                    <div className={styles.volume}>
                        <div className={styles.volume0}>
                            <img src={eth} alt=""/>
                            <span>{record.volume[0]}</span>
                        </div>
                        <div className={styles.volume1}>${record.volume[1]}</div>
                    </div>
                )}
            />
        </Table>;


    const taskTableOpr = <div className={styles.tableOperation} onClick={() => setMintShow(true)}>+ New Task</div>;

  return (
    <div className={styles.task}>
      <Description/>
        {mintShow ?
            <div className={styles.mintContainer}>
                <div onClick={() => setMintShow(false)}>
                    <LeftOutlined style={{height: '14px', width: '14px'}} />
                    <span className={styles.inputHeader} style={{fontWeight: 400,marginLeft: '4px'}}>Go Back</span>
                </div>
                <div className={styles.conHeader}>Create a New Task</div>
                <div className={styles.mintName}>
                    <div onClick={() => setMintType('follow')} className={mintType === 'follow' ? styles.mintActive : ""}>Follow Whales Mint</div>
                    <div onClick={() => setMintType('condition')} className={mintType === 'condition' ? styles.mintActive : ""}>Set Condition Mint</div>
                </div>
                {mintModel}
                <Button className={styles.confirmBtn} type="primary" block onClick={() => setModalVisible(true)}>
                    Confirm
                </Button>
            </div>
            :
            <div className={styles.tabContainer}>
                <Tabs defaultActiveKey="1" tabBarExtraContent={taskTableOpr}>
                    <TabPane
                        tab={
                        <span className={styles.tab1Header}>
                            Current Task
                        </span>
                        }
                        key="1">
                        {currentTasks.length > 0 && currentTaskTable}
                    </TabPane>
                    {/*<TabPane
                        tab={
                            <span>
                        Historical Task
                      </span>
                        }
                        key="2">
                        Tab 2
                    </TabPane>*/}
                </Tabs>
                {currentTasks.length === 0 &&
                <div className={styles.empty}>
                    <h1 >Create my first Task</h1>
                    <Button className={styles.createBtn} type="primary" onClick={() => setMintShow(true)}>Start New Task</Button>
                </div>}

            </div>
        }

        <Modal
            centered
            visible={modalVisible}
            onCancel={() => setModalVisible(false)}
            footer={null}
            width={500}
        >
            <div className={styles.modalTitle} >Mint Confirmation</div>
            <div className={styles.modalHeader}>Task Name</div>
            <div className={styles.modalContent}>Impostors</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Rules</div>
            <div className={styles.modalContent}>120 mins number of mint/total issue overtake 99%</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}> The remaining quantity as a percentage of the total</div>
            <div className={styles.modalContent}>99%</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Time</div>
            <div className={styles.modalContent}>06-30 19:22 - 06-31 19:21</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Single Gas Fee Cap</div>
            <div className={styles.modalContent}>0.233</div>
            <div className={styles.modalDivider}/>
            <div className={styles.modalHeader}>Minting protection</div>
            <div className={styles.modalContent}>Activated</div>
            <Button className={styles.modalBtn} type="primary" onClick={addTaskData}>Confirm</Button>
        </Modal>
    </div>
  );
}

export default Task;
