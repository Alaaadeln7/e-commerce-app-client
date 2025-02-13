
import React from 'react'
import blogOne from '../../assets/images/blogOne.jpeg'
import blogTow from '../../assets/images/blogTow.jpeg'
import LazyImage from '../../components/LazyImage'
import './blog.css'
import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <h1 className='text'>promotion</h1>
                <div className="content">
                    <div className="image">
                        <LazyImage src={blogOne} alt="blog" />
                    </div>
                    <div className="room">
                        <h1>Promotion Title</h1>
                        <h4>Et ipsum irure amet cupidatat mollit exercitation consequat duis aliquip. Reprehenderit Lorem veniam pariatur esse pariatur in aute tempor au</h4>
                        <p>*Velit deserunt elit proident velit anim adipisicing</p>
                        <Link to = '/shop' className='btn'>shop now</Link>
                    </div>

                    <div className="room">
                        <h1>Promotion Title</h1>
                        <h4>Et ipsum irure amet cupidatat mollit exercitation consequat duis aliquip. Reprehenderit Lorem veniam pariatur esse pariatur in aute tempor au</h4>
                        <p>*Velit deserunt elit proident velit anim adipisicing</p>
                        <Link to = '/shop' className='btn'>shop now</Link>
                    </div>
                    <div className="image">
                        <LazyImage src={blogTow} alt="blog" />
                    </div>

                    <div className="blogFooter">
                        <h1>Gift for your skin</h1>
                        <p>Enim officia magna ut esse aliquip irure consectetur dolor dolor commodo et. Cupid</p>
                        <Link to = '/shop'>shop now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
