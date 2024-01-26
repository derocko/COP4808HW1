import React from "react";
import Event from './Event'

const Listing = () => {
    return(
        <div className="Listing">
            <table>
                <tr>
                    <Event name='Warhammer Boca' location='Boca Raton' games ='Warhammer 40K, Age of Sigmar'/>
                    <Event name='Tower Of Games' location='Boca Raton' games='Warhammer 40K, Magic The Gathering'/>
                    <Event name='HeyWannaPlay' location='Plantation' games='Warhammer40K, Pokemon'/>
                </tr>
                <tr>
                    <Event name='GameStop Boca' location='Boca Raton' games='Pokemon, Magic The Gathering'/>
                    <Event name='Warhammer West Palm' location='West Palm Beach' games='Warhammer 40k, Age of Sigmar'/>
                    <Event name='Silverball' location='Delray Beach' games='Retro Pinball'/>
                </tr>
                <tr>
                    <Event name='Prodigy Games' location='Lake Worth Beach' games='Pokemon, Magic The Gathering'/>
                    <Event name='GameStop West Palm' location='West Palm Beach' games='Pokemon, Magic The Gathering'/>
                    <Event name='The Adventure Game Store' location='Davie' games='Dungeons and Dragons'/>
                </tr>
                <tr>
                    <Event name='Blast! Toys, Cards, and Gaming' location='Greenacres' games='Board Games, Pokemon'/>
                    <Event name='Trouble Maker' location='West Palm Beach' games='Board Games'/>
                    <Event name='Blackbeards Super Game Room' location='Lantana' games='Magic The Gathering, Board Games'/>
                </tr>
            </table>
        </div>
    )
}

export default Listing;