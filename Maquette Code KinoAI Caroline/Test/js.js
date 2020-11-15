var n = 0;

function suppr (index) {
    let parent = document.getElementById('List');
    let child = document.getElementById('Jsp'+String(index));
    parent.removeChild(child);
    --n;
}




$(document).ready(function(){
    
    $(document.getElementById('AddActor')).click(function(){
        
         


        let Acteur = document.createElement('div');
        let NomActeur = document.createElement('div');
        let modif = document.createElement('input');
        let suppr = document.createElement('input');
      

        Acteur.id = 'Jsp'.concat(String(n))

        NomActeur.classList.add('Acteur');
        NomActeur.appendChild(document.createTextNode('Entrez le nom de l\'acteur'));
        $(NomActeur).attr('contenteditable','true');
        
        $(modif).attr('type','image');
        $(suppr).attr('type','image');
        $(modif).attr('src','pen.svg');
        $(suppr).attr('src','delete.svg');
        $(suppr).attr('onclick','suppr('+String(n)+');');

       
        

        

        Acteur.appendChild(NomActeur);
        Acteur.appendChild(modif);
        Acteur.appendChild(suppr);
        
        document.getElementById('List').appendChild(Acteur);

        

        
        ++n;
        

    
          

        




    

    
   
        
    });

    





















});