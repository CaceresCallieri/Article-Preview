import { FC } from 'react'
import useGetDeviceType from '../hooks/useGetDeviceType'

// Animations
import { motion } from 'framer-motion'
import { mobileAnimation, desktopAnimation } from './animations/share-options-animations'

// Share Functionality
import { FacebookShareButton, TwitterShareButton, PinterestShareButton } from 'react-share'

// Icons
import IconFacebook from '../assets/social-media/icon-facebook.svg?react'
import IconTwitter from '../assets/social-media/icon-twitter.svg?react'
import IconPinterest from '../assets/social-media/icon-pinterest.svg?react'

interface ShareOptionsProps {
    image: string
}

const ShareOptions: FC<ShareOptionsProps> = (({ image }) => {
    const isMobile = useGetDeviceType()

    return (
        <motion.div className="share-options"
            {...(isMobile ? mobileAnimation : desktopAnimation)}
        >
            <h4>SHARE</h4>

            <FacebookShareButton url={window.location.href}>
                <IconFacebook />
            </FacebookShareButton>

            <TwitterShareButton url={window.location.href}>
                <IconTwitter />
            </TwitterShareButton>

            <PinterestShareButton url={window.location.href} media={image}>
                <IconPinterest />
            </PinterestShareButton>
        </motion.div>
    )
})

export default ShareOptions