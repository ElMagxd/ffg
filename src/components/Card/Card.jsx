import { Card as CardComponent, List }  from 'antd';
import { EllipsisOutlined, LinkOutlined } from '@ant-design/icons';
import './Card.scss'

const { Meta } = CardComponent;

export default function Card(props) {
    return (
        <CardComponent
            style={{ width: 380, height: '100%' }}
            cover={
                <img
                    alt={props.title}
                    src={props.thumbnail}
                    width="380"
                    height="214"
                />
            }
            actions={[
                <LinkOutlined
                    key="link"
                    onClick={() => window.open(props.link, '_blank')}
                />,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={props.title}
                description={props.description}
            />
            <List
                style={{marginTop: '10px'}}
                size="small"
                dataSource={props.list}
                renderItem={item => <List.Item>{item}</List.Item>}
            />
        </CardComponent>
    )
}
