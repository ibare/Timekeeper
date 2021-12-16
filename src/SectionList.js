import React from "react";
import { Table } from "./Table";
import Section from "./Section";
import { connect } from "react-redux";
import { timeFormatter } from "./utils";
import { Button, Text } from "grommet";

function SectionList({ sectionList }) {
  const allTime = (key, adjust = 1) =>
    timeFormatter(
      sectionList.map(section => section[key]).reduce((a, b) => a + b, 0) *
        adjust
    );

  return (
    <>
      <Table>
        <thead>
          <tr>
            <th className="center" colSpan="3" width="230">
              시간
            </th>
            <th className="underline" rowSpan="2">
              공부
            </th>
            <th className="center underline" rowSpan="2" width="120">
              
            </th>
          </tr>
          <tr className="underline">
            <th className="center">예상</th>
            <th className="center">학습</th>
            <th className="center">완료</th>
          </tr>
        </thead>
        <tbody>
          {sectionList.map((section, seq) => (
            <Section {...section} key={seq} />
          ))}
        </tbody>
        <thead>
          <tr className="underline">
            <th className="center">
              <Text>{allTime("est", 60)}</Text>
            </th>
            <th className="center">
              <Text>{allTime("act")}</Text>
            </th>
            <th className="underline" colSpan="3">
            </th>
          </tr>
        </thead>
      </Table>
    </>
  );
}

export default connect(state => ({
  sectionList: state.sectionList
}))(SectionList);
