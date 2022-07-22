import PostAddForm from "../../components/post/postAddForm";


const PostAdd = () => {

    

    return (
    
        <section className="page-content postAdd-page-content">

            

            <div className="container">

                <div className="text-center">
                    <h2>Create Article</h2>
                </div>

                <PostAddForm  />
                
            </div>
        </section>
    )
};

export default PostAdd;