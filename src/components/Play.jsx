
import Checkmate from "./Checkmate";
import ChessMoves from "./moves/ChessMoves";
import WinAudio from "../assets/sounds/win.wav"

var positionColor = "#76fb646e";
var colorInRGB = "rgba(118, 251, 100, 0.43)";

export default function Play(e){
    
    const allCols = document.querySelector(".chess-board").children;

    if(e.target.parentElement.className === "piece-box"){
        
        const parentCol = e.target.parentElement.parentElement;

        if(localStorage.getItem("chessPiece") && parentCol.id !== localStorage.getItem("chessPiece") && parentCol.style.backgroundColor === colorInRGB){
            piecesPattern(e);
        } else {
            const click = e.target.parentElement.parentElement;

        const id = click.id;
        const row = parseInt(id[1]);
        const col = parseInt(id[3]);

        localStorage.setItem("chessPiece", id);
            
        Array.from(allCols).forEach(element => {
            element.style.backgroundColor = "";
            if(element.id === id){
                element.style.backgroundColor = positionColor;
            }
        });

        const piece = click.children[0].children[1].className;

        ChessMoves(row, col, piece, positionColor);
        
        }
    } else {

        piecesPattern(e);
    }
    
}

function piecesPattern(e){

    const allCols = document.querySelector(".chess-board").children;
    const click = e.target;
    const selectedID = localStorage.getItem("chessPiece");
    const blackContainer = document.getElementById("black-collector");
    const whiteContainer = document.getElementById("white-collector");
    const winner = document.getElementById("winner");

    if(click.parentElement.className === "piece-box" && click.parentElement.parentElement.style.backgroundColor === colorInRGB){
        const parentEle = click.parentElement.parentElement;
        if(click.nextSibling.className.includes("black")){
            whiteContainer.appendChild(click.parentElement);
        } else {
            blackContainer.appendChild(click.parentElement);
        }
        let winingAudio = new Audio(WinAudio);
        if(click.nextSibling.className === "black-player king"){
            winner.children[0].innerText = "White WIN!";
            winner.style.display = "flex";
            winingAudio.play();
        } else if(click.nextSibling.className === "white-player king"){
            winner.children[0].innerText = "Black WIN!";
            winner.style.display = "flex";
            winingAudio.play();
        }

        
        

        parentEle.click();
        
    } else if(click.style.backgroundColor === colorInRGB){
            const selectedPiece = document.getElementById(selectedID).children[0];
            click.appendChild(selectedPiece);
        }

        Array.from(allCols).forEach(element => {
            element.style.backgroundColor = "";
        });

    //Checkmate
    Checkmate(click, positionColor, colorInRGB);

    localStorage.clear();
}

