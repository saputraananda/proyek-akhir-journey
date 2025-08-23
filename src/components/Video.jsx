function YouTubeEmbed({ videoId }) {
  return (
    <div className="w-full max-w-md mt-6">
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          className="w-full h-64 rounded-xl"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default YouTubeEmbed
