'use scrict';
/**
 * @computeNotes
 * @param {array} - list of notes
 * @return {int} totalNotes/notes.length - the average note
 */

function computeNotes(notes) {
	var totalNotes = 0;
	for (var i = 0; i < notes.length; i++) {
		totalNotes+=notes[i];
	}
	return totalNotes/notes.length;
}

var notesTab = [11,19,10,10];
alert('Moyenne des notes : ' + computeNotes(notesTab));