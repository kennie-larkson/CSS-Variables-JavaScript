
const inputs = document.querySelectorAll('.controls input');
//console.log(inputs);

function handleupdate(){
    console.log(this.value);
}

inputs.forEach(input => input.addEventListener('change', handleupdate));
inputs.forEach(input => input.addEventListener('mousemove', handleupdate));
