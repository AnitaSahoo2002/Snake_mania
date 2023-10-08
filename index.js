//game constants and variables
console.log("press any key to start the game")
let inputdir={x:0,y:0};  //game jab start hoga snake rest mei hoga
let foodsound=new Audio('food.wav');
let gameoversound=new Audio('game-over-38511.mp3');
let music=new Audio('game-music-loop-19-153393.mp3');
let speed=5;
let score=0;
let lastpaintime=0;
let snakearr=[
    {x:13,y:15}            //coordinates of snake
]
let food={x:6,y:7};    //coordinates of food

//game function
const  main=(ctime)=>{
window.requestAnimationFrame(main);
// console.log(ctime);
if((ctime-lastpaintime)/1000<1/speed){
    return;
}
lastpaintime=ctime;
gameEngine();

}
const isCollide=(snake)=>{
//if snake bump into itself
for(let i=1;i<snakearr.length;i++){
    if(snake[i].x===snake[0].x && snake[i].y===snake[0].y ){
        return true;
    }
}
//if snake is bumped into wall
    if(snake[0].x>=18 || snake[0].x<=0 || snake[0].y>=18 || snake[0].y<=0){
return true;
    }

}
const gameEngine=()=>{
    //part 1 updating the snake array
    //if snake collides
    if(isCollide(snakearr)){
        gameoversound.play();
        music.pause();
        inputdir={x:0,y:0};
        alert("Game over! Press any key to play a game");
        snakearr=[{x:13,y:15}];
        music.play();
        score=0;
    }
    //if snake eat the food
    if(snakearr[0].y===food.y && snakearr[0].x===food.x){
        foodsound.play();
        music.pause();
        snakearr.unshift({x:snakearr[0].x + inputdir.x,y:snakearr[0].y + inputdir.y})
        let a=2;
        let b=16;
        food={x:Math.round(a+(b-a)*Math.random()),y:Math.round(a+(b-a)*Math.random())}  //formula to generate random number between a and b
++score;
scorebox.innerHTML="score:"+score;
    }
    //moving the snake
    music.play();
    for(let i=snakearr.length-2;i>=0;i--){
        // const element =array[i];
        snakearr[i+1]={...snakearr[i]};
    }
    snakearr[0].x+=inputdir.x;
    snakearr[0].y+=inputdir.y;
    //part 2 display the snake 
    board.innerHTML=""; //TO EMPTY THE BOARD
    snakearr.forEach((e,index)=>{
        snakeElement=document.createElement('div');
        snakeElement.style.gridRowStart=e.y;
        snakeElement.style.gridColumnStart=e.x;
        
        if(index===0){
            snakeElement.classList.add('head')
        }
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);
    })
    //display the food
    
        foodElement=document.createElement('div');
        foodElement.style.gridRowStart=food.y;
        foodElement.style.gridColumnStart=food.x;
        foodElement.classList.add('food');
        board.appendChild(foodElement);
    
}











//main logic
// let hscor=localStorage.getItem("highscore");
// if(hscore===null){
//     hscoreval=0;
//     localStorage.setItem("highscore",JSON.stringify(hscoreval))
// }
// else{
//     hscoreval=JSON.parse(hscore)
//     highscore.innerHTML="HIscore: "+highscore;
// }
window.requestAnimationFrame(main);  //use this frame for animation takes a function as argument
window.addEventListener('keydown',e=>{   //in addevent function first argument is event second argument is arrow function
inputdir={x:0,y:1}  //start the game
// moveSound.play();
switch(e.key){
    case "ArrowUp":
    console.log("Arrowup");
    inputdir.x=0;
    inputdir.y=-1;
    break;

    case "ArrowDown":
    console.log("Arrowdown");
    inputdir.x=0;
    inputdir.y=1;
    break;

    case "ArrowLeft":
    console.log("Arrowleft");
    inputdir.x=-1;
    inputdir.y=0;
    break;

    case "ArrowRight":
    console.log("Arrowright");
    inputdir.x=1;
    inputdir.y=0;
    break;

    default:
        break;

}

})