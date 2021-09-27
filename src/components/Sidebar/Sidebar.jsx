import React from 'react';
import { Layout, Menu } from 'antd';
import { SortAscendingOutlined, LaptopOutlined, TagsOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { changePlatform, changeGenre, changeSortBy } from '../../redux/actions';

const { Header, Sider } = Layout;
const { SubMenu } = Menu;

export default function Sidebar() {
    const dispatch = useDispatch();

    const handleMenuClick = ({ keyPath: [, type], key: data }) => {
        switch (type) {
            case 'platforms':
                dispatch(changePlatform(data));
                break;
            case 'genres':
                dispatch(changeGenre(data));
                break;
            case 'sortby':
                dispatch(changeSortBy(data));
                break;
            default:
                throw new Error('Wrong type of sorting');
        }
    };

    return (
        <Sider width={200} className="site-layout-background">
            <Header>
                <span className="logo">FFG</span>
            </Header>
            <Menu
                mode="inline"
                defaultSelectedKeys={['all', 'clear', 'relevance']}
                style={{ height: '100%', borderRight: 0 }}
                onClick={handleMenuClick}
            >
                <SubMenu key="platforms" icon={<LaptopOutlined />} title="Platform">
                    <Menu.Item key="all">All platforms</Menu.Item>
                    <Menu.Item key="pc">Windows (PC)</Menu.Item>
                    <Menu.Item key="browser">Browser (Web)</Menu.Item>
                </SubMenu>
                <SubMenu key="genres" icon={<TagsOutlined />} title="Genre / Tags">
                    <Menu.Item key="clear">All</Menu.Item>
                    <Menu.Item key="mmo">MMO</Menu.Item>
                    <Menu.Item key="mmorpg">MMORPG</Menu.Item>
                    <Menu.Item key="shooter">Shooter</Menu.Item>
                    <Menu.Item key="strategy">Strategy</Menu.Item>
                </SubMenu>
                <SubMenu key="sortby" icon={<SortAscendingOutlined />} title="Sort by">
                    <Menu.Item key="relevance">Relevance</Menu.Item>
                    <Menu.Item key="popularity">Popularity</Menu.Item>
                    <Menu.Item key="release-date">Release date</Menu.Item>
                    <Menu.Item key="alphabetical">Alphabetical</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
}
