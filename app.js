const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
console.log(placeholders);

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

// blue.addEventListener('dragenter', blueenter);

// function blueenter() {
//     console.log(2);
//     item.style.border = 'pink';
// }

// function fuck() {
//     if (this.className = "blue") {
//         console.log(1);
//       }
// }


for (const placeholder of placeholders) {
    console.log(placeholder.className.split(' ')[1] == "blue");
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragenter', () => {
        if (placeholder.className.split(' ')[1] == "pink") {
            item.style.border = '5px #ff85e4 solid';
        }
      if (placeholder.className.split(' ')[1] == "blue") {
          item.style.border = '5px #209cff solid';
      }
      if (placeholder.className.split(' ')[1] == "green") {
        item.style.border = '5px #84fab0 solid';
    }
    });
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', drop);
}

function dragstart(event) {
   event.target.classList.add('hold');
   //event.target.classList.add('hide');
  setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
   event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function drop(event) {
    event.target.classList.remove('hovered');
    event.target.append(item);
}
