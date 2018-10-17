var serial; 
var sensorValue = 0;		

function setup() {
  createCanvas(320, 240);
  serial = new p5.SerialPort(); 
  serial.on('list', printList);  
  serial.on('data', serialEvent);
	serial.list();                        
	serial.open("/dev/cu.usbserial-DN050GXS"); 
}

function draw() {
  background("#2307AF");
	fill(255);
	ellipse(sensorValue, height/2, 20, 20);
  text(sensorValue, 20, 20);
}


function printList(portList) {
 for (var i = 0; i < portList.length; i++) {
	
 	println(i + " " + portList[i]);
 }
}

function serialEvent() {
	var inString = serial.readLine();
	if (inString.length > 0) {
	  inString = inString.trim();
		sensorValue = Number(inString);
   
	}
}