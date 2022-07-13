import React, { useEffect, useState } from "react";

import "@/styles/reset.css";

import Header from "./components/Header";
import Description from "./components/Description";
import Filter from "./components/Filter";
import DataList from "./components/DataList";
import Footer from "./components/Footer";

import { getCollectionList } from "@/services";
import { iCollectionListParams } from "@/typings";

import "@/mock";

function Home() {
  const [period, setPeriod] = useState("MINUTE_01");

  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const params: iCollectionListParams = {
      period,
    };
    getCollectionList(params).then(({ data }) => {
      console.log(data);
      setDataList(data.data);
    });
  }, [period]);

  return (
    <div className="App">
      <Header />
      <Description />
      <Filter value={period} change={setPeriod} />
      <DataList data={dataList} />
    </div>
  );
}

export default Home;
