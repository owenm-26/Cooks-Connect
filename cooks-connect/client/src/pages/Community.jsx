import { useState } from "react";
import { Typography, Layout, theme, Table, Button, Form, Input } from "antd";

function Community() {
  const [name, setName] = useState("");

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleJoin = () => {
    console.log("Joined!", name);
    setName("");
  };

  return (
    <Layout.Content
      style={{
        backgroundColor: colorBgContainer,
      }}
    >
      <Typography.Title level={1}>Our Community</Typography.Title>
      <Form
        onFinish={handleJoin}
        onFinishFailed={() => console.log("failed")}
        style={{
          maxWidth: 600,
          display: "inline-flex",
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item>
          <Input
            placeholder="Your Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Join Now!{" "}
          </Button>
        </Form.Item>
      </Form>
      <Table />
    </Layout.Content>
  );
}

export default Community;
