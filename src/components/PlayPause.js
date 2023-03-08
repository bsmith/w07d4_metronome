import './PlayPause.css';

const PlayPause = ({isPlaying, onClick}) => {
    if (isPlaying) {
        return <button className="Play" onClick={onClick}><img src={process.env.PUBLIC_URL + '/pause-icon.png'} alt="Pause" /></button>
    } else {
        return <button className="Pause" onClick={onClick}><img src={process.env.PUBLIC_URL + '/play-icon.png'}
         alt="Play" /></button>
    }
}

export default PlayPause;