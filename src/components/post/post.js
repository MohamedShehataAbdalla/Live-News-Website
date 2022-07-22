

const Post = ({post , deletePost}) => {

    return (

            <div className="postDetails">
                <article className="article">
                    <div className="card text-center">
                        <div className="card-header">Featured</div>
                        <img src="https://via.placeholder.com/150/ECECEC/808080" className="card-img-top" alt="..." height="300" />
                        <div className="card-body">
                            <h5 className="card-title">{post.title}</h5>
                            <p className="card-text">{post.body}</p>
                            <button type="button" className="btn btn-danger" onClick={()=> deletePost(post.id) } >Delete</button>
                        </div>
                        <p className="card-footer card-text">
                            <small className="text-muted">Last updated 3 mins ago</small>
                            <small className="float-end number">{post.id}</small>
                        </p>
                    </div>
                </article>
            </div>

        
    );

};

export default Post;