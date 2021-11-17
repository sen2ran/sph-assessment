import { useMemo, useState, useEffect } from "react";
import { Row, Col, List, Avatar, Input, Skeleton } from "antd";
import { useHistory } from "react-router-dom";
import debounce from "lodash/debounce";
import { useDispatch, useSelector } from "react-redux";

import config from "../../api/endpoint";
import { useQuery } from "../../hooks/useQuery";
import { GetSearchItems } from "../../api/commonService";
import { setSearchList } from "../../redux/action/searchAction";
import { RootState } from "../../redux/reducers/state";

export default () => {
  const [searchVal, setSearchVal] = useState<string | undefined>();
  const [loading, setLoading] = useState<boolean>(false);

  const history = useHistory();
  const query = useQuery();
  const search = query.get("q");

  const { searchList } = useSelector((store: RootState) => store.searchDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    if (search) {
      setLoading(true);
      setSearchVal(search);
      setSearchData(search);
    }
  }, [search]);

  const debounceFetcher = useMemo(() => {
    const loadOptions = async (keyVal: string) => {
      setSearchData(keyVal);
    };
    return debounce(loadOptions, config.inputDebounceInterval);
  }, [config.inputDebounceInterval]);

  const setSearchData = async (keyValue: string) => {
    const [searchData, searchError] = await GetSearchItems();
    if (searchError) {
      //Send Error
      return 0;
    }
    dispatch(setSearchList(searchData.data.data));
    setLoading(false);
  };

  return (
    <div style={{ paddingBottom: "200px" }}>
      <Row justify="center" align="middle">
        <Col span={18} offset={9}>
          <Input
            style={{ width: "500px" }}
            autoComplete="off"
            placeholder="Type Here To Search"
            onInput={(e: any) => {
              setLoading(true);
              setSearchVal(e.target.value);
              debounceFetcher(e.target.value);
            }}
            value={searchVal}
          />
        </Col>
        <Col span={18} offset={9}>
          {loading && <Skeleton loading={loading} active />}
          {!loading && (
            <List
              itemLayout="horizontal"
              dataSource={searchList}
              style={{ width: "500px" }}
              renderItem={(item) => (
                <List.Item
                  onClick={() => {
                    history.push(`details/${item.id}`);
                  }}
                >
                  <List.Item.Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={item.title}
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};
