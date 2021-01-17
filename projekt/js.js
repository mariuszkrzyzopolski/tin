 var stats = { nickname: '',mana: 0, health: 0, attack: 0};
 var pkt = 10
 
 function print_stats() {
 	document.getElementById("stats").innerHTML = "start points: "+ pkt +"<br>"+JSON.stringify(stats); 
 }

function create_name() {
	stats.nickname = document.getElementById("charname").value
	print_stats();
}

 function add(element) {
 	pkt -= 1;
 	stats[element] += 1;
 	print_stats();
 }

 function sub(element) {
 	pkt += 1;
 	stats[element] -= 1;
 	print_stats();
 }


 function end_creation() {
 	url = "https://secure-woodland-49310.herokuapp.com/player";
 	fetch(url, {
		method: "POST",
   		headers: {
    		'Content-Type': 'application/json',
  		},
		body: JSON.stringify(stats),
	})
}
function room_buttons(container,corridor,direction){
	var room = document.createElement("button");
	var att = document.createAttribute("onclick");
	att.value = "game("+corridor+")";
	room.setAttributeNode(att);
	room.innerHTML = direction 
	container.appendChild(room);
	return container  
}

function game_replace(element,repl,format){
	if (format=='buttons') {

		var container = document.createElement("div");
		var title = document.createElement("h1");
		title.innerHTML = repl.title;
		container.appendChild(title);
		var description = document.createElement("p");
		description.innerHTML = repl.description;
		container.appendChild(description);
		container = room_buttons(container,repl.listOfRooms[0],"left");
		container = room_buttons(container,repl.listOfRooms[1],"forward");
		container = room_buttons(container,repl.listOfRooms[2],"right");
		
		
	}
	else if(format=='table'){
		var container = document.createElement("table");
		var row = document.createElement("tr");
		var name = document.createElement("td");
		name.innerHTML = "character name "+repl.nickname;
		row.appendChild(name);
		var attack = document.createElement("td");
		attack.innerHTML = "damage "+repl.attack;
		row.appendChild(attack);
		var mana = document.createElement("td");
		mana.innerHTML = "mana "+repl.mana;
		row.appendChild(mana);
		var health = document.createElement("td");
		health.innerHTML = "health "+repl.health;
		row.appendChild(health);
		container.appendChild(row);

	}
	document.getElementById(element).innerHTML = "";
	document.getElementById(element).appendChild(container);
	
}

 function game(room) {
 	fetch("https://secure-woodland-49310.herokuapp.com/player", {
		method: "GET",
   		headers: {
    		'Content-Type': 'application/json',
  		}
	}).then(response => response.json())
	  .then(data => game_replace("game",data[data.length - 1],'table'));

	fetch("https://secure-woodland-49310.herokuapp.com/room/"+room, {
		method: "GET",
   		headers: {
    		'Content-Type': 'application/json',
  		}
	}).then(response => response.json())
	  .then(data => game_replace("corridors",data,'buttons'));
 }