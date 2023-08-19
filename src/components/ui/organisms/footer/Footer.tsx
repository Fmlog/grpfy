import React from 'react';
import { DOCUMENT_LINKS, FOOTER_LINKS, LINKS } from '../../../../constants/links';
import Instagram from '../../icons/Instagram';
// import Facebook from "../../icons/Facebook";
// import Instagram from "../../icons/Instagram";
import Logo from '../../icons/Logo';
import Twitter from '../../icons/Twitter';
import 'src/components/modules/home/index.scss';
import { Button } from '../../atoms/button/Button';
import { Footerlink } from './types';
import Link from 'next/link';

export default function Footer() {
    const getFooterLinks = (footerLinks: Footerlink[]) => {
        return (
            <ul>
                {footerLinks?.map((footerLink: Footerlink, i) => (
                    <li key={i}>
                        {footerLink.isLink ? (
                            <a
                                href={footerLink.url}
                                target={footerLink.target || ''}
                                rel={footerLink.target === '_blank' ? 'noreferrer' : undefined}
                            >
                                {footerLink.content}
                            </a>
                        ) : (
                            <Link href={footerLink.url}>
                                <Button content={footerLink.content} variant='plain' />
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className='app-container app-footer'>
            <div className='app-container__section app-footer__section'>
                <span className='app-footer__section__logo'>
                    <Logo />
                </span>

                <ul>
                    <li className='app-footer__link-group'>{getFooterLinks(FOOTER_LINKS)}</li>

                    <li className='app-footer__link-group'>{getFooterLinks(DOCUMENT_LINKS)}</li>

                    <li className='app-footer__link-group'>
                        <ul>
                            <li>
                                <a href={LINKS.TWITTER} target='_blank' rel='noreferrer'>
                                    <Twitter />
                                </a>
                            </li>
                            {/* --- hide facebook link pending creation --- */}
                            {/* <li>
                <a href={LINKS.FACEBOOK}>
                  <Facebook />
                </a>
              </li> */}
                            <li>
                                <a href={LINKS.INSTAGRAM} target='_blank' rel='noreferrer'>
                                    <Instagram />
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
