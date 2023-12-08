
function createNote(note){
    // create a note
    var note_div=document.createElement("div");
    note_div.className="note";
    note_div.dataset.note=note;
    note_div.innerHTML=note+"<sub></sub>";
    note_div.style.background=`var(--${note}-color)`;
    notes_container.appendChild(note_div);

    // also create a note line
    var note_bar=document.createElement("div");
    var sub_bar=document.createElement("div");
    note_bar.className="mainbar";
    sub_bar.className="subbar";
    note_bar.dataset.note=note;
    sub_bar.dataset.note=note;
    subnotes_bars.appendChild(sub_bar);
    notes_bars.appendChild(note_bar);
}

notes_list="EFGABCD".toUpperCase().split("").reverse();
notes_list.forEach(element => {
    createNote(element);
});


all_notes_list="A A# B C C# D D# E F F# G G#".split(" ");

function highlightNotes(){
    // clear old inline styling
    subnotes_bars.querySelectorAll(".mainbar").forEach((elem)=>{
        elem.removeAttribute("style");
    }); 
    document.querySelectorAll(".subbar").forEach((elem)=>{
        elem.removeAttribute("style");
    }); 
    // clearing old subscripts
    document.querySelectorAll(`.note>sub`).forEach((elem)=>{
        elem.innerHTML="";
    });


    if (selected_mode.value=="major"){
        formula=[0,2,2,1,2,2,2];    // R,2,3,4,5,6,7
        applyMode(selected_note.value.toUpperCase(),formula);
    }
    else if (selected_mode.value=="minor"){
        formula=[0,2,1,2,2,1,2];    // R,2,3,4,5,6,7
        applyMode(selected_note.value.toUpperCase(),formula);
    }
}

function applyMode(note,formula)
{
    curr_idx=all_notes_list.indexOf(note);
    for (i=0;i<formula.length;i++){
        curr_idx=(curr_idx+formula[i]) %all_notes_list.length;
        curr_note=all_notes_list[curr_idx];
        console.log(curr_note);
        
        // highlight curr_note
        if(curr_note.endsWith("#")){    //subbar
            note_elem=document.querySelector(`.subbar[data-note="${curr_note[0]}"]`);
            note_elem.style.background=`var(--${curr_note[0]}-color)`;
        }
        else{    //mainbar
            note_elem=document.querySelector(`.mainbar[data-note="${curr_note[0]}"]`);
            note_elem.style.background=`var(--${curr_note[0]}-color)`;       
        }

        // add number 
        document.querySelector(`.note[data-note="${curr_note[0]}"]>sub`).innerHTML=i+1;

    }
}


// making list of note options
all_notes_list.forEach((note)=>{
    selected_note.innerHTML+=`<option value="${note}">${note}</option>`;
});


highlightNotes();