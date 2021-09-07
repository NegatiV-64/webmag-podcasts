import { useLoading, Bars } from '@agney/react-loading';
import styles from './Loading.module.css'

const Loading = () => {
    const { containerProps, indicatorEl } = useLoading({
        loading: true,
        indicator: <Bars width="50" />,
    });

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
        }} className={styles.loadingWrapper}>
            <div {...containerProps}>
                {indicatorEl}
            </div>
        </div>
    );
}

export default Loading
