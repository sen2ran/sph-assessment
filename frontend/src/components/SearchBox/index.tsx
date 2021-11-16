import { Select } from "antd";

export interface ISelector {
  endpoint: string;
}

export default (props: ISelector) => {
  return (
    <>
      <Select
        placeholder="Type Here To Search"
        showArrow={false}
        size="large"
        getPopupContainer={(trigger) => trigger.parentNode as HTMLElement}
        style={{ width: "350px" }}
      ></Select>
    </>
  );
};
