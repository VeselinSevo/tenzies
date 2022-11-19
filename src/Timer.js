import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTrophy } from '@fortawesome/free-solid-svg-icons'

export default function Timer(props) {
    const time = JSON.parse(localStorage.getItem('time'))
    const bestMin = Math.floor(time / 60)
    const bestSec = Math.floor(time % 60)

    const min = Math.floor(props.time / 60)
    const sec = Math.floor(props.time % 60)

    return (
        <div className="timer-container stats-container">
            <div className='timer__record stat'>
                <FontAwesomeIcon icon={faTrophy} size="xs"/>
                <div className="stat-title">Best</div>
                <div className="stat-value">{bestMin}:{bestSec < 10 ? '0' + bestSec : bestSec}</div>
            </div>
            <div className="timer__time stat">
                <FontAwesomeIcon icon={faClock} size="xs"/>
                <div className="stat-title">Current</div>
                <div className="stat-value">{min}:{sec < 10 ? '0' + sec : sec}</div>
            </div>
            <div className="timer__stop" onClick={props.changeStop}>{props.stop ? "Unpause Time" : "Pause Time"}</div>
        </div>
    )
}