var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);app.set('port', 5000);
app.use('/', function(request, response) {
	response.sendFile(path.join(__dirname, 'index.html'));
})//starts the server.
server.listen(5000, function() {
	console.log('Starting server on port 5000');
})
server.lastUserID = 0;
server.lastgameID = 0;
server.seekingPlayers = [];
server.matches = {};
io.on('connection', (socket) => {
socket.on('seekingGame', () => {
    if (socket.player === undefined) {
        socket.player = {
            id: server.lastPlayerID++,
            choice: "",
            opponent: ""
        };
    }
        if ( opponentChoice = "" ) {
                       
            var player1Result = "";
            var player2Result = "";

            if (opponentChoice === submittedChoice) {
                socketResult = 'tie';
                player2Result = 'tie';
            }

            else {
                switch( submittedChoice ) {
                    case 'Rock':
                        if( opponentChoice == 'Paper') {
                            player1Result = 'lose';
                            player2Result = 'win';
                        }
                        
                        else {
                            player1Result = 'win';
                            player2Result = 'lose';
                        }
                        break;
                    case 'Paper':
                        if( opponentChoice == 'Scissors') {
                            player1Result = 'lose';
                            player2Result = 'win';
                        }
                        
                        else {
                            player1Result = 'win';
                            player2Result = 'lose';
                        }
                        break;
                    case 'Scissors':
                        if( opponentChoice == 'Rock') {
                            player1Result = 'lose';
                            player2Result = 'win';
                        }
                        
                        else {
                            player1Result = 'win';
                            player2Result = 'lose';
                        }
                        break;
                    default:
                        player1Result = 'tie';
                        player2Result = 'tie';
                }
            }

            socket.emit('matchResult', player1Result);
            player2.emit('matchResult', player2Result);
        }
    });
    });