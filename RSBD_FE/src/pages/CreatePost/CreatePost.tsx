import React from "react";
import CreatePostForm from "../../components/CreatePostForm";
import './style.scss';


const CreatePost: React.FC = () => {

    return (
        <div className="CreatePost">
            <div className="Content">
                <CreatePostForm/>
            </div>
        </div>
    )
}

export default CreatePost;