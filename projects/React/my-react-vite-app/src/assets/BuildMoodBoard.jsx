import "./BuildMoodBoard.css"



export function MoodBoardItem({color,image,description}){

    return(
        <div className="mood-board-item"
            style={{backgroundColor:`${color}`}}>
            <img className="mood-board-image" 
            src={image} 
            alt={description} />
            <h3 className="mood-board-text">{description}</h3>

        </div>

    )
}

export default function MoodBoard(){
    const text ='Destination Mood Board';

    const stru =[
        {
            id:1,
            color:"#23445d",
            image:"https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg",
            description:"first",
        },
        {
            id:2,
            color:"#45776d",
            image:"https://cdn.freecodecamp.org/curriculum/labs/shore.jpg",
            description:"image for me",
        },
        {
            id:3,
            color:"#f5634f",
            image:"https://cdn.freecodecamp.org/curriculum/labs/grass.jpg",
            description:"hoody man for ity",
        },
    ]
    return (
        <div>
            <h1 className="mood-board-heading">{text}</h1>
            <div className="mood-board">
                <MoodBoardItem 
                color={stru[0].color} 
                image={stru[0].image} 
                description={stru[0].description} />
                <MoodBoardItem 
                color={stru[1].color} 
                image={stru[1].image} 
                description={stru[1].description} />
                <MoodBoardItem 
                color={stru[2].color} 
                image={stru[2].image} 
                description={stru[2].description} />
            </div>
        </div>
    )
}