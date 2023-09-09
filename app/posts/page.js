import Link from "next/link"

export const metadata = {
    title: 'Posts',
    description: 'Generated by create next app',
}

export default async function PostsPage() {

    // const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos/1",
    //     {
    //         cache: "force-cache",
    //         // next: { revalidate: 120 }
    //     }
    // )
    // const todo = await response.json();

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 120
        }
    })
    const posts = await response.json()

    return (
        <>

            <h1>Posts Page</h1>
            {/* 
            <Link href="/articles">
                <button>Take me to the articles page</button>
            </Link>
            <h1>{todo.title}</h1>
            <hr />
            <Todo /> 
            */}

            <div style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "2rem",
                flexDirection: "column",
                marginTop: "2rem",
                padding: "1rem"
            }}>
                {posts.map((post) => {
                    return (
                        <Link href={`/posts/${post.id}`}>
                            <div key={post.id} style={{
                                display: "flex",
                                gap: "1rem",
                                flexDirection: "column",
                            }}>
                                <h1>{post.id} - {post.title}</h1>
                                <p>{post.body}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}
