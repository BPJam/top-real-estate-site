import React from 'react';

import {Box, Link, Typography } from '@mui/material';

import mainCallbackStyle from './mainCallbackStyle';

const Kyivstar = () => <Box sx={ mainCallbackStyle.logoImage } component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />;
const Lifecell = () => <Box sx={ mainCallbackStyle.logoImage } component={'img'} src='./lifecell-logo.png' alt='lifecell' />;
const WhatsApp = () => <Box sx={ mainCallbackStyle.logoImage } component={'img'} src='./whatsapp-callback-icon.png' alt='whatsapp' />;
const Telegram = () => <Box sx={ mainCallbackStyle.logoImage } component={'img'} src='./telegram-callback-icon.png' alt='telegram' />;

function MainCallback() {
    return (
        <Box component={'section'} sx={ mainCallbackStyle }>
            <Box sx={ mainCallbackStyle.imageWrapper }>
                <Box component={'img'} sx={ mainCallbackStyle.imageWrapper.image } src={'./city.jpeg'} alt='city' />
            </Box>

            <Box component={'section'} sx={ mainCallbackStyle.callbackContent }>
                <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection }>
                    <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.wrapper }>
                        <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.header }>
                            <Typography component={'h1'} sx={ mainCallbackStyle.callbackContent.formSection.header.h1 }>
                                Зв'яжіться з нами
                            </Typography>

                            <Typography component={'p'} sx={ mainCallbackStyle.callbackContent.formSection.header.p }>
                                Зрозумілий та цікавий заклик до дії, що підвищує конверсію вашої сторінки
                            </Typography>
                        </Box>

                        <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons }>
                            <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons.row }>
                                <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell }>
                                    <Link
                                        target='_blank'
                                        href='https://api.whatsapp.com/send?phone=380937525497'
                                        sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.link }
                                    >
                                        <WhatsApp />
                                    
                                        <Typography
                                            component={'p'}
                                            sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.text }
                                        >
                                            WhatsApp
                                        </Typography>
                                    </Link>
                                </Box>

                                
                                <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell }>
                                    <Link
                                        target='_blank'
                                        href='https://t.me/Viktoria_BayrakTB'
                                        sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.link }
                                    >
                                        <Telegram />

                                        <Typography
                                            component={'p'}
                                            sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.text }
                                        >
                                            Telegram
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>

                            <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons.row }>
                                <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell }>
                                    <Link
                                        target='_top'
                                        href='tel:+380978357007'
                                        sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.link }
                                    >
                                        <Kyivstar />

                                        <Typography
                                            component={'p'}
                                            sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.text }
                                        >
                                            +380978357007
                                        </Typography>
                                    </Link>
                                </Box>

                                <Box component={'section'} sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell }>
                                    <Link
                                        target='_top'
                                        href='tel:+380937525497'
                                        sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.link}
                                    >
                                        <Lifecell />

                                        <Typography
                                            component={'p'}
                                            sx={ mainCallbackStyle.callbackContent.formSection.buttons.row.cell.text }
                                        >
                                            +380937525497
                                        </Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box component={'section'} sx={ mainCallbackStyle.callbackContent.textSection }>
                    <Box component={'section'} sx={ mainCallbackStyle.callbackContent.textSection.article }>
                        <Box
                            component={'img'}
                            src='check.png'
                            alt='check'
                            sx={ mainCallbackStyle.callbackContent.textSection.article.checkLogo }
                        />

                        <Box component={'section'}>
                            <Typography component={'h1'} sx={ mainCallbackStyle.callbackContent.textSection.article.h1 }>
                                Перевірена якість
                            </Typography>  

                            <Typography component={'p'} sx={ mainCallbackStyle.callbackContent.textSection.article.p }>
                                Намагайтесь використовувати приблизно однаковий об'єм
                                тексту у описі усіх елементів сітки, щоб вони виглядали органічно
                            </Typography>
                        </Box>
                    </Box>

                    <Box component={'section'} sx={ mainCallbackStyle.callbackContent.textSection.article }>
                        <Box
                            component={'img'}
                            src='check.png'
                            alt='check'
                            sx={ mainCallbackStyle.callbackContent.textSection.article.checkLogo }
                        />

                        <Box component={'section'}>
                            <Typography component={'h1'} sx={ mainCallbackStyle.callbackContent.textSection.article.h1 }>
                                Безкоштовна консультація
                            </Typography>   

                            <Typography component={'p'} sx={ mainCallbackStyle.callbackContent.textSection.article.p }>
                                Намагайтесь використовувати приблизно однаковий об'єм
                                тексту у описі усіх елементів сітки, щоб вони виглядали органічно
                            </Typography>
                        </Box>
                    </Box>

                    <Box component={'section'} sx={ mainCallbackStyle.callbackContent.textSection.article }>
                        <Box
                            component={'img'}
                            src='check.png'
                            alt='check'
                            sx={ mainCallbackStyle.callbackContent.textSection.article.checkLogo }
                        />

                        <Box component={'section'}>
                            <Typography component={'h1'} sx={ mainCallbackStyle.callbackContent.textSection.article.h1 }>
                                30 днів гарантії
                            </Typography>   

                            <Typography component={'p'} sx={ mainCallbackStyle.callbackContent.textSection.article.p }>
                                Намагайтесь використовувати приблизно однаковий об'єм
                                тексту у описі усіх елементів сітки, щоб вони виглядали органічно
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default MainCallback;
