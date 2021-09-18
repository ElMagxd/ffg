import React from 'react';
import './MainLayout.scss';
import { Layout } from 'antd';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';


const { Header, Footer, Content } = Layout;

export default function MainLayout() {
    return (
        <Layout className="main-section">
            <Sidebar/>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <MainContent/>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Find free games ©2021 Created by <a href="mailto:elmagxd@gmail.com">elmagxd</a>
                </Footer>
            </Layout>
        </Layout>
    );
}
