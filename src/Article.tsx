import './styles/App.css'
import { useState, useRef } from 'react'

import { ArticleData } from './types'
import { useQuery } from '@tanstack/react-query'
import { fetchArticleData } from './utils/fetchArticleData'

import useHideShareOptionsOnClick from './hooks/useHideShareOptionsOnClick'

import { AnimatePresence } from 'framer-motion'

import ShareIcon from './assets/icon-share.svg?react'

import ShareOptions from './components/ShareOptions'

const Article = () => {
    const [showShareOptions, setShowShareOptions] = useState(false)
    const shareOptionsRef = useRef<HTMLDivElement>(null)

    const { data } = useQuery<ArticleData>({ queryKey: ['articleData'], queryFn: fetchArticleData })
    useHideShareOptionsOnClick(shareOptionsRef, () => setShowShareOptions(false))

    const { title, subtitle, image, date, author } = data || {}

    const articleImageUrl = `/assets/${image}`
    const avatarUrl = `/assets/${author?.avatar}`

    return (
        <article>
            <div className="image-wrapper">
                <img src={articleImageUrl} alt="Image representing the article" className='article-image' />
            </div>

            <section className="content">
                <h2>{title}</h2>
                <p className='subtitle'>{subtitle}</p>

                <div className="author-and-share">
                    <div className="author">
                        <img src={avatarUrl} alt="Avatar of the author" className='author-avatar' />
                        <div className="author-name-and-date">
                            <a className='author-name'>{author?.name}</a>
                            <p className='date'>{date}</p>
                        </div>
                    </div>


                    <div className="share" ref={shareOptionsRef}>
                        <button className='share-button' onClick={() => setShowShareOptions(!showShareOptions)}>
                            <ShareIcon />
                        </button>

                        <AnimatePresence>
                            {showShareOptions && articleImageUrl && <ShareOptions image={articleImageUrl} />}
                        </AnimatePresence>
                    </div>

                </div>
            </section>
        </article>
    )
}

export default Article
