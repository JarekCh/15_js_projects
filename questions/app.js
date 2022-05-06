// app.js
//using selectors inside the element

const questions = document.querySelectorAll('.question');

questions.forEach((e)  => {
    const btn = e.querySelector('.question-btn');
    // console.log(btn);
    btn.addEventListener('click', () => {
        questions.forEach(item => {
            console.log(item)
            if (item !== e){
                console.log(item)
                item.classList.remove('show-text');
            }
        });

        e.classList.toggle('show-text')
    });
});




// traversing the dom

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click', e => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//     });
// });