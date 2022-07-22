
import PostsList from "../../components/post/postsList";
import PostsModel from "../../models/posts/PostsModel";
import Loading from "../../components/loading/Loading";
import ServerError from "../../components/errors/ServerError";

const Home = () => {

    const {articles, waiting, serverError, hidePost} = PostsModel("https://jsonplaceholder.typicode.com/posts");


    return (
        <section className="page-content home-page-content">

            { waiting && <Loading />}
            { serverError && <ServerError msg={serverError} />}

            <div className="container">
            
                {articles && <PostsList posts={articles} hidePost={hidePost}  />}
                
            </div>
        </section>
        
    );

};

export default Home;
