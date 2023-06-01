import React, {useContext} from 'react';
import {Context} from '../../index';
import {observer} from 'mobx-react-lite';
import ListGroup from 'react-bootstrap/ListGroup';


const TypeBar = observer(() => {
    const {part} = useContext(Context);
    return (
        <ListGroup>
            {part.types.map(type => {
                return(
                    <ListGroup.Item 
                        key={type._id}
                        style={{cursor:'pointer'}}
                        active={type._id === part.selectedType._id}
                        onClick={() => part.setSelectedType(type)}
                        >
                        {type.name}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    );
})

export default TypeBar;
