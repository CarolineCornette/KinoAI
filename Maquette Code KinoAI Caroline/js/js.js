var n = 0;

function suppr (index) {
  let parent = document.getElementById('List');
  let child = document.getElementById('Jsp'+String(index));
  parent.removeChild(child);
  --n;
}



function modif(index){
  let parent = document.getElementById('Jsp'+String(index));
  parent.firstChild.removeAttribute('readonly');
  parent.firstChild.focus();

};


$(document).ready(function(){
//ajouter un acteur dans la liste



$('#prep-links').click(function() {
  // masqués
  $('#framing-tools').hide();// $ tools-framing show()
  $('#timelines-editing').hide();//$ timeline-editing
  $('#editing-tools').hide();
  $('#timelines-framing').hide();//$ tools-editing
  $('#timelines-annot').hide();
  $('#annot-tools').hide();
  $('#timelines-export').hide();
  $('#export-tools').hide();


  //affichés
  $('#timelines-prep').show();
  $('#prep-tools').show();
})


$('#fram-links').click(function() {
  // masqués
  $('#timelines-prep').hide();
  $('#prep-tools').hide();
  $('#timelines-editing').hide();
  $('#editing-tools').hide();
  $('#timelines-annot').hide();
  $('#annot-tools').hide();
  $('#timelines-export').hide();
  $('#export-tools').hide();
  $('#ajouterSupprimerModifier').hide();



  //affichés
  $('#framing-tools').show();
  $('#timelines-framing').show();// $ tools-framing show()
})

$('#videoedit-links').click(function() {
  // masqués
  $('#timelines-prep').hide();
  $('#prep-tools').hide();
  $('#framing-tools').hide();
  $('#timelines-framing').hide();
  $('#timelines-annot').hide();
  $('#annot-tools').hide();
  $('#timelines-export').hide();
  $('#export-tools').hide();
  $('#ajouterSupprimerModifier').hide();



  //affichés
  $('#timelines-editing').show();//$ timeline-editing
  $('#editing-tools').show();//$ tools-editing

})




$('#annot-links').click(function() {
  // masqués
  $('#timelines-prep').hide();
  $('#prep-tools').hide();
    $('#framing-tools').hide();// $ tools-framing show()
    $('#timelines-editing').hide();//$ timeline-editing
    $('#editing-tools').hide();//$ tools-editing
    $('#timelines-export').hide();
    $('#export-tools').hide();
    $('#ajouterSupprimerModifier').hide();

  //affichés
  $('#timelines-annot').show();
  $('#annot-tools').show();

})

  $('#export-links').click(function() {
    // masqués
    $('#timelines-prep').hide();
    $('#prep-tools').hide();
      $('#framing-tools').hide();// $ tools-framing show()
      $('#timelines-editing').hide();//$ timeline-editing
      $('#editing-tools').hide();//$ tools-editing
      $('#timelines-annot').hide();
      $('#annot-tools').hide();
      $('#ajouterSupprimerModifier').hide();


    //affichés
    $('#timelines-export').show();
    $('#export-tools').show();


  });





  $('#AddActor').click(function (){


        let Acteur = document.createElement('div');
        let NomActeur = document.createElement('input');
        let modif = document.createElement('input');
        let suppr = document.createElement('input');


        Acteur.id = 'Jsp'.concat(String(n));
        $(Acteur).attr('style','margin-bottom:8px;background-color:#EDF2FB;padding:4px;border-radius:4px;')

        NomActeur.id = 'Acteur'+String(n)
        NomActeur.classList.add('Acteur');
        suppr.classList.add('Supprimer');
        modif.classList.add('Modification');


        $(NomActeur).attr('type','text');
        $(NomActeur).attr('placeholder',' . . . ');



        $(modif).attr('type','image');
        $(suppr).attr('type','image');
        $(modif).attr('src','Images/pen.svg');
        $(suppr).attr('src','Images/delete.svg');
        /*$(modif).on('click',function(){
          $(this).closest('div').find('input').first().removeAttr('readonly');
          $(this).closest('div').find('input').first().focus();

          });

        });*/
        $(modif).attr('onclick','modif('+String(n)+');')
        /*$(suppr).attr('onclick','suppr('+String(n)+');');*/


        $(suppr).on('click',function(){
          $(this).closest('div').remove();
          var $valSuppr = $(this).closest('div').children().eq(0).val();
          $("p:contains('"+$valSuppr+"')").remove();
      });






        Acteur.appendChild(NomActeur);
        Acteur.appendChild(modif);
        Acteur.appendChild(suppr);





    document.getElementById('List').appendChild(Acteur);
    document.getElementById('Acteur'+String(n)).focus();







        ++n;




  });

  $(this).on('keypress',function(e) {
    var $focused = $(':focus');
    var valActeur = $($focused).val();
    if(e.which == 13) {

      $($focused).blur();
      $($focused).attr('readonly','False');
      let timelineActeur = document.createElement('div'); /* Création du div de la timeline de l'acteur (Peut-être utiliser pour créer un div, p,h1,h2, img, button, input) */
      let popupActeur = document.createElement('div');
      
      $(timelineActeur).addClass('timelineClass') /* Ajout d'une class de la timeline */
      

      let timelineNomActeur = document.createElement('p'); /* Création de l'affiche du nom de l'acteur */
      let popupNomActeur = document.createElement('p'); 

      $(popupNomActeur).css("margin","2px");


      $(timelineNomActeur).text(valActeur); /* Changement du nom de l'acteur */
      $(timelineActeur).append(timelineNomActeur); /* Ajout de l'affichage dans la div de la timeline */

      $(popupNomActeur).text(valActeur);
      $(popupActeur).append(popupNomActeur);

      $('#timelines-prep').append(timelineActeur); 
      $('#listeActeursBis').append(popupActeur);/* Ajout de la timeline de l'acteur dans la liste des timelines */
    }

    

  });

  $('#box').click(function() {
    $(this).css("border-color", "#007BFE");

    //affichés
    $('#ajouterSupprimerModifier').show();


  })

  $('#ajouterSupprimerModifier').click(function() {

    $('#listeActeursBis').show();





  })




});






/* int = 1,2,3,5,6,61
float = 1.2,1.556556,
string = "Salut" , "Coucou" */
