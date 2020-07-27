var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 200;
var yMenu1 = 170;
var yMenu2 = 230;
var yMenu3 = 290;

var xVoltar = 15;
var yVoltar = 470;
var largura1 = 70;
var altura1 = 25;
var largura2 = 180;

var x = 400;
var y = 400;
var raioP = 35;
var x1 = 100;
var y1 = 50;
var raioI = 30;
var x2 = 300;
var y2 = 20
var raioA = 30;
var x3 = 500;
var y3 = 20;
var raioM = 15;
var x4 = 400;
var y4 = 100;
var raioIn = 30;
var imgPerso;
var imgProgra;
var imgVirus;
var imgFundo;
var imgAlcool;
var imgMasc;

var Nível = 1;
var Alcool = 0;
var Mascaras = 0;
var Vidas = 3;
var BarreirasPontos = 10;

function setup() {
  createCanvas(600, 500);
  x1 = random(600);
  y1 = random(500);
  x2 = random(600);
  y2 = random(500);
  x3 = random(600);
  y3 = random(500);
}

function preload(){
imgPerso = loadImage('character cat girl.png');
imgProgra = loadImage('foto.png');
imgVirus = loadImage('Green_Virus.png');
imgFundo = loadImage('image_05.png');
imgAlcool = loadImage('alcool_gel.webp');
imgMasc = loadImage('mascara_ed.png');
}

