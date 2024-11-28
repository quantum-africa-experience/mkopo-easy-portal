
/*!
=========================================================
* Muse Ant Design Dashboard - v1.0.0
=========================================================
* Product Page: https://www.creative-tim.com/product/muse-ant-design-dashboard
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/muse-ant-design-dashboard/blob/main/LICENSE.md)
* Coded by Creative Tim
=========================================================
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
import {
    Row,
    Col,
    Card,
    Radio,
    Table,
    Upload,
    message,
    Progress,
    Button,
    Avatar,
    Typography,
} from "antd";

import { ToTopOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

// Images
import ava1 from "../assets/images/logo-shopify.svg";
import face2 from "../assets/images/face-2.jpg";
import pencil from "../assets/images/pencil.svg";

const { Title } = Typography;

const formProps = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
        authorization: "authorization-text",
    },
    onChange(info) {
        if (info.file.status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === "done") {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
// table code start
const columns = [
    {
        title: "AUTHOR",
        dataIndex: "name",
        key: "name",
        width: "32%",
    },
    {
        title: "FUNCTION",
        dataIndex: "function",
        key: "function",
    },

    {
        title: "STATUS",
        key: "status",
        dataIndex: "status",
    },
    {
        title: "EMPLOYED",
        key: "employed",
        dataIndex: "employed",
    },
];

const data = [
    {
        key: "1",
        name: (
            <>
                <Avatar.Group>
                    <Avatar
                        className="shape-avatar"
                        shape="square"
                        size={40}
                        src={face2}
                    ></Avatar>
                    <div className="avatar-info">
                        <Title level={5}>Michael John</Title>
                        <p>michael@mail.com</p>
                    </div>
                </Avatar.Group>{" "}
            </>
        ),
        function: (
            <>
                <div className="author-info">
                    <Title level={5}>Manager</Title>
                    <p>Organization</p>
                </div>
            </>
        ),

        status: (
            <>
                <Button type="primary" className="tag-primary">
                    ONLINE
                </Button>
            </>
        ),
        employed: (
            <>
                <div className="ant-employed">
                    <span>23/04/18</span>
                    <a href="#pablo">Edit</a>
                </div>
            </>
        ),
    },


];


function Orders() {
    const onChange = (e) => console.log(`radio checked:${e.target.value}`);

    return (
        <>
            <div className="tabled">
                <Row gutter={[24, 0]}>
                    <Col xs="24" xl={24}>
                        <Card
                            bordered={false}
                            className="criclebox tablespace mb-24"
                            title="Orders"
                            extra={
                                <>
                                    <Radio.Group onChange={onChange} defaultValue="a">
                                        <Radio.Button value="a">All</Radio.Button>
                                        <Radio.Button value="b">ONLINE</Radio.Button>
                                    </Radio.Group>
                                </>
                            }
                        >
                            <div className="table-responsive">
                                <Table
                                    columns={columns}
                                    dataSource={data}
                                    pagination={false}
                                    className="ant-border-space"
                                />
                            </div>
                        </Card>

                    </Col>
                </Row>
            </div>
        </>
    );
}

export default Orders;
