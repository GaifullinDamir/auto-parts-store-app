import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Pagination } from 'react-bootstrap';
import { Context } from '..';

const Pages = observer(() => {
    const {part} = useContext(Context);
    //При помощи Math.ceil округляем в большую сторону.
    const pageCount = Math.ceil(part.totalCount / part.limit);
    const pages = [];

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1);
    }


    return (
        <Pagination>
            {pages.map((page) => {
                <Pagination.Item
                    key={page}
                    active={part.page === page}
                    onClick={() => part.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            })}
        </Pagination>
    );
});

export default Pages;