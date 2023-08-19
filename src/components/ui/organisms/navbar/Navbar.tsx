'use client';
import 'src/components/modules/home/index.scss';
import React, { useState, useEffect } from 'react';
import Logo from '../../icons/Logo';
import { generateClassListFromObject } from '../../../../utils/className';
import MenuIcon from '../../icons/MenuIcon';
import CloseIcon from '../../icons/CloseIcon';
import { NAV_LINKS } from '@/constants/links';
import Anchor from '../../atoms/anchor/Anchor';
import { Button } from '../../atoms/button/Button';

export default function Navbar() {
    const [shrinkNavbar, setShrinkNavbar] = useState<boolean>(false);

    const [NavBarIsVisibleOnMobile, setNavBarVisibilityOnMobile] = useState(false);

    useEffect(() => {
        const handleScrollEvent = () => setShrinkNavbar(window.pageYOffset > 40);
        window.addEventListener('scroll', handleScrollEvent);
    }, []);

    const openNavigationBar = () => setNavBarVisibilityOnMobile(true);

    const closeNavigationBar = () => setNavBarVisibilityOnMobile(false);

    const goToNavLink = (url: string, target = '') => {
        closeNavigationBar();

        if (target) window.open(url, target);
        else window.location.href = url;
    };

    const getNavLinks = () => {
        return (
            <ul>
                {NAV_LINKS?.map((navlink, i) => (
                    <li key={i}>
                        {navlink.isLink ? (
                            <a
                                href={navlink.url}
                                target={navlink.target || ''}
                                rel={navlink.target === '_blank' ? 'noreferrer' : undefined}
                            >
                                {navlink.content}
                            </a>
                        ) : (
                            <Button
                                onClick={() => goToNavLink(navlink.url, navlink.target)}
                                content={navlink.content}
                                variant={navlink.variant as 'primary' | 'outlined' | 'plain' | undefined}
                            />
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <>
            <div
                className={`navbar app-container ${generateClassListFromObject({
                    'navbar--shrink': shrinkNavbar,
                })}`}
            >
                <nav className='navbar__section app-container__section'>
                    <Anchor href='/' className='navbar__section__logo'>
                        <Logo />
                        <span className=''>Beta</span>
                    </Anchor>

                    {getNavLinks()}

                    <Button
                        className='navbar__section__mobile-nav-btn'
                        content={<MenuIcon />}
                        onClick={openNavigationBar}
                        variant='plain'
                    />
                </nav>
            </div>

            <div className='navbar__section__mobile-nav' data-is-visible={NavBarIsVisibleOnMobile}>
                <Button
                    className='navbar__section__mobile-nav__close-btn'
                    content={<CloseIcon />}
                    onClick={closeNavigationBar}
                    variant='plain'
                />

                {getNavLinks()}
            </div>
        </>
    );
}
