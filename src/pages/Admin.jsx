import React, { useEffect, useState, useContext } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreatePart from '../components/modals/CreatePart';
import CreateType from '../components/modals/CreateType';
import { deleteBasketPart, fetchBasketParts } from '../http/basketAPI';
import AdminBasketPartItem from '../components/AdminBasketPartItem';

const Admin = () => {
    const [isBrandVisible, setIsBrandVisible] = useState(false);
    const [isTypeVisible, setIsTypeVisible] = useState(false);
    const [isPartVisible, setIsPartVisible] = useState(false);

    const [bparts, setBparts] = useState([]);

    const deleteBpart = async (clickedPartId) => {
        try{
            console.log(clickedPartId)
            await deleteBasketPart(clickedPartId).then(data => {
                if(data.success === true){
                    console.log(data)
                    alert('Заказ обработан');
                }
            })
        } catch(error) {
            console.log(error);
        }
        
    }

    useEffect(() => {
        try{
            fetchBasketParts().then(data => {
                setBparts(data);
            })
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        try{
            fetchBasketParts().then(data => {
                setBparts(data);
            })
        } catch (error) {
            console.log(error);
        }
    }, [bparts]);
    

    return (
        <Container style={{minWidth:'100%'}}>
            <Row>
                <Col md={3} style={{ minWidth:'25%', minHeight: '100vh' }} className='h-100 d-flex flex-column align-items-center w-20'>
                    <Button 
                        variant={'outline-dark'} 
                        className='mt-4 p-2 w-50'
                        onClick={() => setIsTypeVisible(true)}
                        >
                        Добавить тип
                    </Button>
                    <Button 
                        variant={'outline-dark'} 
                        className='mt-4 p-2 w-50'
                        onClick={() => setIsBrandVisible(true)}
                        >
                        Добавть бренд
                    </Button>
                    <Button 
                        variant={'outline-dark'} 
                        className='mt-4 p-2 w-50'
                        onClick={() => setIsPartVisible(true)}
                        >
                        Добавить запчасть
                    </Button>
                    <CreateType show={isTypeVisible} onHide={() => setIsTypeVisible(false)}/>
                    <CreateBrand show={isBrandVisible} onHide={() => setIsBrandVisible(false)}/>
                    <CreatePart show={isPartVisible} onHide={() => setIsPartVisible(false)}/>
                </Col>
                <Col md={9} style={{minHeight: '100vh'}}>
                    <Row className='d-flex mb-5 w-100'>
                        <div style={{textAlign:'center'}}><span style={{fontSize:'35px', fontWeight:'500'}}>Оплачены</span></div>
                        <hr/>
                        {bparts.map(bpart => {
                            if(bpart.orderIsPaid){
                                return(
                                    <AdminBasketPartItem 
                                        key={bpart._id} 
                                        bpart={bpart} 
                                        orderIsPaid={true}
                                        deleteBpart={deleteBpart}/>
                                )
                            }
                            return null;
                                
                        })}
                        <hr/>
                    </Row>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Admin;