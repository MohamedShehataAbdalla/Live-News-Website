
import { useState, useEffect } from "react";

const PostsModel = (url) => {


    const [articles , setArticles] = useState(null);
    const [waiting , setWaiting] = useState(true);
    const [serverError , setServerError] = useState(null);

     useEffect(()=> {
        setTimeout(()=> {
            fetch(url)
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
     },[url]);



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


    const hidePost = (id) => {
        const updatedPost = articles.filter(post => post.id !== id);
        setArticles(updatedPost);
    };


    return {articles, waiting, serverError, hidePost };

};

export default PostsModel;






 // const [articles , setArticles] = useState(
        //     [
        //         {
        //         userId: 1,
        //         id: 1,
        //         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        //         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        //         },
        //         {
        //         userId: 1,
        //         id: 2,
        //         title: "qui est esse",
        //         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        //         },
        //         {
        //         userId: 1,
        //         id: 3,
        //         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        //         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        //         },
        //         {
        //         userId: 1,
        //         id: 4,
        //         title: "eum et est occaecati",
        //         body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        //         },
        //         {
        //         userId: 1,
        //         id: 5,
        //         "title": "nesciunt quas odio",
        //         body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        //         }
        //     ]
        // );
