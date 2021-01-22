 var stats = { nickname: '',mana: 1, health: 1, attack: 1};
 var pkt = 10
 
 function print_stats() {
 	document.getElementById("error").innerHTML = "";
 	document.getElementById("stats").innerHTML = "start points: "+ pkt +"<br>character name: "+stats.nickname+" mana: "+stats.mana+" health: "+stats.health+" attack: "+stats.attack;
 }

function create_name() {
	stats.nickname = document.getElementById("charname").value
	print_stats();
}

 function add(element) {
 if(pkt>=1){
 	pkt -= 1;
 	stats[element] += 1;
 	print_stats();
 }else{
 	document.getElementById("error").innerHTML = "you spent all of your points";
 }
 }

 function sub(element) {
 if(stats[element]>=2){	
 	pkt += 1;
 	stats[element] -= 1;
 	print_stats();
 	}
 else{
 	document.getElementById("error").innerHTML = "bad value of attribute: must be more than 0";
 }
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
	var roomClass = document.createAttribute("class");
	roomClass.value = "room";
	room.setAttributeNode(roomClass);
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
		stats.nickname = repl.nickname;
		row.appendChild(name);
		var attack = document.createElement("td");
		attack.innerHTML = "damage "+repl.attack;
		stats.attack = repl.attack;
		row.appendChild(attack);
		var mana = document.createElement("td");
		mana.innerHTML = "mana "+repl.mana;
		stats.mana = repl.mana;
		row.appendChild(mana);
		var health = document.createElement("td");
		health.innerHTML = "health "+repl.health;
		stats.health = repl.health;
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

	console.log(room);
	console.log(stats);
	if((room==9 && stats.health==1)||(room==5 && stats.health<=2)){
		fetch("https://secure-woodland-49310.herokuapp.com/room/"+11, {
		method: "GET",
   		headers: {
    		'Content-Type': 'application/json',
  		}
	}).then(response => response.json())
	  .then(data => game_replace("corridors",data,'buttons'));
	}
	else
	{
	fetch("https://secure-woodland-49310.herokuapp.com/room/"+room, {
		method: "GET",
   		headers: {
    		'Content-Type': 'application/json',
  		}
	}).then(response => response.json())
	  .then(data => game_replace("corridors",data,'buttons'));
	}
 }