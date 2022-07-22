
import {useParams} from "react-router-dom";
import Post from "../../components/post/post";
import PostsModel from "../../models/posts/PostsModel";
import Loading from "../../components/loading/Loading";
import ServerError from "../../components/errors/ServerError";


const PostDetails = () => {

    const {id} = useParams();
    const {articles, waiting, serverError, deletePost} = PostsModel("https://jsonplaceholder.typicode.com/posts/"+id);

    return (
        <section className="page-content postDetails-page-content">

            { waiting && <Loading />}
            { serverError && <ServerError msg={serverError} />}

            <div className="container">
            
                {articles && <Post post={articles} deletePost={deletePost}  />}
                
            </div>
        </section>
        
    );

};

export default PostDetails;
