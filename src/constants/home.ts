import {
    currencies,
    graph,
    groupifyBot,
    groupifyWhatsappIntegration,
    groupMembers,
    memberJustJoined,
    sales,
    whatsappChatImage,
} from '../components/ui/images';

export const GROUPIFY_PERCENTAGE = 10;

export const GROUPIFY_BENEFITS = [
    {
        title: 'Take your audience to an exclusive and personal experience.',
        description:
            'Move your biggest fans and followers to a specially curated experience within apps they are already used to. [Whatsapp and Telegram].',
        image_url: groupifyWhatsappIntegration,
    },
    {
        title: 'Engage with your community like never before.',
        description:
            'Take your fitness, betting, forex, crypto, investment, healthcare, skincare communities to the next level.',
        image_url: whatsappChatImage,
    },
    {
        title: 'Allow your users get paid access to your groups.',
        description:
            'With Groupify, you can move your biggest fans and followers to a specially curated experience within apps they are already used to.',
        image_url: groupifyBot,
    },
];

export const GROUPIFY_FEATURES = [
    {
        cover: {
            title: 'Managing your business is currently #impossible, we make it #possible for you to track #Sales, #Payments, and #Members.',
            icon: 'money',
        },
        details: {
            title: 'Sales Dashboard',
            description:
                'One dashboard for your business. Sales, Payments, Members all in one place.',
            image_url: graph,
        },
    },
    {
        cover: {
            title: 'You leave money on the table when you only support one #payment #option, Groupify allows you to get paid #however and #whenever.',
            icon: 'bank',
        },
        details: {
            title: 'Complete payment system',
            description:
                'Give your product more flexibility, collect payment in all currencies and any method.',
            image_url: currencies,
        },
    },
    {
        cover: {
            title: 'It takes #5hrs weekly to #manage members, based on their #payment #status. We help you take this time #down to #minutes.',
            icon: 'add-user',
        },
        details: {
            title: 'Members Management',
            description:
                'By automating the process of adding and removing members in accordance with their payment status, we make it easy for you to manage all of your groups.',
            image_url: memberJustJoined,
        },
    },
    {
        cover: {
            title: "Build a #page to showcase your #groups and it’s #benefits without needing anyone's support. Add #links for your #customers to contact you on their preferred channels.",
            icon: 'link',
        },
        details: {
            title: 'Sales Page',
            description:
                'Access high-quality financial data and start processing payments directly from bank accounts in minutes.',
            image_url: sales,
        },
    },
    {
        cover: {
            title: 'No longer #lose materials to #Plagiarism.',
            icon: 'user',
        },
        details: {
            title: 'Member Area',
            description: 'Host and manage your materials on our platform at no extra cost.',
            image_url: groupMembers,
        },
    },
];

export const GROUPIFY_FAQs: {
    q: string;
    a: string;
}[] = [
    {
        q: 'How do I use Groupify?',
        a: "It's simple. You can launch your Whatsapp or Telegram communities in less than 60 seconds. Log on to Groupify.co and create a group.",
    },
    {
        q: 'What type of people can join Groupify?',
        a: 'Anyone who wants to build an exclusive community, conduct workshops or run courses can join groupify.',
    },
    {
        q: 'How do members join my community?',
        a: 'You can easily share the sales page link of your session, workshop or subscription with your members. Members can either join from the website after payment.',
    },
    {
        q: 'How do I earn money on Groupify?',
        a: `You make ${
            100 - GROUPIFY_PERCENTAGE
        }% of every sale you make, we take ${GROUPIFY_PERCENTAGE}% for our charges with payment fees included.`,
    },
    {
        q: 'Which apps do you support?',
        a: 'Currently we support WhatsApp and Telegram and we have plans to add Discord, Twitter, Facebook groups and Slack in the future.',
    },
    {
        q: 'I changed my mobile number, now what?',
        a: "Don't worry, you won't lose access to the group. Contact Groupify support and the attendant will be able to change the number for you.",
    },
    {
        q: 'What type of community do you support?',
        a: 'We support all types of communities be it Fitness, Social communities, Classes, Finance Communities, Crypto Communities, or Betting tips. Whatever community you run, we can support you.',
    },
];
