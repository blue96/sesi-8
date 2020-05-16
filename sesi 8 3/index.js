function regexName (name){
    if (/^Bagaimana cara memulai usaha bisnis$|^Apa itu inalum$|^Status covid hari ini$/.test(name)){
        return 'pencarian ditemukan'
    }
    else{
        return 'pencarian tidak ditemukan'
    }
}

const onSubmit = (event) => {
    event.preventDefault();
    let txtKalimat = document.getElementById('txtKalimat').value;
    document.getElementById('hasil').innerHTML = regexName(txtKalimat);
}