import React from 'react'

export default function Die(props) {

    const styles = {
        backgroundColor: props.isHeld ? "tomato": "#FFFFFF" 
    }

    switch(props.value) {
        case 1 : return (
            <div style={styles} className='die first-face' onClick={() => props.holdDice(props.id)}>
                <span class="dot"> </span>
            </div>
        ) 
        
        case 2 : return (
            <div style={styles} className='die second-face' onClick={() => props.holdDice(props.id)}>
                <span class="dot"> </span>
                <span class="dot"> </span>
            </div>
        )
        case 3 : return (
            <div style={styles} className='die third-face' onClick={() => props.holdDice(props.id)}>
                <span class="dot"></span>
                <span class="dot"></span>
                <span class="dot"></span>
            </div>
        )
        case 4 : return (
            <div style={styles} className='die fourth-face' onClick={() => props.holdDice(props.id)}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        )
        case 5 : return (
            <div style={styles} className='die fifth-face' onClick={() => props.holdDice(props.id)}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                
                <div class="column">
                    <span class="dot"></span>
                </div>
                
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        )
        case 6 : return (
            <div style={styles} className='die sixth-face' onClick={() => props.holdDice(props.id)}>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
                <div class="column">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                </div>
            </div>
        )
        default :    
    }
}