import React from 'react'
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';

const { Header, Sider } = Layout;

export default function Sidebar() {
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            // onBreakpoint={broken => {
            //     console.log(broken);
            // }}
            // onCollapse={(collapsed, type) => {
            //     console.log(collapsed, type);
            // }}
        >
            <Header className="site-layout-sub-header-background" style={{ padding: 0 }}>
                <span className="logo">FFG</span>
            </Header>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                    nav 3
                </Menu.Item>
                <Menu.Item key="4" icon={<UserOutlined />}>
                    nav 4
                </Menu.Item>
            </Menu>
        </Sider>
    )
}
