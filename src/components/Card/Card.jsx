import React from 'react';
import PropTypes from 'prop-types';
import { Card as CardComponent, List } from 'antd';
import { EllipsisOutlined, LinkOutlined } from '@ant-design/icons';
import './Card.scss';

const { Meta } = CardComponent;

export default function Card({ title, thumbnail, description, link, list }) {
    return (
        <CardComponent
            style={{ width: 380, height: '100%' }}
            cover={(
                <img
                    alt={title}
                    src={thumbnail}
                    width="380"
                    height="214"
                />
            )}
            actions={[
                <LinkOutlined
                    key="link"
                    onClick={() => window.open(link, '_blank')}
                />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={title}
                description={description}
            />
            <List
                style={{ marginTop: '10px' }}
                size="small"
                dataSource={list}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </CardComponent>
    );
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.string).isRequired,
};
