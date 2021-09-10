import React, { useState, useRef, useCallback, useEffect } from 'react';
import PodcastContext from './podcast-context';
import Loading from '../parts/Common/Loading';

const PodcastContextProvider = (props) => {
    const mounted = useRef(false)
    const [podcastData, setPodcastData] = useState([]);
    const [loadingState, setLoadingState] = useState(false);
    const [errorState, setErrorState] = useState(false);

    const fetchingData = useCallback(
        async () => {
            setLoadingState(true)
            try {
                const response = await fetch("/api/podcastsFetch")
                if (!response.ok) {
                    throw new Error("Something went wrong")
                }
                const data = await response.json();

                if (mounted.current) {
                    setPodcastData(data.message);
                }
            } catch (error) {
                setErrorState(true);
            }
            setLoadingState(false)
        },
        [],
    )

    useEffect(() => {
        mounted.current = true;
        fetchingData();
        return () => mounted.current = false;
    }, [fetchingData]);

    function onLoadPodcastsHandler(data) {
        setPodcastData(data)
    }

    const podcastStoreValue = {
        podcasts: podcastData,
        loadPodcasts: onLoadPodcastsHandler,
    }

    if (loadingState) {
        return (
            <PodcastContext.Provider value={podcastStoreValue}>
                <Loading />
            </PodcastContext.Provider>
        )
    }

    return (
        <PodcastContext.Provider value={podcastStoreValue}>
            {props.children}
        </PodcastContext.Provider>
    );
}

export default PodcastContextProvider;
