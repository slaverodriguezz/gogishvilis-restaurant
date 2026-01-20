const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });
}

async function loadMenuData() {
    try {

        const response = await fetch('https://jsonplaceholder.typicode.com/users?_limit=3');
        const users = await response.json();
        const container = document.getElementById('api-content');

        if (container) {
            users.forEach(user => {
                container.innerHTML += `
                    <div class="user-card">
                        <h4>${user.name}</h4>
                        <p>"საუკეთესო რესტორანი, ყველას ვუსურვებ ამ ჯადოსნური ადგილის მონახულებას."</p>
                    </div>`;
            });
        }
    } catch (error) {
        console.error("loading error:", error);
    }
}
loadMenuData();

const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email === '' || password === '') {
            alert('გთხოვთ, შეავსეთ ყველა ველი!');
        } else if (!emailRegex.test(email)) {
            alert('მიუთითეთ კორექტული მეილი!');
        } else {
            alert('მაგიდა წარმატებით დარეზერვებულია!');
        }
    });
}

const togglePass = document.getElementById('showPass');
if (togglePass) {
    togglePass.addEventListener('change', function() {
        const passInput = document.getElementById('password');
        passInput.type = this.checked ? 'text' : 'password';
    });
}

const cookieBox = document.getElementById('cookie-banner');
const acceptBtn = document.getElementById('accept-cookie');

if (cookieBox && !localStorage.getItem('cookiesAccepted')) {
    cookieBox.style.display = 'block';
}

if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBox.style.display = 'none';
    });
}
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }

});
