import React from "react";
import { Stack, Text, Button, Meter } from "grommet";
import { Play, Pause, Trash, Refresh } from 'grommet-icons';
import { timeFormatter } from "./utils";
import { connect } from "react-redux";
import { removeDiscuss, removeSection, startDiscuss, stopDiscuss } from "./actions";

function Section({
  id,
  est,
  act,
  title,
  isDiscuss,
  removeSection,
  removeDiscuss,
  startDiscuss,
  stopDiscuss
}) {
  const initTime = est * 60;
  const remainingTime = () => initTime - act;

  return (
    <tr>
      <td className="center">
        <Text color="gray" style={{ marginRight: 5 }}>
          {timeFormatter(initTime)}
        </Text>
      </td>
      <td className="center">
        <Text size="large" color={act <= 0 ? "lightgray" : "#444"}>
          {timeFormatter(act)}
        </Text>
      </td>
      <td style={{ padding: 0 }}>
        <Stack>
          <Text
            size="large"
            style={{
              margin: 12,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap"
            }}
          >
            {title}
          </Text>
          <Meter
            values={[
              {
                value: act,
                color: remainingTime() < 0 ? "red" : null
              }
            ]}
            style={{ width: "100%", marginTop: -10 }}
            max={initTime}
            background="rgba(0,0,0,0)"
            thickness="large"
            opacity={0.2}
          />
        </Stack>
      </td>
      <td className="center">
        <Button
          plain
          size="small"
          color="#ccc"
          icon={ isDiscuss? <Pause />: <Play />}
          onClick={() => (isDiscuss ? stopDiscuss(id) : startDiscuss(id))}
        />
        <Button
          plain
          size="small"
          style={{ marginLeft: 14 }}
          icon={<Refresh />}
          onClick={() => {
            if (window.confirm('공부한 시간을 지울까요?')) removeDiscuss(id);
          }}
        />
        <Button
          plain
          size="small"
          style={{ marginLeft: 14 }}
          icon={<Trash />}
          onClick={() => {
            if (window.confirm('정말로 지울까요?')) removeSection(id);             
          }}
        />
      </td>
    </tr>
  );
}

export default connect(
  () => ({}),
  dispatch => ({
    removeSection: id => dispatch(removeSection(id)),
    removeDiscuss: id => dispatch(removeDiscuss(id)),
    startDiscuss: id => dispatch(startDiscuss(id)),
    stopDiscuss: id => dispatch(stopDiscuss(id)),
  })
)(Section);
