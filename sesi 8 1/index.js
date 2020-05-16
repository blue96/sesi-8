function regexName (name){
    if (/^[A-Z][a-z]{2,20}$/.test(name)){
        return 'Huruf pertama adalah huruf besar'
    }
    else{
        return 'Huruf pertama adalah huruf kecil'
    }
}

console.log(regexName('Pascalasdfas'));

const onSubmit = (event) => {
    event.preventDefault();
    let txtKata = document.getElementById('txtKata').value;
    document.getElementById('hasil').innerHTML = regexName(txtKata);
}