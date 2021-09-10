const podcastFetch = (req, res) => {
    fetch("http://localhost:3000/podcastData.json")
        .then(r => r.json())
        .then(data =>
            res.status(200).json({
                message: data,
            })
        );
}

export default podcastFetch