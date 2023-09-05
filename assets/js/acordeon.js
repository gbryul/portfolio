
const acordeonTriggers = document.querySelectorAll('.p-acordeon .p-trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');
        if(isOpen){
            acordeon.classList.remove('open')
        }
        else
        {
            acordeon.classList.add('open')
        }
    })
})
