console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============
	function makeMiddleEarth() {
		console.log('1: makeMiddleEarth')
	
		// 1. create a section tag with an id of middle-earth
		const section = document.createElement('section')
		section.id = 'middle-earth'
		// 2. use a for loop to iterate over the lands array that does the following:
		for (let i = 0; i < lands.length; i ++) {
			//   2a. creates an article tag (there should be one for each land when the loop is done)
			const landArticle = document.createElement('article')
			//   2b. gives each land article an `id` tag of the corresponding land name
			landArticle.id = lands[i]
			//   2c. includes an h1 with the name of the land inside each land article
			const landName = document.createElement('h1')
			landName.textContent = lands[i]
			landArticle.appendChild(landName)
			//   2d. appends each land to the middle-earth section
			section.appendChild(landArticle)
		}
	
		// 3. append the section to the body of the DOM.
		document.body.appendChild(section)
	}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	const theShire = document.querySelector('#The-Shire')
	console.log(theShire)
	// display an `unordered list` of hobbits in the shire
	const ulHobbit = document.createElement('ul')
	ulHobbit.id = 'hobbit-list'
	for (let i=0; i<hobbits.length; i++) {
		const liHobbit = document.createElement('li')
		liHobbit.className = 'hobbit'
		liHobbit.textContent = hobbits[i]
		liHobbit.id = hobbits[i]
		ulHobbit.appendChild(liHobbit)
	}
	theShire.appendChild(ulHobbit)
	// give each hobbit a class of `hobbit`
	
	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div')
	theRing.id = 'the-ring'
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.className= 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	const hobbitList = document.querySelectorAll("li.hobbit")
	//console.log(hobbitList)
	const frodo=hobbitList[0]
	frodo.appendChild(theRing)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	const mordor = document.querySelector('#Mordor')
	// display an unordered list of baddies in Mordor
	const ulBaddies = document.createElement('ul')
	ulBaddies.id = 'baddy-list'
	for (let i=0; i<baddies.length; i++) {
		const liBaddies = document.createElement('li')
		liBaddies.className = 'baddy'
		liBaddies.textContent = baddies[i]
		liBaddies.id = baddies[i]
		ulBaddies.appendChild(liBaddies)
	}
	mordor.appendChild(ulBaddies)
	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
	const rivendell = document.querySelector("#Rivendell")
	// create an `aside` tag
	const aside = document.createElement('aside')
	const ulBuddies = document.createElement('ul')
	ulBuddies.id = 'buddy-list'
	for (let i=0; i<buddies.length; i++){
		const liBuddies=document.createElement('li')
		liBuddies.className = 'buddy'
		liBuddies.textContent = buddies[i]
		liBuddies.id = buddies[i]
		ulBuddies.appendChild(liBuddies)
	}
	aside.appendChild(ulBuddies)
	rivendell.appendChild(aside)

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const theShire = document.querySelector('#The-Shire')
	const theHobbits = theShire.querySelector('ul')
	// const rivendell = document.querySelector('#Rivendell')
	const aside = document.querySelector('aside')
	// assemble the `hobbits` and move them to `rivendell`
	theShire.removeChild(theHobbits)
	aside.appendChild(theHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	const aragorn = document.getElementById('Strider')
	aragorn.innerText = 'Aragorn'
	aragorn.id = 'Aragorn'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const rivendell = document.getElementById('Rivendell')
	const fellowship = document.createElement('div')
	fellowship.id = 'the-fellowship'
	rivendell.appendChild(fellowship)
	const fellowshipList = document.createElement('ul')
	fellowshipList.id = "fellowship-list"
	fellowship.appendChild(fellowshipList)
	const theHobbits = document.querySelectorAll('.hobbit')
	const theBuddies = document.querySelectorAll('.buddy')
	console.log(theBuddies)
	console.log(theHobbits)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	for (let i=0; i<buddies.length;i++){
		fellowshipList.appendChild(theBuddies[i])
		alert(theBuddies[i].id+" has joined your party")
	}
	for (let i=0; i<hobbits.length;i++){
		fellowshipList.appendChild(theHobbits[i])
		alert(theHobbits[i].id+" has joined your party")
	}
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalfWhite = document.getElementById('Gandalf the Grey')
	gandalfWhite.innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalfWhite.style.backgroundColor = 'white'
	gandalfWhite.style.border = '3px solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been blown!')
	// Boromir's been killed by the Uruk-hai!
	alert('Boromir is slain!')
	// Remove `Boromir` from the Fellowship
	const boromir = document.getElementById('Boromir')
	const fellowship = document.getElementById('fellowship-list')
	fellowship.removeChild(boromir)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	const mordor = document.getElementById('Mordor')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const frodo = document.getElementById('Frodo Baggins')
	const sam = document.getElementById('Samwise "Sam" Gamgee')
	mordor.appendChild(frodo)
	mordor.appendChild(sam)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mtDoom = document.createElement('div')
	mtDoom.id = 'mount-doom'
	mordor.appendChild(mtDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div')
	gollum.id = 'gollum'
	const mordor = document.getElementById('Mordor')
	mordor.appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring')
	gollum.appendChild(theRing)
	// Move Gollum into Mount Doom
	const mtDoom = document.getElementById('mount-doom')
	mtDoom.appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const mtDoom = document.getElementById('mount-doom')
	const gollum = document.getElementById('gollum')
	mtDoom.removeChild(gollum)
	// Move all the `hobbits` back to `the shire`
	const theHobbits = document.querySelectorAll('.hobbit')
	const homeList = document.createElement('ul')
	const theShire = document.querySelector('#The-Shire')
	for (let i=0; i<hobbits.length; i++) {
		homeList.appendChild(theHobbits[i])
	}
	theShire.appendChild(homeList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
