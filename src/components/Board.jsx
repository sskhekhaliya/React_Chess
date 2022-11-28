import "./Board.css";
import React from 'react';
import Rook from "../assets/rook.svg";
import Knight from "../assets/knight.svg";
import Bishop from "../assets/bishop.svg";
import Queen from "../assets/queen.svg";
import King from "../assets/king.svg";
import Pawn from "../assets/pawn.svg";
import Play from "./Play";

export default function Board(){

    const pieces = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
    const names = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

    localStorage.clear();

    

    return (
        <>
        <div id="winner">
            <h1>WIN!</h1>
            <button className="reset" onClick={()=>window.location.reload()}>Re-play</button>
        </div>
        <div className="container">
            <div id="black-collector"></div>
        <div className="chess-board">
            {
                Array(8).fill(1).map((row, r) =>
                
                    Array(8).fill(1).map((col, c) => 
                    
                        r%2===0 ?
                        (
                            c%2===0 ?
                            <div id={"R" + (r+1) + "C" + (c+1)} className="white-col" key={r.toString() + c.toString()} onClick={Play}>
                                {r === 0 && <div className="piece-box"><div></div><img className={"black-player " + names[c]} src={pieces[c]} alt={"black " + names[c]} /></div>}
                                {r === 6 && <div className="piece-box"><div></div><img className="white-player pawn" src={Pawn} alt="white pawn"/></div>}
                            </div>
                            :
                            <div id={"R" + (r+1) + "C" + (c+1)} className="black-col" key={r.toString() + c.toString()} onClick={Play}>
                                {r === 0 && <div className="piece-box"><div></div><img className={"black-player " + names[c]} src={pieces[c]} alt={"black " + names[c]}/></div>}
                                {r === 6 && <div className="piece-box"><div></div><img className="white-player pawn" src={Pawn} alt="white pawn"/></div>}
                            </div>
                        )
                        :
                        (
                            c%2===0 ?
                            <div id={"R" + (r+1) + "C" + (c+1)} className="black-col" key={r.toString() + c.toString()} onClick={Play}>
                                {r === 1 && <div className="piece-box"><div></div><img className="black-player pawn" src={Pawn} alt="black pawn" /></div>}
                                {r === 7 && <div className="piece-box"><div></div><img className={"white-player " + names[c]} src={pieces[c]} alt={"white " + names[c]}/></div>}
                            </div>
                            :
                            <div id={"R" + (r+1) + "C" + (c+1)} className="white-col" key={r.toString() + c.toString()} onClick={Play}>
                                {r === 1 && <div className="piece-box"><div></div><img className="black-player pawn" src={Pawn} alt="black pawn" /></div>}
                                {r === 7 && <div className="piece-box"><div></div><img className={"white-player " + names[c]} src={pieces[c]} alt={"white " + names[c]}/></div>}
                            </div>
                        )
                    )
                )
            }
        </div>
        <div id="white-collector"></div>
        </div>
        </>
    )
}