import { Input, Button } from "antd";
import { PoweroffOutlined } from "@ant-design/icons";

function InputBox({ setInput, handleInput }) {
  return (
    <>
      <Input
        placeholder="apple, banana, kiwi, ..."
        allowClear
        onChange={(e) => setInput(e.target.value)}
        style={{
          alignContent: "center",
          alignItems: "center",
          width: "50vw",
          marginRight: "1vw",
        }}
        onPressEnter={handleInput}
      />
      <Button type="primary" icon={<PoweroffOutlined />} onClick={handleInput}>
        Find Recipe!
      </Button>
    </>
  );
}

export default InputBox;
