function regexName (name){
    if (/^[0-9]{10,12}$/.test(name)){
        return 'ini merupakan nomor telepon'
    }
    else{
        return 'ini bukan merupakan nomor telepon'
    }
}

const onSubmit = (event) => {
    event.preventDefault();
    let txtNoTelp = document.getElementById('txtNoTelp').value;
    document.getElementById('hasil').innerHTML = regexName(txtNoTelp);
}