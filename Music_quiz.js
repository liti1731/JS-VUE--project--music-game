var app=new Vue({
	el:"#app",
	data:{    test:0,
            music:new Audio("1.mp3"),
            img: "bg.png",
            buttonImg:"button.png",//start button
            buttonPlay:"button.png",//song playing button
            player:"",
            player1:"",//player name values
            player2:"",//player name values
            winner:"",//winner name values
            checkForm:false,//input name form
            checkInput:false,//shows when players forgot to type in names
            checkButton:true,//start-button
            checkName:false,//play page
            checkStartPlay:false,//after play music, cannot click again
            checkQ:false,//show question
            checkScore:false,//did you answer correctly?
            checkPerson:false,//check which person add score
            checkShow:false,//show add one score
            checkCheck:false,//check if press the get-chance button before play music
            checkWin:false,//shows winning page
            checkSpace:false,//adjust space between html elements in win page depending on outcome
            checkText:false,//check and show push-first text
            checkNextSong:false,//check and show next-song button
            checkTime:false,// shows page if player was too late to click the button
            scoreOne:0,//score of player one
            scoreTwo:0,//score of player two
            songsPlayed:[],//array for already played songs
            songs:[
            {file: new Audio('1.mp3'), artist: "ABBA", song: "Lay All Your Love On Me"},
            {file: new Audio('2.mp3'), artist: "Aretha Franklin", song: "Respect"},
            {file: new Audio('3.mp3'), artist: "Billy Idol", song: "Rebel Yell"},
            {file: new Audio('4.mp3'), artist: "The Black Eyed Peas", song: "Don't Phunk With My Heart"},
            {file: new Audio('5.mp3'), artist: "Blink-182", song: "What's My Age Again?"},
            {file: new Audio('6.mp3'), artist: "Blur", song: "Song 2"},
            {file: new Audio('7.mp3'), artist: "Breakbot", song: "Baby I'm yours"},
            {file: new Audio('8.mp3'), artist: "Britney Spears", song: "Womanizer"},
            {file: new Audio('9.mp3'), artist: "David Bowie", song: "The Man Who Sold The World"},
            {file: new Audio('10.mp3'), artist: "The Supremes", song: "Where Did Our Love Go?"},
            {file: new Audio('11.mp3'), artist: "Arctic Monkeys", song: "Do I Wanna Know?"},
            {file: new Audio('12.mp3'), artist: "Earth, Wind & Fire", song: "September"},
            {file: new Audio('13.mp3'), artist: "Elvis Costello", song: "Watching The Detectives"},
            {file: new Audio('14.mp3'), artist: "Fergie", song: "London Bridge"},
            {file: new Audio('15.mp3'), artist: "Iggy Pop", song: "Lust For Life"},
            {file: new Audio('16.mp3'), artist: "Justin Timberlake", song: "What Goes Around Comes Around"},
            {file: new Audio('17.mp3'), artist: "Lady Gaga", song: "LoveGame"},
            {file: new Audio('18.mp3'), artist: "The Cardigans", song: "Lovefool"},
            {file: new Audio('19.mp3'), artist: "Mott The Hoople", song: "All The Young Dudes"},
            {file: new Audio('20.mp3'), artist: "Muse", song: "Hysteria"},
            {file: new Audio('21.mp3'), artist: "P!nk", song: "So What"},
            {file: new Audio('22.mp3'), artist: "Panic! At The Disco", song: "I Write Sins Not Tragedies"},
            {file: new Audio('23.mp3'), artist: "Pixies", song: "Where Is My Mind?"},
            {file: new Audio('24.mp3'), artist: "Prince", song: "I Wanna Be Your Lover"},
            {file: new Audio('25.mp3'), artist: "Queen", song: "Killer Queen"},
            {file: new Audio('26.mp3'), artist: "Sex Pistols", song: "Anarchy In The UK"},
            {file: new Audio('27.mp3'), artist: "Siouxsie And The Banshees", song: "Hong Kong Garden"},
            {file: new Audio('28.mp3'), artist: "Stevie Wonder", song: "Sir Duke"},
            {file: new Audio('29.mp3'), artist: "The Beatles", song: "Stawberry Fields Forever"},
            {file: new Audio('30.mp3'), artist: "Sweet", song: "The Ballroom Blitz"},
            {file: new Audio('31.mp3'), artist: "T.rex", song: "Children Of The Revolution"},
            {file: new Audio('32.mp3'), artist: "The Buzzcocks", song: "Ever Fallen in Love (With Someone You Shouldn't've Fallen in Love With)"},
            {file: new Audio('33.mp3'), artist: "The Clash", song: "London Calling"},
            {file: new Audio('34.mp3'), artist: "The Rolling Stones", song: "Gimme Shelter"}],// out music base
            lose:new Audio('lose.mp3'),// sound played when you dont score a point
            hee:new Audio('hee.mp3'),// sound played when you score a point
            songTitle:"",// tittle of randomized song 
            random:"",// randomized song 
            randomSong:"",
            played:"",
            oneScoreText:"",
            turns:0 // counts number of turns
	},
	methods:{
            getName: function(){
                this.checkForm=true;
                this.checkButton=false;
            },//for the start button
            submit: function(){
                  if (this.player1==""||this.player2=="") {
                        this.checkInput=true;
                  }else{
                    this.checkForm=false;
                    this.checkName=true;
                    this.checkButton=false;
                    this.checkStartPlay=true;
                    this.checkShow=false;
                    this.checkCheck=false;
                    this.checkTime=false;
                    this.checkNextSong=false;
                    this.checkText=false;
                  }  
            },//for submit names
            playMusic:function(){
                  this.checkName=true;
                  this.random=Math.floor(Math.random()*this.songs.length);
                  this.randomSong= this.songs[this.random];
                  this.randomSong.file.play();
                  this.played = this.songs.splice(this.random,1);
                  this.songsPlayed.push(this.played);
                  this.checkStartPlay=false;//close the play button
                  this.checkText=true;
                  this.checkCheck=true;//open get-chance button
                  this.turns++;
                  setTimeout(this.tooLate,16000);
                 
            },//for playing music page
            tooLate:function(){
               if (this.randomSong.file.ended==true) {
                      this.checkName=false;
                      this.checkTime=true;
                      this.checkNextSong=true;
                      this.checkText=false;    
                  if (this.turns==10) {
                      this.checkNextSong=false;
                      this.checkName=false;
                      this.checkWin=true;
                      this.checkSpace=false;
                      if (this.scoreOne>this.scoreTwo) {
                          this.winner=this.player1;
                      }else if (this.scoreOne<this.scoreTwo) {
                          this.winner=this.player2;
                      }else if (this.scoreOne==this.scoreTwo) {
                          this.winner=this.player1+" and "+this.player2;// if work!!!!!!!!!!!
                      }
                  }
              }  
            },//for too late text and next song button
            moveTwo: function() {
                var widthTwo = 50;
                var idTwo = setInterval(frameTwo, 10);
                function frameTwo() {
                    if (widthTwo <= 0) {
                        clearInterval(idTwo); 
                        app.checkQ=false;
                        app.checkScore=true;
                        app.songTitle="The song's title is '"+ app.randomSong.song+"' by " + app.randomSong.artist+".";
                    } else {
                        widthTwo=widthTwo-5/100; 
                        app.$refs.myBarTwo.style.width = widthTwo + '%'; 
                    }
                }
            },//timer : Timer-Reference---https://www.w3schools.com/howto/howto_js_progressbar.asp
            player1Chance:function(){
                  if (this.checkCheck==true) {
                        this.checkName=false;
                        this.checkPerson=true;
                        this.player=this.player1;
                        this.randomSong.file.pause();  
                        this.checkQ=true;
                        this.checkText=false;
                        //this.wow.play(); change color!!!!!!!!!!
                        this.checkCheck=false;  
                        this.moveTwo();
                  }   
            },//button for press and get chance say answer
            player2Chance:function(){
                  if (this.checkCheck==true) {
                        this.checkName=false;
                        this.checkPerson=false;
                        this.player=this.player2;
                        this.randomSong.file.pause();
                        this.checkText=false;
                        //this.hee.play();change color!!!!!!!!!!!
                        this.checkQ=true;
                        this.checkCheck=false;
                        this.moveTwo();
                  }
            },//button for press and get chance say answer
      
            showAnswer: function(){
                   this.checkQ=false;
                   this.checkScore=true;
            },//for show answer
            scorePlus: function(){
                 if (this.checkPerson==true) {
                    this.scoreOne++; 
                 }else{
                    this.scoreTwo++; 
                 } 
                 this.checkScore=false;
                 this.checkShow=true;
                 this.oneScoreText=this.player+", you got one point!";
                 this.hee.play();
                 this.finishOrNot();
            },//for calcualte score
            scoreNotMinus: function(){
                  this.checkShow=true;
                  this.oneScoreText=this.player+", you didn't got the point!";
                  this.lose.play();
                  this.checkScore=false;
                  this.finishOrNot();
             },//for calcualte score
            finishOrNot: function(){
                  if (this.turns==10) {
                      this.checkShow=false;
                      this.checkWin=true;
                      this.checkSpace=true;
                      if (this.scoreOne>this.scoreTwo) {
                          this.winner=this.player1;
                      }else if (this.scoreOne<this.scoreTwo) {
                          this.winner=this.player2;
                      }else if (this.scoreOne==this.scoreTwo) {
                          this.winner=this.player1+" and "+this.player2;// if work!!!!!!!!!!!
                      }
                  }else{
                      setTimeout(this.submit,2000);
                  }
            },// winning conditions 
             playAgain: function(){
                  this.player1="";
                  this.player2="";
                  this.scoreOne=0;
                  this.scoreTwo=0;
                  this.score=0;
                  this.turns=0;
                  if(this.songs.length<10){
                         for (var i = 0; i < this.songsPlayed.length; i++) {
                             this.songs.push(this.songsPlayed[i]);   
                         }
                  }//push back arr
                  this.checkWin=false;
                  this.checkSpace=false;
                  this.getName();
             }// for restarting the game

	}
});


