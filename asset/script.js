
const addButton = document.querySelector('#add');
const updateLSData = () => {
  const textareaData = document.querySelectorAll('textarea');
  const notes = [];
  console.log("ye hai up ka text" + textareaData + "lets see");
  textareaData.forEach((note) => {
    return notes.push(note.value);
    // console.log("udpadate data ")
  });
  console.log(notes);
  localStorage.setItem('notes', JSON.stringify(notes));
}
const addNewNote = (text = '') => {

  //<div class="note">
  const note = document.createElement('div');
  note.className = 'note';
  // console.log(note);

  const operation = document.createElement('div');
  operation.className = 'operation';
  note.appendChild(operation);

  const edit = document.createElement('button');
  edit.className = 'edit';
  //console.log(edit);
  const fasedit = document.createElement('i');
  fasedit.className = 'fas fa-edit';
  edit.appendChild(fasedit);

  const delet = document.createElement('button');
  delet.className = 'delete';
  //console.log(delet);
  const fasdelet = document.createElement('i');
  fasdelet.className = 'fas fa-trash-alt';
  delet.appendChild(fasdelet);

  operation.appendChild(edit);
  operation.appendChild(delet);

  const main = document.createElement('div');
  // main.className = 'main';
  // ok
  main.className = 'main ${text ? "" : "hidden"}';
  text ? "" : ".hidden";

  //console.log(main);

  note.appendChild(main);

  const textarea = document.createElement('textarea');

  // textarea.className = '${text ? "hidden" : "" }';
  text ? ".hidden" : "";
  //console.log(textarea);
  note.appendChild(textarea);
  //</div>

  const editButton = note.querySelector('.edit');
  const delButton = note.querySelector('.delete');
  const main2 = note.querySelector('.main');
  const textarea2 = note.querySelector('textarea');

  // delete the node
  delButton.addEventListener('click', () => {
    note.remove();
    updateLSData();
  });

  // toogle edit

  textarea2.value = text;
  main2.innerHTML = text;
  editButton.addEventListener('click', () => {

    main2.classList.toggle('value');
    textarea2.classList.toggle('hidden');
  });
  // change mathod
  textarea.addEventListener('change', (event) => {
    const value = event.target.value;
    // if(value.length > 10) value = value.substring(0,10);
    var str = value;
    if (str.length > 20) str = str.substring(0, 20);
    console.log(str);
    main2.innerHTML = str;
    console.log(value);

    updateLSData();
  })
  // note.insertAdjacentHTML('afterbegin', operation);
  document.body.appendChild(note);

}
const notes = JSON.parse(localStorage.getItem('notes'));

if (notes) {
  notes.forEach((note) => addNewNote(note)

  )
};
addButton.addEventListener('click', () => addNewNote());
