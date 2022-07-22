import PostUpdateForm from "../../components/post/postUpdateForm";


const PostUpdate = () => {

    

    return (
    
        <section className="page-content postUpdate-page-content">

            

            <div className="container">

                <div className="text-center">
                    <h2>Update Article</h2>
                </div>

                <PostUpdateForm  />
                
            </div>
        </section>
    )
};

export default PostUpdate;