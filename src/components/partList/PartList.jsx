import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Row } from 'react-bootstrap';
import { Context } from '../..';
import PartItem from '../partItem/PartItem';

const PartList = observer(() => {
    const {part} = useContext(Context);
    // console.dir(part.parts);
    return (
        <Row className='d-flex'>
           {part.parts? part.parts.map(part => {
            return(
                <PartItem key={part._id} part={part}/>
            )
           })
        :
        null} 
        </Row>
    );
});

export default PartList;