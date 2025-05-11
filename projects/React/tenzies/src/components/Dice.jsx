



export default function Dice(props) {
    let styles = {backgroundColor:props.isHeld ? "greenyellow ":"white" }


    return (
        <button id={props.id} style={styles} onClick={props.HoldDice} className="dice">
            {props.value} 
        </button >
    )
    
}