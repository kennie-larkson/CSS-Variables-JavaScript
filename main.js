
const inputs = document.querySelectorAll('.controls input');
//console.log(inputs);

function handleupdate(){
    //console.log(this.dataset.data-sizing);
    const suffix = this.dataset.sizing || " ";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix );
}

inputs.forEach(input => input.addEventListener('change', handleupdate));
inputs.forEach(input => input.addEventListener('mousemove', handleupdate));
