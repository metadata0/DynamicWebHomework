// @flow

export type ProjectProps = {|
    title: string,
    description: string,
    mediaSrc: string,
    type: string,
    availability: boolean
|}

export const PROJECT_INFO_LIST = [
    {
        title: 'Side Project Club',
        description: "Social media app for helping users achieve their creative successes.",
        mediaSrc: require('../assets/projects/sideprojectclub/Thumbnail.png'),
        type: 'App, UX/UI',
        availability: true
    },
    {
        title: 'DrayEasy',
        description: 'Saas product making drayage logistics transparent and accessible.',
        mediaSrc: require('../assets/projects/drayeasy/shipping-container-cta-cargo-x-webflow-template.png'),
        type: 'Web, Saas, UX/UI',
        availabiliity: true
    },
    {
        title: 'Digital Legacy on Windows',
        description: 'Protect user privacy by helping users plan ahead',
        mediaSrc: require('../assets/projects/digitallegacy/thumbnail.png'),
        type: 'Desktop application, UX/UI',
        availability: false
    }
]