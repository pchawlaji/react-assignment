import { useParams } from "react-router-dom";
/**
 * This function returns the HTML content for the Single Problem Page route
 * @returns 
 */
function SingleProblem() {
    const { problem_slug } = useParams();

    return (
        <div>
            <h2>Single Problem Page</h2>
            <p>Problem Slug: {problem_slug}</p>
            {/* Add your single problem content here */}
        </div>
    );
}

export default SingleProblem