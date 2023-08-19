import { NavLinks } from './types';

export const LINKS = {
    PRICING: '/#pricing',
    FAQ: '/#faq',
    CONTACT: 'mailto:contact@groupify.co',
    // SIGN_IN: "https://forms.gle/3V4MY4arAthsi6nc8",
    // SIGN_UP: "https://forms.gle/3V4MY4arAthsi6nc8",
    SIGN_IN: 'https://app.groupify.co/login',
    SIGN_UP: 'https://app.groupify.co/register',
    TWITTER: 'https://twitter.com/groupifyco',
    FACEBOOK: '/',
    INSTAGRAM: 'https://www.instagram.com/groupifyco/',
    TERMS: 'https://gpfy.notion.site/TERMS-OF-USE-134c0411203f40b48ca79ee66dec0e62',
    PRIVACY:
        'https://gpfy.notion.site/Data-Protection-and-Privacy-Policy-70b2eff042134f4eaf1dc71667cb4786',
    BLOG: 'https://groupifyco.medium.com/',
};

export const FOOTER_LINKS: NavLinks[] = [
    {
        url: LINKS.PRICING,
        content: 'Pricing',
        isLink: true,
        variant: 'plain',
    },
    {
        url: LINKS.FAQ,
        content: 'FAQ',
        isLink: true,
        variant: 'plain',
    },
    {
        url: LINKS.CONTACT,
        content: 'Contact',
        variant: 'plain',
        isLink: true,
        target: '_blank',
    },
    {
        url: LINKS.BLOG,
        content: 'Blog',
        variant: 'plain',
        isLink: true,
        target: '_blank',
    },
];

export const NAV_LINKS: NavLinks[] = [
    ...FOOTER_LINKS,
    // --- Pending Webapp go live ---
    // {
    //   url: LINKS.SIGN_IN,
    //   content: "Sign In",
    //   variant: "outlined",
    //   target: "_blank",
    // },
    // {
    //   url: LINKS.SIGN_UP,
    //   content: "Create an Account",
    //   variant: "primary",
    //   target: "_blank",
    // },
    {
        url: LINKS.SIGN_IN,
        content: 'Login',
        variant: 'plain',
        target: '_self',
    },
    {
        url: LINKS.SIGN_UP,
        content: 'Join now',
        variant: 'primary',
        target: '_self',
    },
];

export const DOCUMENT_LINKS = [
    {
        url: LINKS.TERMS,
        content: 'Terms & conditions',
        isLink: true,
        target: '_blank',
    },
    {
        url: LINKS.PRIVACY,
        content: 'Privacy policy',
        isLink: true,
        target: '_blank',
    },
];
