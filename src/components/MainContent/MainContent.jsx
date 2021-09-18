import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import Card from '../Card/Card';

export default function MainContent() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [itemsToLoad, setItemsToLoad] = useState(12);

    useEffect(() => {
        fetch("https://free-to-play-games-database.p.rapidapi.com/api/games", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        })
          .then(res => res.json())
          .then(
            result => {
              setIsLoaded(true);
              setItems(result);
            //   console.log(result);
            },
            error => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, []);

    if (error) {
        return (<>Error</>)
    } else if (!isLoaded) {
        return(<>Loadnig...</>)
    } else {
        return (
        <>
            <Row gutter={[24, 24]}>
                {items.map((item, index) => {
                    if (index < itemsToLoad) {
                        return (
                            <Col key={index}>
                                <Card
                                    title={item.title}
                                    thumbnail={item.thumbnail}
                                    description={item.short_description}
                                    link={item.game_url}
                                    list={[item.platform, item.genre, item.developer, item.release_date]}
                                />
                            </Col>
                        )
                    }
                    return null
                })}
            </Row>
            <Button
                type="primary"
                block
                style={{marginTop: '50px'}}
                onClick={() => setItemsToLoad(itemsToLoad + 8)}
            >Load more</Button>
        </>
    )
    }
}
