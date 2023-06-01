import { observer } from 'mobx-react-lite';
import React, { useContext, useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

const Pages = observer(() => {
    const {part} = useContext(Context);
    const pageCount = Math.ceil(part.totalCount / part.limit);
    const pages = [];
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }
    


    // console.log(pageCount);
    return (
        <Pagination>
            {pages.map((page) => {
                return(
                    <Pagination.Item
                        key={page}
                        active={part.page === page}
                        onClick={() => part.setPage(page)}
                    >
                        {page} 
                    </Pagination.Item>
                );
                
            })}
        </Pagination>
    );
});

export default Pages;