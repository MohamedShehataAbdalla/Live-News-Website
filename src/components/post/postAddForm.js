import { useState } from "react";
import Alert from "../alerts/alert";
import { useNavigate } from 'react-router-dom'


const PostAddForm = () => {

    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [msg, setMsg] = useState("");
    const [msgType, setMsgType] = useState("");

    const [waitingServer , setWaitingServer] = useState(false);
    const navigator = useNavigate();

    const myPost = {
        title,
        body,
        userId,
    };

    const submitForm = (e) => {
        e.preventDefault();

        setWaitingServer(true);
        // setTimeout(()=> {

            fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(myPost),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
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
                // console.log(data);
                setWaitingServer(false);
                setMsg("A New Article has been Successfully Added");
                setMsgType("alert-success");

                setTimeout(()=> {
                    navigator('/');
                }, 1500);
            }).catch(e=>{
                setWaitingServer(false);
                setMsg(e.message);
                setMsgType("alert-danger");
            });

        // }, 2000);
        
    };



    return (

        <div className="postForm">
            <div className="row mt-5">
                <div className="col-md-6">
                    <form  onSubmit={submitForm}>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label">User Id</label>
                            <input type="number" className="form-control" id="userId" placeholder="101" required value={userId} onChange={e => setUserId(e.target.value) } />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Article Title</label>
                            <input type="text" className="form-control" id="title" placeholder="New Version to React Js Framework" required value={title} onChange={e => setTitle(e.target.value) } />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="body" className="form-label">Article Body</label>
                            <textarea className="form-control" id="body" rows="3" placeholder="New Version to React Js Framework...." required value={body} onChange={e => setBody(e.target.value) } ></textarea>
                        </div>
                        <div className="mb-3 text-center">
                            {!waitingServer && <button type="submit" className="btn btn-primary mb-3">Create</button>}
                            {waitingServer && <button type="submit" disabled className="btn btn-primary mb-3">Please wait</button>}
                        </div>
                    </form>
                    { msg && <Alert msg={msg} type={msgType} /> }
                </div>
                <div className="col-md-6">
                    <article className="article">
                        <div className="card text-center">
                            <div className="card-header">Featured</div>
                            <img src="https://via.placeholder.com/150/ECECEC/808080" className="card-img-top" alt="..." height="300" />
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{body}</p>
                                {/* <button type="button" className="btn btn-danger" onClick={()=> deletePost(userId) } >Delete</button> */}
                            </div>
                            <p className="card-footer card-text">
                                <small className="text-muted">Last updated 3 mins ago</small>
                                <small className="float-end number">{userId}</small>
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            
        </div>

            
    );

};

export default PostAddForm;