import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { BlogPost } from '../Redux/BlogReducer/reducer';
import { fetchBlogPosts } from '../Redux/BlogReducer/actions';
import styles from './BlogList.module.css'; // Import the CSS module

const BlogList: React.FC = () => {
    const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();
    const blogPosts: BlogPost[] = useSelector((state: any) => state.blog.blogPosts);

    useEffect(() => {
        dispatch(fetchBlogPosts());
    }, [dispatch]);

    return (
        <div>
            <ul className={styles.listContainer}>
                <h1>Latest Posts in TaxTim's Blog :</h1>

                {blogPosts.map((post: BlogPost) => (
                    <li key={post.id} className={styles.listItem}>
                        <h3>{post.title}</h3>
                        <h4> {post.date}</h4>
                        <img src={post.image} alt={post.title} />
                        <p>{post.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default BlogList;
