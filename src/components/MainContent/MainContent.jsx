import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
import { Row, Col, Button } from 'antd';
import store from '../../redux/store';
import Card from '../Card/Card';

const API_URL = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

export default function MainContent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsToLoad, setItemsToLoad] = useState(12);
    const [fetchURL, setFetchURL] = useState(API_URL);

    // const { platform = 'all', genre, sortby } = useSelector(state => state);

    // TODO: delete clg
    // console.log(fetchURL);

    store.subscribe(() => {
        const { platform = 'all', genre, sortby } = store.getState();
        const genreLine = (genre && genre !== 'clear') ? `&category=${genre}` : '';
        const sortbyLine = sortby ? `&sort-by=${sortby}` : '';
        setFetchURL(`${API_URL}?platform=${platform}${genreLine}${sortbyLine}`);
    });

    useEffect(() => {
        fetch(fetchURL, {
            method: "GET",
            headers: {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
            },
        })
            .then(res => res.json())
            .then(
                result => {
                    setIsLoaded(true);
                    setItems(result);
                    // console.log(result);
                },
                error => {
                    setIsLoaded(true);
                    setError(error);
                },
            );
    }, [fetchURL]);

    if (error) {
        return (<>Error</>);
    } if (!isLoaded) {
        return (<>Loadnig...</>);
    }
    return (
        <>
            <Row gutter={[24, 24]}>
                {items.map((item, index) => {
                    if (index < itemsToLoad) {
                        return (
                            <Col key={item.title}>
                                <Card
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    description={item.short_description}
                                    link={item.game_url}
                                    list={[item.platform, item.genre, item.developer, item.release_date]}
                                />
                            </Col>
                        );
                    }
                    return null;
                })}
            </Row>
            <Button
                type="primary"
                block
                style={{ marginTop: '50px' }}
                onClick={() => setItemsToLoad(itemsToLoad + 8)}
            >
                Load more
            </Button>
        </>
    );
}
