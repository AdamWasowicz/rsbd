import React from "react";
import useAppAPI from "../../hooks/useAppAPI";



const CreatePost: React.FC = () => {
    const apiClient = useAppAPI();

    const createEU = () => {
        apiClient.postExamplePostToRegion("eu")
    }

    const createUS = () => {
        apiClient.postExamplePostToRegion("us")
    }

    const createAS = () => {
        apiClient.postExamplePostToRegion("as")
    }

    return (
        <div className="CreatePost">
            <button onClick={createEU}>
                Create EU
            </button>

            <button onClick={createUS}>
                Create US
            </button>

            <button onClick={createAS}>
                Create AS
            </button>
        </div>
    )
}

export default CreatePost;