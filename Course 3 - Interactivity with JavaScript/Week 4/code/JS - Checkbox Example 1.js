function nicknameFunction(){
    if (document.getElementById('yesNickname').checked) {
        document.getElementById('nicknameSection').style.display="inline";
        document.getElementById('nickname').setAttribute('required',true);
    }
    else { 
        document.getElementById('nickname').removeAttribute('required');
        document.getElementById('nicknameSection').style.display="none";
    }
}
