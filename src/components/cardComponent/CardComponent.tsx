import React, { useState } from "react";
import "./CardStyle.css";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Modal, Tooltip } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

export const CardComponent = ({
  number,
  test,
  entrity,
  setEntrity,
  onClick,
  title,
  textBody,
  titleBody,
}: any) => {
  const success = () => {
    Modal.success({
      title: `${titleBody}`,
      content: (
        <div>
          <p>{textBody}</p>
        </div>
      ),
      onOk() {},
      okType: "default",
    });
  };
  return (
    <div className={`container ${test && "test"}`}>
      <div className="card">
        <div className="front" onClick={onClick}>
          {number}
        </div>
        <div className="back">
          <div
            style={{
              height: "60%",
              justifyContent: "center",
              display: "flex",
              alignItems: "center",
            }}
            onClick={onClick}
          >
            <Title level={2}>{title}</Title>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              paddingRight: "20px",
            }}
          >
            <Button shape="circle" onClick={success} icon={<PlusOutlined />} />
          </div>
        </div>
      </div>
    </div>
  );
};
