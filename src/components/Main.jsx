export default function Main(props) {
    const { data } = props

    return (
        <div className="imgContainer">
            {data?.media_type === "image" ? (
                <img src={data?.hdurl} alt={data?.title || "bg-image"} className="bgImage"/>
            ) : data?.media_type === "video" ? (
                <iframe
                    src={data?.url}
                    title={data?.title || "bg-video"}
                    className="bgVideo"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>No media available</p>
            )}
        </div>
    );
}
