
function createNote(msg){
    // create a note
    var note_div=document.createElement("div");
    note_div.className="note";
    note_div.innerText=msg;
    notes_container.appendChild(note_div);

    // also create a note line
    var note_bar=document.createElement("div");
    var sub_bar=document.createElement("div");
    note_bar.className="mainbar";
    sub_bar.className="subbar";
    note_bar.dataset.note=msg;
    sub_bar.dataset.note=msg;
    subnotes_bars.appendChild(sub_bar);
    notes_bars.appendChild(note_bar);
}

notes_list="EFGABCD".toUpperCase().split("").reverse();
notes_list.forEach(element => {
    createNote(element);
});
