import React from 'react';

const PodcastContext = React.createContext({
    podcasts: [], // array of objects
    loadPodcasts: () => { } // function
});

export default PodcastContext;