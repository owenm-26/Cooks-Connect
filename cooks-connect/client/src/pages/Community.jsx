import { useEffect, useState } from "react";
import { Typography, Layout, theme, Table, Button, Form, Input } from "antd";
import dayjs from "dayjs";

function Community() {
  const [name, setName] = useState("");
  const [dishCount, setDishCount] = useState();
  const [community, setCommunity] = useState();
  const VITE_BACKEND_PORT = import.meta.env.VITE_BACKEND_PORT || 3000;

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  useEffect(() => {
    const getCommunity = async () => {
      const response = await fetch(
        `http://localhost:${VITE_BACKEND_PORT}/api/community`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCommunity(data.data);
      } else {
        console.log("error getting community");
      }
    };

    getCommunity();
  }, []);

  const handleJoin = async () => {
    console.log("Joined!", name);
    const date = dayjs(Date()).format("MM/DD/YYYY");
    console.log(date);

    const newMember = {
      name: name,
      date: date,
      dishCount: dishCount,
    };

    try {
      const response = await fetch(
        `http://localhost:${VITE_BACKEND_PORT}/api/joinCommunity`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newMember),
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCommunity([...community, newMember]);
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
      sorter: (a, b) => a.dishCount - b.dishCount,
      defaultSortOrder: "descend",
    },
    {
      title: "Date Joined",
      dataIndex: "date",
      key: "date",
      render: (record) => dayjs(record).format("MM/DD/YYYY"),
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
        <Form.Item
          name="dishCount"
          rules={[
            {
              required: true,
              message: "This parts required!",
            },
          ]}
        >
          <Input
            placeholder="10"
            value={dishCount}
            onChange={(e) => setDishCount(e.target.value)}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Join Now!{" "}
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={community} pagination={false} />
    </Layout.Content>
  );
}

export default Community;
