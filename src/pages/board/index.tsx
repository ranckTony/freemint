import React, { useEffect, useState } from "react";

import "@/styles/reset.css";

import Description from "./components/Description";
import Filter from "./components/Filter";
import DataList from "./components/DataList";
import Footer from "./components/Footer";

import { getCollectionList } from "@/services";
import { iCollectionListParams } from "@/typings";

import "@/mock";

function Board() {
  const [period, setPeriod] = useState("HOUR_01");
  const [active, setActive] = useState("all");

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const params: iCollectionListParams = {
      period,
    };
    getCollectionList(params).then(({ data }) => {
      console.log(data);
      let dataList = data.data;
      if(active === 'verified') {
        dataList = dataList.filter((d: any) => d.verified === true)
      }
      setDataList(dataList);
    });
  }, [period, active]);


  return (
    <div>
      <Description />
      <Filter activeValue={active} changePeriod={setPeriod} changActive={setActive}/>
      <DataList data={dataList} />
    </div>
  );
}

export default Board;
