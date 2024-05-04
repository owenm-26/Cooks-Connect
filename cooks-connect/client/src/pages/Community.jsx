import { useState } from "react";
import { Typography, Layout, theme, Table, Button, Form, Input } from "antd";
import dayjs from "dayjs";

function Community() {
  const [name, setName] = useState("");
  const VITE_BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT || 3000;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleJoin = async () => {
    console.log("Joined!", name);
    const date = dayjs(Date()).format("MM/DD/YYYY");
    console.log(date);

    try {
      const response = await fetch(
        `http://localhost:${VITE_BACKEND_PORT}/api/joinCommunity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            date: date,
            dishCount: 0,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
    setName("");
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Dishes Made",
      dataIndex: "dishCount",
      key: "dishCount",
    },
    {
      title: "Date Joined",
      dataIndex: "date",
      key: "date",
    },
  ];

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      dishCount: 32,
      date: "10.11.24",
    },
    {
      key: "2",
      name: "John",
      dishCount: 42,
      date: "1.12.24",
    },
  ];

  return (
    <Layout.Content
      style={{
        backgroundColor: colorBgContainer,
        padding: "4vh 4vw",
        borderRadius: "10px",
        height: "100vh",
      }}
    >
      <Typography.Title level={1}>Our Community</Typography.Title>
      <Form
        onFinish={handleJoin}
        style={{
          maxWidth: 600,
          display: "inline-flex",
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
        >
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Join Now!{" "}
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    </Layout.Content>
  );
}

export default Community;
