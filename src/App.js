import React, { useState } from "react";
import styled from "styled-components";
import { addSection } from "./actions";
import { connect } from "react-redux";
import { Header, Text, Box, Button, TextInput, Select } from "grommet";
import { Add } from "grommet-icons";
import SectionList from "./SectionList";

const Footer = styled(Box)`
  padding: 20px;
  color: #aaa;
`;

const DefaultEst = 5;

function App({ addSection }) {
  let [title, updateTitle] = useState("");
  let [est, updateEst] = useState(DefaultEst);
  let [studyTemplate, updateStudyTemplate] = useState("");

  const clearControls = () => {
    updateTitle("");
    updateEst(DefaultEst);
    updateStudyTemplate("");
  };
  const onChangeTitle = event => {
    updateTitle(event.target.value);
  };
  const onChangeEst = ({ option }) => {
    updateEst(Number(option));
  };
  const onChangeStudyTemplate = ({ option }) => {
    updateStudyTemplate(option);
  };

  return (
    <>
      <Box style={{ padding: 20 }}>
        <Header pad="xsmall" align="baseline" style={{ marginBottom: 40 }}>
          <Box basis="full">
            <TextInput
              value={title}
              placeholder="공부 제목"
              onChange={onChangeTitle}
            />
          </Box>
          <Box style={{ width: 400}} >
            <Select
              options={[
                "Hi",
                "Hr",
                "수학 숙제",
                "영어 숙제",
                "리딩 읽기",
                "독서 30분",
                "연산",
                "배움 공책",
                "리스닝 모의고사",
                "에세이",
                "국어",
                "사회",
                "과학",
                "독서기록장",
                "먼슬리 체크리스트",
              ]}
              value={studyTemplate}
              onChange={onChangeStudyTemplate}
            />
          </Box>
          <Box basis="1/4">
            <Select
              options={[5, 10, 15, 20, 25, 30, 40, 50, 60, 70, 90, 100]}
              value={est}
              onChange={onChangeEst}
            />
          </Box>
          <Box align="end" style={{ width: 60, paddingTop: 5 }}>
            <Button
              icon={<Add />}
              onClick={() => {
                addSection(title ? title : studyTemplate, est);
                clearControls();
              }}
            />
          </Box>
        </Header>
        <SectionList />
      </Box>
      <Footer>
        <Text size="xxsmall">
          Time Keeper © Woowa Brothers Corp. All right Reserved
        </Text>
      </Footer>
    </>
  );
}

export default connect(
  () => {},
  dispatch => ({
    addSection: (title, est) => dispatch(addSection(title, est))
  })
)(App);
