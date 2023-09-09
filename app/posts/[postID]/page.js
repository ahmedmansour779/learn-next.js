import PostDetails from "@/app/components/postDetails"
import { Suspense } from "react"
import LoadingPostDetails from "./loading"

export default async function PostDetailsPage({ params }) {
    const postId = params.postID
    return (
        <>

            <div key={postId} style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                marginTop: "1rem",
                padding: "1rem"
            }}>
                <h1>Post Details</h1>
                <Suspense fallback={<LoadingPostDetails />}>
                    <PostDetails postId={postId} />
                </Suspense>
            </div>


        </>
    )
}