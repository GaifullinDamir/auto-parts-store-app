import React, {useEffect, useState, useContext} from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOnePart, fetchOnePartInfo } from '../http/partAPI';
import bigStar from '../assets/star.png';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { createBasketPart } from '../http/basketAPI';
import MessageModal from '../components/modals/MessageModal';
import { checkAdminRole } from '../http/userAPI';

const PartPage = observer(() => {
    const {basket, user} = useContext(Context);
    const [part, setPart] = useState({});
    const [partInfo, setPartInfo] = useState([]);
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    //Получаем параметры из строки запроса
    const {id} = useParams();
    useEffect(() => {
        fetchOnePart(id).then(data => {
            setPart(data);
        });
        fetchOnePartInfo(id).then(data => {
            setPartInfo(data);
            console.log(data);
        }) 
    }, []);

    const onBasketClick = async () => {
        try{
            console.log(basket);
            console.log(user);
            const basketPart = {
                fullname: '',
                phoneNumber: '',
                address: '',
                orderIsPaid: false,
                basketId: basket.id,
                partId: id
            };
    
            const result = await createBasketPart(basketPart).then(data => {
                basket.setBasketParts([...basket.basketParts, data]);
                setIsMessageVisible(true);
            });

        } catch(error) {
            console.log(error);
        }
    };

    return (
        <Container className='mw-100 mt-5 ms-2'>
            <Row>
                <Col className='d-flex justify-content-center' md={4}>
                    <Image style={{margin: '0 auto', 'objectFit': 'contain'}} width={300} height={350} src={process.env.REACT_APP_API_URL + part.imgUrl}/>
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
                        {
                            !checkAdminRole()?
                                <Button 
                                variant='outline-dark' 
                                style={{width:'65%'}}
                                onClick={onBasketClick}
                                >
                                    В корзину
                                </Button>
                            :
                                null
                        }
                        
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column m-3'>
                <h3>Характеристики:</h3>
                {partInfo?
                    partInfo.map((info, index) => {
                        return(
                            <Row key={info._id} style={{background: index % 2 === 0 ? '#aaaaaa' : 'transparent', padding: 10 }}>
                                {info.title}: {info.description}
                            </Row>
                        )
                    })
                :
                    null}
            </Row>
            <MessageModal show={isMessageVisible} onHide={() => setIsMessageVisible(false)} message={'Товар в корзине. Можете оплачивать!'}/>
        </Container>
    );
});

export default PartPage;