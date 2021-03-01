import changeWins from './chanceWins'

const check = (node) => {
	// node.forEach(card => console.log(card.innerHTML))

	let win = false
	changeWins.forEach((chances) => {
		let isWin = ''
		chances.forEach((change) => {
			isWin += node[change].innerHTML
		})
		if (isWin === 'XXX' || isWin === 'OOO') {
			win = true
		}
        // console.log(isWin)
	})

    if(win){
        node.forEach(card=>{
            card.innerHTML =  card.innerHTML || '-'
        })
        return win
    }else{
        const equal = []
        node.forEach(card=>equal.push(!!card.innerHTML))
        // console.log(equal)
      const isequal =   equal.every(eq=>eq ===true)
      if(isequal){

          win = 'equal'
      }
      return win
    }

    

}

export default check
