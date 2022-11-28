import CheckmateAudio from "../assets/sounds/checkmate.mp3"
import ChessMoves from "./moves/ChessMoves";

export default function Checkmate(click, positionColor, colorInRGB){

    const allCols = document.querySelector(".chess-board").children;
    const el = document.getElementById(click.id);

    if(el.children[0]){
        const row = parseInt(el.id[1]);
        const col = parseInt(el.id[3]);
        const piece = el.children[0].children[1].className;

        ChessMoves(row, col, piece, positionColor);

    Array.from(allCols).forEach(element => {
        if(element.style.backgroundColor === colorInRGB && element.children[0]){
            const checkmate = element.children[0].children[1].className;
            if(checkmate.includes("king")){
                element.style.backgroundColor = "#f14c4c";
                let audio = new Audio(CheckmateAudio);
                audio.play();
                setTimeout(()=>{
                    element.style.backgroundColor = "";
                }, 300);
            }
        }
        if(element.style.backgroundColor === colorInRGB){
            element.style.backgroundColor = "";
        }
        
    });
}
}