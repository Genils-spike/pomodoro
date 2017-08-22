$(document).ready(function(){
	var phase = [1500, 300];
	var i = 0;
	var time = phase[0];

	function timer(){
		time--;

		$("#min").html(Math.floor(time / 60));
		$("#sec").html(Math.floor(time % 60));

		if(time == 0){
			if(i == 0){
				i = 1;
				time = phase[i];
				window.alert("Temps de pause");
			}

			else{
				i = 0;
				time = phase[i];
				window.alert("Reprise du travail");
			}


		}
		$("#stop").click(function(){

			i = 0;
			time = phase[0];

			$("#min").html("25");
			$("#sec").html("00");
		});
	}

	$("#min").html(phase[0]/60);

	$("#play").click(function(){
		var play = setInterval(timer, 1000);

		$("#play").click(function(){
			clearInterval(play);
		});

		$("#pause").click(function(){
			clearInterval(play);
		});

		$("#stop").click(function(){
			clearInterval(play);
		});
	});
})