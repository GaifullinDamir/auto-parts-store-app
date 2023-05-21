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
                        style={{cursor:'pointer'}}
                        active={type.id === part.selectedType.id}
                        onClick={() => part.setSelectedType(type)}
                        key={type.id}
                        >
                        {type.name}
                    </ListGroup.Item>
                )
            })}
        </ListGroup>
    );
})

export default TypeBar;
