
import { useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import Loading from "../../components/loading/Loading";
import ServerError from "../../components/errors/ServerError";


const Search = () => {

    const [ query, setQuery ] = useState("");
    const [articles , setArticles] = useState(null);
    const [waiting , setWaiting] = useState(true);
    const [serverError , setServerError] = useState(null);
    const navigator = useNavigate();

    useEffect(()=> {
        setTimeout(()=> {
            fetch("https://jsonplaceholder.typicode.com/posts")
            .then( 
                response => {
                        if(! response.ok) {
                            throw Error('Can not connect to the server!.');
                        }
                        return response.json();
                    }
                )
            .then(
                data => {
                // console.log(data);
                setArticles(data);
                setWaiting(false);
            }).catch(e=>{
                setServerError(e.message);
                setWaiting(false);
            });
        }, 500);
     },[]);

     const hidePost = (id) => {
        const updatedPost = articles.filter(post => post.id !== id);
        setArticles(updatedPost);
    };

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


     if(waiting) {
        document.body.style.overflow = "hidden";
        document.body.style.cursor = "none";
        
     }else {
        document.body.style.overflow = "auto";
        document.body.style.cursor = "auto";
     }

     if(serverError) {
        document.body.style.overflow = "hidden";
        
     }else {
        document.body.style.overflow = "auto";
     }


    return (
        <section className="page-content search-page-content">

            { waiting && <Loading />}
            { serverError && <ServerError msg={serverError} />}

            <div className="container">
                <h2 className="text-center mt-5">Serach Page</h2>
            <form className="d-flex w-50 m-auto mt-5 mb-5" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={event=> setQuery(event.target.value) } />
            </form>
            
                <div className="postsList">
                    <div className="row gx-0 gy-4 row-cols-3 d-flex justify-content-center">

                        { articles && 
                        
                            articles.filter( (post) => {
                                let sel = "";
                                if(query === ""){
                                    sel =  post;
                                }
                                else if(post.title.toLowerCase().includes(query.toLowerCase()) || post.body.toLowerCase().includes(query.toLowerCase())) {
                                    sel =  post;
                                }
                                return  sel;
                            }).map( (post) => (
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

                
            </div>
        </section>
        
    );

};

export default Search;
