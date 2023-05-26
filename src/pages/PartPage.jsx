import React, {useEffect, useState} from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import bigStar from '../assets/star.png';

const PartPage = () => {
    const [part, setPart] = useState({info: []});
    //Получаем параметры из строки запроса
    const params = useParams();
    useEffect(() => {
        fetchOnePart(id).then(data => setPart(data));
    }, []);

    return (
        <Container className='mw-100 mt-5 ms-2'>
            <Row>
                <Col className='d-flex justify-content-center' md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + part.img}/>
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 className='text-center'>{part.name}</h2>
                        <div
                            className='d-flex align-items-center justify-content-center'
                            style={{backgroundImage: `url(${bigStar})`, width:150, height:150, backgroundSize:'cover', fontSize:'36px'}}
                            >
                            {part.rating}
                        </div>
                    </Row>
                </Col>
                <Col className='d-flex justify-content-center' md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300, height:300, fontSize:32, border:'5px solid #aaaaaa'}}
                    >
                        <h3 className='text-center'>От {part.price} руб.</h3>
                        <Button variant='outline-dark' style={{width:'65%'}}>В корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h3>Характеристики:</h3>
                {part.info.map((info, index) => {
                    return(
                        <Row key={info.id} style={{background: index % 2 === 0 ? '#aaaaaa' : 'transparent', padding: 10 }}>
                            {info.title}: {info.description}
                        </Row>
                    )
                })}
            </Row>
        </Container>
    );
};

export default PartPage;