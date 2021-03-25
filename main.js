$(function(){
  var team1, team2, gameType;

  $("#screenTwo").hide();
  $("#screenTwo").append(`<div class="boxes">
                            <div class="box one">
                              <div class="line">
                                <input type="button" class="points1" value="+">
                                  <p></p>
                              </div>
                              <div class="top 1">            
                              </div>
                              <div class="top 2">
                            </div>
                          </div>
                          <div class="box two">
                            <div class="line">
                              <p></p>
                              <input type="button" class="points2" value="+">
                            </div>
                            <div class="top 3">      
                            </div>
                            <div class="top 4">
                            </div>
                          </div>
                          </div>
                          <div class="inline"></div>
                          <div class="bot">
                            <input type="button" class="points1" value="-">
                            <p class="point1">0</p>
                            <input type="button" class="out" value="Fin">
                            <p class="point2">0</p>
                            <input type="button" class="points2" value="-">
                          </div>`);


  for(var i = 0; i < 3 ; i++){
    $(".top").append('<img src="./img/0.jpeg">')
  };

  $(".sel").on('click', function(){
    if ($(this).hasClass('blur')) $(".sel").toggleClass("blur");
  });


  $(".init").on('click', function(){
    team1 = $("#team1").val()||$("#team1").attr('placeholder');
    team2 = $("#team2").val()||$("#team2").attr('placeholder');
    gameType = ($("input.blur").val() == "a 30")?24:30;

    $(".inline").text('a ' + gameType);

    $(".one > div > p").text(team1);
    $(".two > div > p").text(team2);

    $("#screenOne").hide();
    $("#screenTwo").show();
  });
    
  var point1 = $(".point1");
  var point2 = $(".point2");

  $(".points1").on('click', function(){
    if($(this).val() == '+' && parseInt(point1.text()) < gameType){
      point1.text(parseInt(point1.text()) + 1);
    }else if($(this).val() == '-' && parseInt(point1.text()) > 0){
      point1.text(parseInt(point1.text()) - 1);
    };
      for(var i = 0;i <= parseInt(point1.text());i++){
        if(i <= 5){
          $(".1 img")[0].setAttribute('src', `./img/${i}.jpeg`);
          $(".1 img")[1].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= 10){
          $(".1 img")[1].setAttribute('src', `./img/${i - 5}.jpeg`);
          $(".1 img")[2].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= (gameType/2)){
          $(".1 img")[2].setAttribute('src', `./img/${i - 10}.jpeg`);
          $(".2 img")[0].setAttribute('src', `./img/0.jpeg`);
        }else if(i <= (gameType/2)+5){
          $(".2 img")[0].setAttribute('src', `./img/${i - (gameType/2)}.jpeg`);
          $(".2 img")[1].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= (gameType/2)+10){
          $(".2 img")[1].setAttribute('src', `./img/${i - (gameType/2) - 5}.jpeg`);
          $(".2 img")[2].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= (gameType)){
          $(".2 img")[2].setAttribute('src', `./img/${i - (gameType/2) - 10}.jpeg`);
      };
    };
  });

  $(".points2").on('click', function(){
    if($(this).val() == '+' && parseInt(point2.text()) < gameType){
      point2.text(parseInt(point2.text()) + 1);
    }else if($(this).val() == '-' && parseInt(point2.text()) > 0){
      point2.text(parseInt(point2.text()) - 1);
    };
      for(var i = 0;i <= parseInt(point2.text());i++){
        if(i <= 5){
          $(".3 img")[0].setAttribute('src', `./img/${i}.jpeg`);
          $(".3 img")[1].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= 10){
          $(".3 img")[1].setAttribute('src', `./img/${i - 5}.jpeg`);
          $(".3 img")[2].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= (gameType/2)){
          $(".3 img")[2].setAttribute('src', `./img/${i - 10}.jpeg`);
          $(".4 img")[0].setAttribute('src', `./img/0.jpeg`);
        }else if(i <= (gameType/2)+5){
          $(".4 img")[0].setAttribute('src', `./img/${i - (gameType/2)}.jpeg`);
          $(".4 img")[1].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= (gameType/2)+10){
          $(".4 img")[1].setAttribute('src', `./img/${i - (gameType/2) - 5}.jpeg`);
          $(".4 img")[2].setAttribute('src', `./img/0.jpeg`);
        }else if (i <= (gameType)){
          $(".4 img")[2].setAttribute('src', `./img/${i - (gameType/2) - 10}.jpeg`);
      };
    };
  });


  $(".out").on('click', function(){
    $("#team1").val('');
    $("#team2").val('');
    $("img").attr('src', './img/0.jpeg')
    point1.text('0');
    point2.text('0');
    $("#screenTwo").hide();
    $("#screenOne").show();
  });

});