var res = document.querySelector('#res')
var players = []
var vitorias = 0
var derrotas = 0
var empates = 0

function addJogador () {
	players.push(prompt('Nome do jogador 1: '))
	players.push(prompt('Nome do jogador 2: '))	
	for (var i = 1; i <= players.length; i++) {
		var itemNome = document.createElement('span')
		var itemWins = document.createElement('p')
		var itemGive = document.createElement('p')
		var itemSame = document.createElement('p')
		itemNome.innerText = players[i-1]
		var v = 'vit'+i
		var d = 'der'+i
		var e = 'emp'+i
		itemWins.innerHTML = `Vitórias: <strong id=${v}> ${vitorias} </strong>`
		itemGive.innerHTML = `Derrotas: <strong id=${d}> ${derrotas} </strong>`
		itemSame.innerHTML = `Empates: <strong id=${e}> ${empates} </strong>`
		itemNome.setAttribute('class', 'nomeJog')
		resJog = '#resJog'+i
		resJogs = document.querySelector(resJog)
		resJogs.appendChild(itemNome)
		resJogs.appendChild(itemWins)
		resJogs.appendChild(itemGive)
		resJogs.appendChild(itemSame)
	}
}

var elementos = [1,2,3,4,5,6,7,8,9]
marca = 'O'
var j = [] //
var p = []
var vez1 = document.querySelector('#vez1')
var vez2 = document.querySelector('#vez2')
var win1 = document.querySelector('#bullJog1')
var win2 = document.querySelector('#bullJog2')
var winMsg1 = document.querySelector('#msgJog1')
var winMsg2 = document.querySelector('#msgJog2')

function jogada(idJogada) {
	for (var i = 0; i <= elementos.length; i++) {
		if (idJogada == elementos[i]) {
			var e = 'e'+elementos[i]
			getE = document.querySelector('#'+e)
			if (getE.innerHTML == '') {
				if (marca == 'X') {
					marca = 'O'
					vez1.style.color = 'green'
					vez2.style.color = '#bbb'
					win1.style.color = '#555'
					win2.style.color = '#eee'
				} else {
					marca = 'X'
					vez2.style.color = 'green'
					vez1.style.color = '#bbb'
					win2.style.color = '#555'
					win1.style.color = '#eee'
				}
				getE.innerHTML = marca
				j.push(marca)

				for (var c = 0; c <= elementos.length; c++) {
					if (e == 'e'+c) {
						p[c] = marca
						if (j.length >= 5) {
							if ((p[1]=='X' && p[4]=='X' && p[7]=='X') || (p[2]=='X' && p[5]=='X' && p[8]=='X') || (p[3]=='X' && p[6]=='X' && p[9]=='X') || (p[1]=='X' && p[2]=='X' && p[3]=='X') || (p[4]=='X' && p[5]=='X' && p[6]=='X') || (p[7]=='X' && p[8]=='X' && p[9]=='X') || (p[1]=='X' && p[5]=='X' && p[9]=='X') || (p[3]=='X' && p[5]=='X' && p[7]=='X')) {
								win1.style.color = 'green'
								win2.style.color = 'red'
								winMsg1.style.color = '#006600'
								winMsg2.style.color = '#aa0000'
								winMsg1.innerHTML = `<strong>${players[0]}</strong> ganhou`
								winMsg2.innerHTML = `<strong>${players[1]}</strong> perdeu`

								var vit = document.querySelector('#vit1')
								var v = Number(vit.innerText)
								vit.innerText = v+1
								var der = document.querySelector('#der2')
								var d = Number(der.innerText)
								der.innerText = v+1 

								j = []
								p = []

							} else if ((p[1]=='O' && p[4]=='O' && p[7]=='O') || (p[2]=='O' && p[5]=='O' && p[8]=='O') || (p[3]=='O' && p[6]=='O' && p[9]=='O') || (p[1]=='O' && p[2]=='O' && p[3]=='O') || (p[4]=='O' && p[5]=='O' && p[6]=='O') || (p[7]=='O' && p[8]=='O' && p[9]=='O') || (p[1]=='O' && p[5]=='O' && p[9]=='O') || (p[3]=='O' && p[5]=='O' && p[7]=='O')) {
								win2.style.color = 'green'
								win1.style.color = 'red'
								winMsg2.style.color = '#006600'
								winMsg1.style.color = '#aa0000'
								winMsg2.innerHTML = `<strong>${players[1]}</strong> ganhou`
								winMsg1.innerHTML = `<strong>${players[0]}</strong> perdeu`

								var vit = document.querySelector('#vit2')
								var v = Number(vit.innerText)
								vit.innerText = v+1 
								var der = document.querySelector('#der1')
								var d = Number(der.innerText)
								der.innerText = v+1

								j = []
								p = []
							} else if (j.length == elementos.length) {
								win2.style.color = 'orange'
								win1.style.color = 'orange'
								winMsg2.style.color = 'darkorange'
								winMsg1.style.color = 'darkorange'
								winMsg2.innerHTML = `<strong>Empate</strong>`
								winMsg1.innerHTML = `<strong>Empate</strong>`

								var emp1 = document.querySelector('#emp1')
								var e1 = Number(emp1.innerText)
								emp1.innerText = e1+1 
								var emp2 = document.querySelector('#emp2')
								var e2 = Number(emp2.innerText)
								emp2.innerText = e2+1

								j = []
								p = []
							};
						}
					}
				}
			}
		}
	}
}

function fimJogo () {
	j = []
	p = []
	for (var i = 1; i <= elementos.length; i++) {
		var e = '#e'+i
		document.querySelector(e).innerHTML = ''
	}
	winMsg2.innerHTML = ''
	winMsg1.innerHTML = ''
}
