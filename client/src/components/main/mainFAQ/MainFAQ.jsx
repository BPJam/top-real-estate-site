import React, { useState } from 'react';

import { Box, Collapse, List, ListItem, ListItemText, Typography } from '@mui/material';

import { faq } from './utilities';

import mainFAQStyle from './mainFAQStyle';

function MainFAQ() {
    const [open, setOpen] = useState([]);

    const handleClick = (e) => {
        open.includes(e.target.id) ?
            setOpen(open.filter(id => id !== e.target.id))
        :
            setOpen([...open, e.target.id]);
    }

    return (
        <Box id='faq' component={'section'} sx={ mainFAQStyle }>
            <Box component={'section'} sx={ mainFAQStyle.wrapper }>
                <Box component={'section'} sx={ mainFAQStyle.text }>
                    <Typography component={'h1'} sx={ mainFAQStyle.text.h1 }>
                        Питання та відповіді
                    </Typography>

                    <Typography component={'p'} sx={ mainFAQStyle.text.p }>
                        Отримайте відповіді на ваші запитання. За потреби
                        наші експерти готові надати вам професійну
                        консультацію. Ми стежимо за якістю обслуговування
                        і знаходимо індивідуальний підхід до кожного клієнта
                    </Typography>
                </Box>

                <Box component={'section'} sx={ mainFAQStyle.items }>
                    {
                        faq.map(e => {
                            return (
                                <Box key={e._id} sx={ mainFAQStyle.items.item }>
                                    <Typography component={'p'} sx={ mainFAQStyle.items.item.p }>
                                        { e.title }
                                    </Typography>

                                    <Box
                                        id={e._id}
                                        component={'img'}
                                        src={ 
                                            open.includes(e._id) ?
                                                './minus.png'
                                            :
                                                './plus.png'
                                        }
                                        alt='faq-icon'
                                        sx={ mainFAQStyle.items.item.icon }
                                        onClick={(e) => handleClick(e)}
                                    />
                                    
                                    <Collapse
                                        in={ open.includes(e._id) }
                                        timeout={600}
                                        unmountOnExit
                                        sx={ mainFAQStyle.items.item.collapse }
                                    >
                                        <List component="section" sx={ mainFAQStyle.items.item.collapse.content }>
                                            <ListItem>
                                                <ListItemText primary={e.description} />
                                            </ListItem>
                                        </List>
                                    </Collapse>
                                </Box>
                            );
                        })
                    }
                </Box>
            </Box>
        </Box>
    );
}

export default MainFAQ;
