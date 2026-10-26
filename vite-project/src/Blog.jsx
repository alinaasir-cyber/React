import Header from './Header';
import Post from './Post';
import Footer from './Footer';

function Blog() {
    return (
        <div className="blog-container">
            <Header />
            <hr />
            <Post />
            <hr />
            <Footer />
        </div>
    );
}

export default Blog;