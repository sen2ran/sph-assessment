import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Avatar, Row } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { GetDetailsById } from "../../api/commonService";

const { Meta } = Card;

export default () => {
  const { id } = useParams<any>();
  useEffect(() => {
    const getDetails = async () => {
      const [listData, listErr] = await GetDetailsById();
      if (listErr) {
        console.log(listErr);
      }
      console.log(listData.data.data);
    };

    getDetails();
  }, [id]);

  return (
    <div style={{ paddingBottom: "200px" }}>
      <Row justify="center" align="middle">
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              style={{  }}
              src="https://source.unsplash.com/random?h=200"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description={
              <>
                <p>
                  Author : <b>Senthurna</b>
                </p>
                <p>
                  Author : <b>Senthurna</b>
                </p>
                <p>
                  Author : <b>Senthurna</b>
                </p>
                <p>
                  Author : <b>Senthurna</b>
                </p>
              </>
            }
          />
        </Card>
      </Row>
    </div>
  );
};
