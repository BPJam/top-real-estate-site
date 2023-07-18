import React from 'react';

import { Box, Typography, Link } from '@mui/material';
import PlaceIcon from '@mui/icons-material/Place';

import footerStyle from './footerStyle';

const Kyivstar = () => <Box sx={ footerStyle.logoImage } component={'img'} src='./kyivstar-logo.png' alt='kyivstar' />;
const Lifecell = () => <Box sx={ footerStyle.logoImage } component={'img'} src='./lifecell-logo.png' alt='lifecell' />;

function Footer({ load }) {
    if (!load) return <></>;

    return (
        <Box component={'footer'} sx={ footerStyle }>
            <Box component={'section'} sx={ footerStyle.wrapper }>
                <Box component={'section'} sx={ footerStyle.companyInfo }>
                    <Box component={'section'} sx={ footerStyle.companyInfo.mainInfo }>
                        <Box
                            component={'img'}
                            src='./logo.png'
                            alt='logo'
                            sx={ footerStyle.companyInfo.mainInfo.logo }
                        />

                        <Typography component={'p'} sx={ footerStyle.companyInfo.mainInfo.label }>
                            ФОП "TOP Real Estate"
                        </Typography>
                    </Box>

                    <Box component={'section'} sx={ footerStyle.companyInfo.layerInfo }>
                        <Box component={'section'} sx={ footerStyle.companyInfo.layerInfo.section }>
                            <Typography component={'h1'} sx={ footerStyle.companyInfo.layerInfo.section.title }>
                                Про компанію
                            </Typography>

                            <Typography component={'p'} sx={ footerStyle.companyInfo.layerInfo.section.paragraph }>
                                Політика конфіденційності 
                            </Typography>

                            <Typography component={'p'} sx={ footerStyle.companyInfo.layerInfo.section.paragraph }>
                                Угода користувача
                            </Typography>

                            <Typography component={'p'} sx={ footerStyle.companyInfo.layerInfo.section.paragraph }>
                                Для преси
                            </Typography>
                        </Box>

                        <Box component={'section'} sx={ footerStyle.companyInfo.layerInfo.section }>
                            <Typography component={'h1'} sx={ footerStyle.companyInfo.layerInfo.section.title }>
                                Контакти
                            </Typography>

                            <Box component={'section'} sx={ footerStyle.companyInfo.layerInfo.section.contact }>
                                <PlaceIcon sx={ footerStyle.companyInfo.layerInfo.section.placeIcon } />
                            
                                <Link target='_blank' href='https://goo.gl/maps/vxvCUUkvesQvbvc38'>
                                    <Typography component={'p'} sx={ footerStyle.companyInfo.layerInfo.section.contact.title }>
                                        IQ Business Center
                                    </Typography>
                                </Link>
                            </Box>

                            <Box component={'section'} sx={ footerStyle.companyInfo.layerInfo.section.contact }>
                                <Kyivstar />
                            
                                <Link target='_top' href='tel:+380978357007'>
                                    <Typography component={'p'} sx={ footerStyle.companyInfo.layerInfo.section.contact.title }>
                                        +380978357007
                                    </Typography>
                                </Link>
                            </Box>

                            <Box component={'section'} sx={ footerStyle.companyInfo.layerInfo.section.contact }>
                                <Lifecell />
                            
                                <Link target='_top' href='tel:+380937525497'>
                                    <Typography component={'p'} sx={ footerStyle.companyInfo.layerInfo.section.contact.title }>
                                        +380937525497
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box component={'section'} sx={ footerStyle.developer }>
                <Typography component={'p'} sx={ footerStyle.developer.nameOfKing }>
                    РОЗРОБЛЯВ:
                    <Link
                        target='_blank'
                        href='https://www.linkedin.com/in/mykhailo-potseluiev/'
                        sx={{ textDecoration: 'none' }}
                    >
                        <Typography component={'p'} sx={ footerStyle.developer.nameOfKing.firstLast }>
                            M Y K H A I L O <span style={{ color: 'gold' }}>|</span> P O T S E L U I E V
                        </Typography>
                    </Link>
                </Typography>

                <Typography component={'p'} sx={ footerStyle.developer.copyright }>
                    2023 &copy; Mykhailo Potseluiev 
                </Typography>
            </Box>
        </Box>
    );
}

export default Footer;
