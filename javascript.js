// Template ID template_yrcslok
// Service ID service_nce0cnd
// public ID (API) 5Tq9gJa-zkuwbBGK-

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

emailjs
        .sendForm(
            'service_nce0cnd',
            'template_yrcslok',
            event.target,
        ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible")
            alert(
                "The email service is temporarily unavailable. Please contact me through waldar18@gmail.com"
            )
        })
}