import { Link , useNavigate} from "react-router-dom";


const PostsList = ({posts , hidePost}) => {

    const navigator = useNavigate();

    const deletePost = (id) => {

        fetch('https://jsonplaceholder.typicode.com/posts/'+id, {
            method: 'DELETE',
        })
        .then( 
            response => {
                    if(! response.ok) {
                        throw Error('Can not connect to the server!.');
                    }
                    return response.json();
                }
            )
        .then((data) => {
            console.log(data);
            console.log("A New Article has been Successfully Deleted");

            setTimeout(()=> {
                navigator('/');
            }, 1500);
        })
        .catch(e=>{
            console.log(e.message);
        });

    };

    return (
        
        <div className="postsList">
            <div className="row gx-0 gy-4 row-cols-3 d-flex justify-content-center">

                {
                    posts.map( (post) => (
                        <div className="col" key={post.id}>

                            <article className="article">
                                <div className="card">
                                    <div className="card-header"> Featured 
                                        <div className="btn-Group d-inline-flex float-end">
                                            <button type="button" className="btn btn-danger me-1 button" onClick={()=> deletePost(post.id) } >Delete</button>
                                            <Link className="btn btn-primary button me-1" to={"/update/"+post.id} >Update</Link>
                                            <button type="button" className="btn btn-secondary button" onClick={()=> hidePost(post.id) } >Hide</button>
                                        </div>
                                    </div>
                                    <Link to={"/post/"+post.id}>
                                        <img src="https://via.placeholder.com/150/ECECEC/808080" className="card-img-top" alt="..." height="150" />
                                        <div className="card-body">
                                            <h5 className="card-title">{post.title}</h5>
                                            <p className="card-text">{post.body}</p>
                                            <p className="card-text">
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                                <small className="float-end number">{post.id}</small>
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            </article>
                        </div>
                    ))
                }

                
            </div>
        </div>
        
    );

};

export default PostsList;