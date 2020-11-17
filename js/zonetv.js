$(document).ready(function(){
	
});

window.onload = function (){
	if ($('.bloc_episode').length) {
		ajuster_hauteur('.bloc_episode');
	}
	if ($('.bloc_episode_gros').length) {
		ajuster_hauteur('.bloc_episode_gros');
	}
	if ($('.bloc_episode_petit').length) {
		ajuster_hauteur('.bloc_episode_petit');
	}
	if($('.alantenne').length) {
		var hauteur = $('.alantenne').offset();
		var hauteur_finale = hauteur.top - 100;
		$(document.body).animate({scrollTop: hauteur_finale}, 800);	
	}
}

function ajuster_hauteur(selecteur) {
	var hauteur_max = 0;
	$(selecteur).each(function(event){
		var hauteur_courante = $(this).height();
		if (hauteur_courante > hauteur_max) {
			hauteur_max = hauteur_courante;
		}
	});
	$(selecteur).each(function(event){
		$(this).height(hauteur_max);
	});
}