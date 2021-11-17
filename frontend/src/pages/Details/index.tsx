import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Card, Avatar, Row, message } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import { GetDetailsById } from "../../api/commonService";
import { setDetails } from "../../redux/action/searchAction";
import { RootState } from "../../redux/reducers/state";

const { Meta } = Card;

export default () => {
  const { id } = useParams<any>();
  const history = useHistory();

  const { selectedDetails } = useSelector(
    (store: RootState) => store.searchDetail
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getDetails = async () => {
      const [listData, listErr] = await GetDetailsById(id);
      if (listErr) {
        message.error("Something went wrong");
        history.goBack();
        return -1;
      }
      dispatch(setDetails(listData.data.data));
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
              style={{}}
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
            title={selectedDetails?.title}
            description={
              <>
                <p>
                  Author : <b>{selectedDetails?.author}</b>
                </p>
                <p>
                  Content : <b>{selectedDetails?.content}</b>
                </p>
                <p>
                  Created Date :<b>{selectedDetails?.created.split("T")[0]}</b>
                </p>
                <p>
                  Edited Date :<b>{selectedDetails?.edited.split("T")[0]}</b>
                </p>
              </>
            }
          />
        </Card>
      </Row>
    </div>
  );
};
