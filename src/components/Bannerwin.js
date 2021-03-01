import React from 'react'

export const Bannerwin = ({winner,endGame}) => {

    // console.log({winner, endGame})

    const handlerReset = ()=>{
        window.location.reload()
    }

    return (
        <>
            {endGame ? <div className="winnerContainer"> <div className="winner">
					The winner is : {winner}
                    <button onClick={handlerReset}>Play again</button>
				</div> </div>     :''
                
                 }
        </>
    )
}
