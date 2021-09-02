import React from 'react';
import { useRouter } from 'next/router'


const Podcast = () => {

    const router = useRouter();
    console.log(router);

    const {podcastId} = router.query

    return (
        <div>
            Podcast: {podcastId}
        </div>
    );
}

export default Podcast;
