export default async function PostDetails({ postId }) {
    await new Promise((resolve) => {
        setTimeout(() => { resolve() }, 2000)
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        cache: "force-cache"
    })
    const post = await response.json()

    return (
        <>

            <div key={postId} style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                marginTop: "1rem",
                padding: "1rem"
            }}>
                <h1>{postId} - {post.title}</h1>
                <p>{post.body}</p>
            </div>


        </>
    )
}