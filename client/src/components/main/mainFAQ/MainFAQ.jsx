import React, { useState } from 'react';
import { Box, Collapse, List, ListItem, ListItemText, Typography } from '@mui/material';

const faq = [
    {
        _id: '0',
        title: 'Питання',
        description: 'Відповідь'
    },
    {
        _id: '1',
        title: 'Питання',
        description: 'Відповідь'
    },
    {
        _id: '2',
        title: 'Питання',
        description: 'Відповідь'
    },
    {
        _id: '3',
        title: 'Питання',
        description: 'Відповідь'
    },
    {
        _id: '4',
        title: 'Питання',
        description: 'Відповідь'
    },
    {
        _id: '5',
        title: 'Питання',
        description: 'Відповідь'
    }
]

function MainFAQ() {
    const [open, setOpen] = useState([]);

    const handleClick = (e) => {
        if (open.includes(e.target.id)) {
            return setOpen(open.filter(id => id !== e.target.id));
        }

        return setOpen([...open, e.target.id]);
    };

    return (
        <Box id='faq' component={'section'} sx={{ width: '100%', minHeight: 'calc(100vh + 12rem)', padding: '6rem' }}>
            <Box component={'section'} sx={{ width: '100%', minHeight: 'calc(100vh + 6rem)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Box component={'section'} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: '3rem' }}>
                    <Typography component={'h1'} sx={{ textAlign: 'center', fontSize: '2.8rem', fontWeight: 500, color: '#788d58', mb: '2rem' }}>
                        Питання та відповіді
                    </Typography>

                    <Typography component={'p'} sx={{ fontSize: '1.1rem', textAlign: 'center', pl: '15%', pr: '15%', fontWeight: 500 }}>
                        Отримайте відповіді на ваші запитання. За потреби наші
                        експерти готові надати вам професійну
                        консультацію. Ми стежимо за якістю обслуговування і знаходимо
                        індивідуальний підхід до кожного клієнта
                    </Typography>
                </Box>

                <Box component={'section'} sx={{ width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', flexGrow: 1, flexWrap: 'wrap', '& > div:not(:nth-of-type(even))': { borderTop: '1px solid #9D9B9B', borderBottom: '1px solid #9D9B9B' }, '& > div:last-child': { borderBottom: '1px solid #9D9B9B' } }}>
                    {
                        faq.map(e => {
                            return (
                                <Box key={e._id} sx={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '1rem 0.5rem', flexGrow: 1, '&:hover': { backgroundColor: '#e0e0e0' } }}>
                                    <Typography component={'p'} sx={{ fontWeight: '500' }}>
                                        { e.title }
                                    </Typography>

                                    <Box id={e._id} component={'img'} src={ open.includes(e._id) ? './minus.png' : './plus.png' } alt='faq-icon' sx={{ width: '3rem', height: '3rem', cursor: 'pointer' }} onClick={(e) => handleClick(e)} />
                                    
                                    <Collapse in={ open.includes(e._id) } timeout={600} unmountOnExit sx={{ width: '100%' }}>
                                        <List component="section" sx={{ '& .MuiListItem-root': {  padding: 0 }}}>
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
