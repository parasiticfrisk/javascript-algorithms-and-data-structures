// Author: August Frisk
// Course: Free Code Camp - Algorithms & Data Structures - Fall 2018
// Project: Caesar's Cipher

/* clear text var */
var nor = $('#in');
var enc = $('#ou');
/* slider change event => rerender */
/* read and render slider */
var slider = new Slider('#shift', {
	formatter: function(value) {
		return 'Shift by: ' + value + ' letters';
	}
}).on( 'slide', function(newVal){
	enc.val( cezarCipher( nor.val(), newVal ) );
	updateLabels();
} );

$(nor).on( 'keyup', function(x){
	var old = $(x.target).val().toUpperCase();
	$(nor).val( old );
	console.log( $(x.target).val() )
	enc.val( cezarCipher( old, slider.getValue() ) );
} );

/**
 * Simple Cezar cipher, also know as 'ROT13' cipher 
 * @param  {[string]} str   Input string
 * @param  {[number]} shift Number of letters to shift in alphabet
 * @return {[string]}       Outputing new string
 */

  var r1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var r2 = rotate( r1, 13); // start value is 13!

function updateLabels(){
  $('p.org').html( r1.join(' ') )
  $('p.r13').html( r2.join(' ') )
}

function cezarCipher(str, shift){ // LBH QVQ VG!
  shift = ( typeof shift == undefined ) ? 13 : parseInt( shift );
  r2 = rotate(r1, shift);

  var res='';
  
  for( var i = 0; i < str.length; i++ ){    
    res += ( /^[A-Z]+$/.test( str[i]) ? r2[ r1.indexOf( str[i] ) ] : str[i] );
  }
 
  return res;
}

/**
 * Array helper method: 'rotation' like
 * behaviour of array members
 * @param  {[array]} array Passed array
 * @param  {[number]} times the number of items to 'skip'
 * @return {[array]} Newly created array 
 */
function rotate( array , times ){
  newarray = array.slice();
  while( times-- ){
    var temp = newarray.shift();
    newarray.push( temp )
  }
  return newarray;
}

updateLabels();