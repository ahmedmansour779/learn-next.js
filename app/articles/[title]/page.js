
export default function ShowArticlePage(props) {
    console.log(props)  //show in server side
    return (
        <div>
            <h1>Show Article Page</h1>
            <h2>{props.params.title}</h2>
        </div>
    )
}
