/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById('calculate-form');
const calculateCm = document.getElementById('calculate-cm');
const calculateKg = document.getElementById('calculate-kg');
const calculateMessage = document.getElementById('calculate-message');

const claculateBmi = (e) => {
    e.preventDefault()

    // Verificar se tem um valor
    if (calculateCm.value === '' || calculateKg.value === '' ) {
       // Add e remover cor
        calculateMessage.classList.remove('color-green');
        calculateMessage.classList.add('color-red');

        // Mensagens
        calculateMessage.textContent = 'Preencha a altura e o peso';

        // Remover mensagem três segundos
        setTimeout(() => {
            calculateMessage.textContent = '';
        }, 3000)
    } else {
        // Fórmula Imc
        const cm = calculateCm.value / 100
        const kg = calculateKg.value
        const imc = Math.round(kg / (cm * cm))

        // Mostre seu estado de saúde
       if (imc < 18.5) {
        // Add cor e exibir a mensagem
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent = `Seu IMC é de: ${imc} e está baixo!`
       } else if (imc < 25) {
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent = `Seu IMC é de: ${imc} e está bom!`
       } else {
        calculateMessage.classList.add('color-green');
        calculateMessage.textContent = `Seu IMC é de: ${imc} e está alto!`
       }
       //Para limpar o input
       calculateCm.value = '';
       calculateKg.value = '';
       //Remover as mensagens em segundos
       setTimeout(() => {
        calculateMessage.textContent = ''
       }, 4000)
    }
}

calculateForm.addEventListener('submit', claculateBmi);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const contactUser = document.getElementById('contact-user');

const sendEmail = (e) => {
    e.preventDefault();

    // Verificar se há algum valor
    if (contactUser.value === '') {
        // Add e remover cor
        contactMessage.classList.remove('color-green');
        contactMessage.classList.add('color-red');

        //Mensagem
        contactMessage.textContent = 'Você deve inserir seu e-mail.';

        // Para remover a mensagem
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 3000);
    } else {
        emailjs.sendForm('service_ygcgz2c', 'template_kybtx48', '#contact-form', '4zpaWOhXZYpNI-DD3')
        .then (() => {
            //Show Mensagem e add cor
            contactMessage.classList.add('color-green')
            contactMessage.textContent = 'Seu registro foi efetuado com sucesso!!!';
          
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 3000);
        }, (error) => {
            alert('Algo falhou', error)
        })

        contactUser.value = '';
    }
}

contactForm.addEventListener('submit', sendEmail);
