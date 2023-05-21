import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../..';
import PartItem from '../partItem/PartItem';

const PartList = observer(() => {
    const {part} = useContext(Context);
    
    return (
        <Row className='d-flex'>
           {part.parts.map(part => {
            return(
                <PartItem key={part.id} part={part}/>
            )
           })} 
        </Row>
    );
});

export default PartList;