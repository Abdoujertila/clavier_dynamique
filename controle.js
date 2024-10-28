const ecrire = function(val) {
    const output = document.getElementById('afficher'); 
    output.value += val;
    output.style.visibility = 'visible';
};
const effacer = function() {
    const element = document.getElementById('afficher');
    const elementValue = element.value; 
    const newValue = elementValue.slice(0,-1); 
    element.value = newValue; 
}
const confirmer=function(){
    const mot=document.getElementById('afficher').value;
    alert("merci vous avez saisi  "+mot);
}
