function checkAge() {
    const ageField = document.getElementById('age');
    const ageText = ageField.value;
    const errorTag = document.getElementById('error');

    try {
        // console.log(bBaria);
        const age = parseInt(ageText);
        if (isNaN(age)) {
            throw 'Please Enter A Number'
        }
        else if (age < 18) {
            throw 'baccha kaccha is not allowed'
        }
        errorTag.innerHTML = '';
    }
    catch (err) {
        console.log('ERROR', err);
        errorTag.innerHTML = 'ERROR:' + err;
    }
    finally {
        console.log('All done inside try catch')
    }
    console.log(1111);
}
// checkAge()