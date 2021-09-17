const podcastFetch = (req, res) => {
    // fetch("https://webmag-podcast.vercel.app/podcastData.json")
    fetch("http://localhost:3000/podcastData.json")
    .then(r => r.json())
        .then(data =>
            res.status(200).json({
                message: data,
            })
        );
}

export default podcastFetch