function draw() {
  textStyle(NORMAL);
  
  //tela de menu
  if(tela == 1);{
    background(240);
    imageMode(CENTER);
    image(imgFundo, 300, 250);
    //iniciar o jogo
    textAlign(CENTER);
    textSize(30);
    if( mouseX > xMenu && mouseX< xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){
    stroke(0);
    fill(255);
    rect(xMenu, yMenu1, largura, altura, 30);
      if(mouseIsPressed){
      tela = 2;
      }
    }
    //cor da letra, borda da letra
    fill(0);
    noStroke();
    text("Iniciar", 300, 205);
   
    //informação do jogo
     if( mouseX > xMenu && mouseX< xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){
    stroke(0);
    fill(255);
    rect(xMenu, yMenu2, largura, altura, 30);
    if(mouseIsPressed){
      tela = 3;
    }
     }
    fill(0);
    noStroke();
    text("Informações", 300, 265);
    
    //Créditos
    if( mouseX > xMenu && mouseX< xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
    stroke(0);
    fill(255);
    rect(xMenu, yMenu3, largura, altura, 30);
    if(mouseIsPressed){
      tela = 4;
    }
     }
    fill(0);
    noStroke();
    text("Créditos", 300, 325);
}
  
   
  //jogo em ação
  if(tela == 2){
  background(210,180,140);  
    if(Nível == 1){
  fill(0);
  //ellipse(x,y,2*raioP,2*raioP);
    imageMode(CENTER);
    image(imgPerso, x, y);
  if ( keyIsDown(LEFT_ARROW)){
    x = x - 6;
  }
  if ( keyIsDown(RIGHT_ARROW)){
    x = x + 6;
  }
  if(x > 600 ){
    x = x - 6;
  }
  if(x < 0){
    x = x + 6;
  }

     fill(0);
   
  //ellipse(x1,y1,2*raioI,2*raioI);
    imageMode(CENTER);
    image(imgVirus, x1, y1);
    if(dist(x, y, x1, y1) < raioP + raioI){
      Vidas --;
      x1 = random(600);
      y1 = -random(500);
      if(Vidas == 0){
        tela = 5;
      }
    }
      //ellipse(x4,y4,2*raioIn,2*raioIn);
    imageMode(CENTER);
    image(imgVirus, x4, y4);
    if(dist(x, y, x4, y4) < raioP + raioIn){
      Vidas --;
      x4 = random(600);
      y4 = -random(500);
      if(Vidas == 0){
        tela = 5;
      }
    }
  
  //ellipse(x2, y2, 2*raioA, 2*raioA);
    imageMode(CENTER);
    image(imgAlcool, x2, y2, 50, 70);
    if(dist(x, y, x2, y2) < raioP + raioA && Alcool < 10){
      Alcool ++;
      x2 = random(600);
      y2 = -random(800, 500);
      
    }
  //ellipse(x3, y3, 2*raioM, 2*raioM);
    imageMode(CENTER);
    image(imgMasc, x3, y3, 60, 40);
    if(dist(x, y, x3, y3) < raioP + raioM && Mascaras < 10){
      Mascaras ++;
      x3 = random(600);
      y3 = -random(1000, 500);
    }
      image(imgVirus, x1, y1);
    y1 = y1 + 3;
    if(y1 > 500){
      y1 = -random(500);
      x1 = random(600);
    }
      image(imgVirus, x4, y4);
    y4 = y4 + 3;
    if(y4 > 500){
      y4 = -random(500);
      x4 = random(600);
    }
    image(imgAlcool, x2, y2, 50, 70);
    y2 = y2 + 4;
    if(y2 > 500){
      y2 = -random(800, 500);
      x2 = random(600);
    }
    image(imgMasc, x3, y3, 60, 40);
    y3 = y3 + 4;
    if(y3 > 500){
      y3 = -random(1000, 500);
      x3 = random(600);
    }
    
    
    textAlign(CENTER);
    textSize(20);
    if( mouseX > xVoltar && mouseX< xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1){
    stroke(85,107,47);
    fill(210,180,140);
    rect(xVoltar, yVoltar, largura1, altura1, 30);
      if(mouseIsPressed){
      tela = 1;
      Nível = 1;
      Alcool = 0;
      Mascaras = 0;
      Vidas = 3;
      x = 400;
      y = 400;
    }
    }
    fill(85,107,47);
    noStroke();
    text("Voltar", 50, 490);
    
    textSize(20);
    fill(85,107,47);
    text('Nível: '+Nível, 50, 30);
    text('Alcool: '+Alcool+'/10', 225, 30);
    text('Mascaras: '+Mascaras+'/10', 400, 30);
    text('Vidas: '+Vidas, 550, 30);
   if(Alcool == BarreirasPontos && Mascaras == BarreirasPontos){
     Nível = 2; 
     Mascaras = 0;
     Alcool = 0;
     Vidas = 3;
     x = 400;
     y = 400;
    }
    }
    
    if(Nível == 2){
      background(176,196,222)
    
  fill(0);
  //ellipse(x,y,2*raioP,2*raioP);
    imageMode(CENTER);
    image(imgPerso, x, y);
  if ( keyIsDown(LEFT_ARROW)){
    x = x - 6;
  }
  if ( keyIsDown(RIGHT_ARROW)){
    x = x + 6;
  }
  if ( keyIsDown(UP_ARROW)){
    y = y - 6;
  }
  if ( keyIsDown(DOWN_ARROW)){
    y = y + 6;
  }
  if(x > 600 ){
    x = x - 6;
  }
  if(x < 0){
    x = x + 6;
  }
  if(y > 500 ){
    y = y - 6;
  }
  if(y < 0){
    y = y + 6;
  }


     fill(0);
   
  //ellipse(x1,y1,2*raioI,2*raioI);
    imageMode(CENTER);
    image(imgVirus, x1, y1);
    if(dist(x, y, x1, y1) < raioP + raioI){
      Vidas --;
      x1 = random(600);
      y1 = -random(500);
      if(Vidas == 0){
        tela = 5;
      }
    }
  //ellipse(x4,y4,2*raioIn,2*raioIn);
    imageMode(CENTER);
    image(imgVirus, x4, y4);
    if(dist(x, y, x4, y4) < raioP + raioIn){
      Vidas --;
      x4 = random(600);
      y4 = -random(500);
      if(Vidas == 0){
        tela = 5;
      }
    }
  
  //ellipse(x2, y2, 2*raioA, 2*raioA);
    imageMode(CENTER);
    image(imgAlcool, x2, y2, 50, 70);
    if(dist(x, y, x2, y2) < raioP + raioA && Alcool < 15){
      Alcool ++;
      x2 = random(600);
      y2 = -random(800, 500);
      
    }
  //ellipse(x3, y3, 2*raioM, 2*raioM);
    imageMode(CENTER);
    image(imgMasc, x3, y3, 60, 40);
    if(dist(x, y, x3, y3) < raioP + raioM && Mascaras < 15){
      Mascaras ++;
      x3 = random(600);
      y3 = -random(1000, 500);
    }
      
      image(imgVirus, x1, y1);
    y1 = y1 + 4;
    if(y1 > 500){
      y1 = -random(500);
      x1 = random(600);
    }
    image(imgVirus, x4, y4);
    x4 = x4 + 4;
    if(x4 > 600){
      x4 = -random(600);
      y4 = random(500);
    }
    image(imgAlcool, x2, y2, 50, 70);
    y2 = y2 + 4;
    if(y2 > 500){
      y2 = -random(800, 500);
      x2 = random(600);
    }
      
    image(imgMasc, x3, y3, 60, 40);
    y3 = y3 + 4;
    if(y3 > 500){
      y3 = -random(1000, 500);
      x3 = random(600);
    }
    
    if(Alcool == 15 && Mascaras == 15){
      tela = 6;
    }
    textAlign(CENTER);
    textSize(20);
    if( mouseX > xVoltar && mouseX< xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1){
    stroke(85,107,47);
    fill(176,196,222);
    rect(xVoltar, yVoltar, largura1, altura1, 30);
      if(mouseIsPressed){
      tela = 1;
      Nível = 1;
      Alcool = 0;
      Mascaras = 0;
      Vidas = 3;
      x = 400;
      y = 400;
    }
    }
    fill(85,107,47);
    noStroke();
    text("Voltar", 50, 490);
    
    textSize(20);
    fill(85,107,47);
    text('Nível: '+Nível, 50, 30);
    text('Alcool: '+Alcool+'/15', 225, 30);
    text('Mascaras: '+Mascaras+'/15', 400, 30);
    text('Vidas: '+Vidas, 550, 30);
    }
}
  
  //informações sobre o jogo
  else if(tela == 3){
    background(210,180,140);
     fill(85,107,47);
    textSize(20);
    text("O objetivo é pegar uma quantidade de objetos e" + "\n" +" não permitir que o vírus o alcance. Para movimentar o" + "\n" + " personagem basta ultilizar as setas do teclado."+ "\n" + "\n" + "Matéria: Ciências."  + "\n" + "Ano: 4° ano do ensino fundamental." + "\n" + "\n" + "Habilidades: (EF04CI08) Propor, a partir do conhecimento" + "\n" + " das formas de transmissão de alguns microrganismos" + "\n" + " (vírus, bactérias e protozoários), atitudes e medidas adequadas" + "\n" + " para prevenção de doenças a eles associadas." , 300, 150);
    textAlign(CENTER);
    textSize(20);
    if( mouseX > xVoltar && mouseX< xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1){
    stroke(85,107,47);
    fill(210,180,140);
    rect(xVoltar, yVoltar, largura1, altura1, 30);
      if(mouseIsPressed){
      tela = 1;
      Nível = 1;
      Alcool = 0;
      Mascaras = 0;
      Vidas = 3;
      x = 400;
      y = 400;
    }
    }
    fill(85,107,47);
    noStroke();
    text("Voltar", 50, 490);
}
  
  //Informações dos Créditos
    else if(tela == 4){
    background(210,180,140);
     fill(85,107,47);
    imageMode(CENTER);
    image(imgProgra, 300, 150);
    textSize(30);
    text("Programadora: " + "\n" + "Nataly da Silva Batista." + "\n" + "\n" + "Educadora: Ana Claudia.", 300, 250);
    textAlign(CENTER);
    textSize(20);
    if( mouseX > xVoltar && mouseX< xVoltar + largura1 && mouseY > yVoltar && mouseY < yVoltar + altura1){
    stroke(85,107,47);
    fill(210,180,140);
    rect(xVoltar, yVoltar, largura1, altura1, 30);
      if(mouseIsPressed){
      tela = 1;
      Nível = 1;
      Alcool = 0;
      Mascaras = 0;
      Vidas = 3;
      x = 400;
      y = 400;
    }
    }
    fill(85,107,47);
    noStroke();
    text("Voltar", 50, 490);
}
  
  //Gamer Over
  else if(tela == 5){
    background(210,180,140);
     fill(85,107,47);
    textSize(70);
    text("GAMER" + "\n" + "OVER", 300, 200);
    textAlign(CENTER);
    textSize(20);
    if( mouseX > xVoltar && mouseX< xVoltar + largura2 && mouseY > yVoltar && mouseY < yVoltar + altura1){
    stroke(85,107,47);
    fill(210,180,140);
    rect(xVoltar, yVoltar, largura2, altura1, 30);
      if(mouseIsPressed){
      tela = 1;
      Nível = 1;
      Alcool = 0;
      Mascaras = 0;
      Vidas = 3;
      x = 400;
      y = 400;
    }
    }
    fill(85,107,47);
    noStroke();
    text("Voltar para o Menu", 105, 490);
}
  
  //Vitória
  else if(tela == 6){
    background(210,180,140);
     fill(85,107,47);
    textSize(70);
    text("Parabéns você" + "\n ganhou!!!!", 300, 200);
    textAlign(CENTER);
    textSize(20);
    if( mouseX > xVoltar && mouseX< xVoltar + largura2 && mouseY > yVoltar && mouseY < yVoltar + altura1){
    stroke(85,107,47);
    fill(210,180,140);
    rect(xVoltar, yVoltar, largura2, altura1, 30);
      if(mouseIsPressed){
      tela = 1;
      Nível = 1;
      Alcool = 0;
      Mascaras = 0;
      Vidas = 3;
      x = 400;
      y = 400;
    }
    }
    fill(85,107,47);
    noStroke();
    text("Voltar para o Menu", 105, 490);
}
}
