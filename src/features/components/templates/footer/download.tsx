import React from 'react'
import {
    LabelPairedAppleLgIcon,
    LabelPairedGooglePlayLgIcon,
    LabelPairedHuaweiAppGalleryLgIcon,
    // eslint-disable-next-line import/no-unresolved
} from '@deriv/quill-icons/LabelPaired'
import clsx from 'clsx'
import { StaticImage } from 'gatsby-plugin-image'
import { CustomLink } from '@deriv-com/components'
import { localize } from 'components/localization'
import useRegion from 'components/hooks/use-region'
import {
    deriv_go_huaweiappgallery_url,
    deriv_go_ios_url,
    deriv_go_playstore_url,
} from 'common/constants'

const sharedClasses =
    'flex items-center justify-center gap-gap-md p-general-sm rounded-[4px] border-solid border-xs border-opacity-black-100'

const DownloadBadges = () => {
    const { is_appgallery_supported, is_ios_supported, is_appgallery_and_ios_supported } =
        useRegion()
    return (
        <div className="flex flex-col gap-gap-md max-lg:flex-1">
            {is_appgallery_supported && is_appgallery_and_ios_supported && (
                <CustomLink
                    href={deriv_go_huaweiappgallery_url}
                    target="_blank"
                    className={clsx(sharedClasses, 'order-last')}
                >
                    <LabelPairedHuaweiAppGalleryLgIcon fill="#000000b8" />
                    <StaticImage
                        src="../../../../images/common/migration/footer/explore-appgallery.png"
                        alt={localize('_t_explore it on appgallery_t_')}
                        formats={['webp', 'auto']}
                        width={90}
                        placeholder="none"
                    />
                </CustomLink>
            )}
            <CustomLink
                href={deriv_go_playstore_url}
                target="_blank"
                className={clsx(sharedClasses)}
            >
                <LabelPairedGooglePlayLgIcon fill="#000000b8" />
                <StaticImage
                    src="../../../../images/common/migration/footer/get-googleplay.png"
                    alt={localize('_t_get it on google play_t_')}
                    formats={['webp', 'auto']}
                    width={90}
                    placeholder="none"
                />
            </CustomLink>
            {is_ios_supported && is_appgallery_and_ios_supported && (
                <CustomLink href={deriv_go_ios_url} target="_blank" className={clsx(sharedClasses)}>
                    <LabelPairedAppleLgIcon fill="#000000b8" />
                    <StaticImage
                        src="../../../../images/common/migration/footer/download-appstore.png"
                        alt={localize('_t_download on the app store_t_')}
                        formats={['webp', 'auto']}
                        width={90}
                        placeholder="none"
                    />
                </CustomLink>
            )}
        </div>
    )
}

export default DownloadBadges
