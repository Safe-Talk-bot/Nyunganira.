function showPage(pageId) {
    // Check if the page requires an account
    const protectedPages = ['notifications', 'profile'];
    if (protectedPages.includes(pageId) && !userSession.isLoggedIn) {
        document.getElementById('login-screen').style.display = 'flex';
        return;
    }

    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none';
    });

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}

const translations = {
    en: {
        login_title: "Welcome to Nyunganira",
        login_subtitle: "Please log in to access the community.",
        label_username: "Username",
        label_password: "Password",
        btn_login: "Login",
        disclaimer: "Your identity is protected within the platform.",
        signup_title: "Create an Account",
        signup_subtitle: "Join the community to share and learn.",
        label_email: "Email",
        btn_signup: "Sign Up",
        label_select_avatar: "Select Avatar",
        auth_toggle_signup: "Don't have an account? Sign up",
        auth_toggle_login: "Already have an account? Login",
        signup_success: "Account created successfully! Please login.",
        nav_home: "Home",
        nav_opinions: "Opinions",
        nav_notifications: "Notifications",
        nav_about: "About",
        nav_profile: "Profile",
        home_title: "Welcome to Nyunganira 💚",
        home_subtitle: "A safe space where your voice matters, your story is protected, and your well-being comes first.",
        hero_description: "At Nyunganira, we believe every young person deserves access to the right information, support, and care—without fear, stigma, or judgment. Whether you are seeking knowledge about sexual and reproductive health, learning how to protect yourself from HIV, understanding menstrual health, or taking care of your mental well-being, you are in the right place.",
        notifications_title: "Notifications",
        notif_assistant: "An assistant commented on your post.",
        notif_reaction: "Someone reacted to your anonymous message.",
        video_1_title: "Emotional well being and mental health (English)",
        video_1_desc: "Video by NCERT OFFICIAL. This educational session explores the importance of mental health awareness, emotional resilience, and seeking support for psychological well-being among young students.",
        video_2_title: "Mental Health Wellness Tips",
        video_2_desc: "Video by Psych Hub. This video shares practical tips for maintaining mental well-being and emotional health in our daily lives.",
        video_3_title: "Teen Health: Sexual Health",
        video_3_desc: "Video by Penn State PRO Wellness. An informative guide for teenagers about sexual health, understanding relationships, and staying safe.",
        video_4_title: "HIV Treatment: Reaching Your Goal | A Positive Life",
        video_4_desc: "Video by A Positive Life Starts with You. Understanding HIV treatment goals and how to live a healthy, positive, and empowered life.",
        search_placeholder: "Search",
        btn_search: "Search",
        opinions_title: "Community Opinions",
        opinions_subtitle: "Share your challenges anonymously. No one will see your identity.",
        btn_post: "Post Anonymously",
        post_placeholder: "Type your problem here...",
        anon_user: "Anonymous User",
        assistant_tag: "Assistant Answer:",
        assistant_sample_msg: "Hello! You can reach out to our toll-free line listed in the About section...",
        comment_placeholder: "Add a comment...",
        btn_send: "Send",
        about_title: "About Nyunganira",
        about_mission: "Our mission is to provide barrier-free health information to everyone.",
        contact_us: "Contact Us",
        contact_phone: "Phone: +250 791 184 249",
        write_to_us_title: "Write to Us",
        social_media_title: "Social Media",
        btn_help: "Get Help",
        help_alert: "Struggling with the site? Please email us at help@nyunganira.org for assistance.",
        help_examples_title: "How can we help you?",
        help_item_1: "Technical issues with login or account creation.",
        help_item_2: "Reporting inappropriate content or comments.",
        help_item_3: "Difficulties playing educational videos.",
        help_item_4: "Privacy or safety concerns within the community.",
        help_item_5: "General questions about using the platform features.",
        help_contact_reminder: "Still need help? Email us: help@nyunganira.org",
        profile_title: "My Profile",
        btn_logout: "Logout"
    },
    rw: {
        login_title: "Murakaza neza kuri Nyunganira",
        login_subtitle: "Injira kugira ngo ubashe gukoresha urubuga.",
        label_username: "Izina rikoreshwa",
        label_password: "Ijambo ry'ibanga",
        btn_login: "Injira",
        disclaimer: "Umwirondoro wawe urarinzwe hano.",
        signup_title: "Fungura Konti",
        signup_subtitle: "Injira mu muryango kugira ngo usangize abandi kandi wigire kuri bo.",
        label_email: "Imeru (Email)",
        btn_signup: "Fungura konti",
        label_select_avatar: "Hitamo ifoto",
        auth_toggle_signup: "Ntabwo ufite konti? Fungura hano",
        auth_toggle_login: "Usanzwe ufite konti? Injira hano",
        signup_success: "Konti yafunguwe neza! Injira hano.",
        nav_home: "Ahabanza",
        nav_opinions: "Ibitekerezo",
        nav_notifications: "Integuza",
        nav_about: "Ibijyanye",
        nav_profile: "Umwirondoro",
        home_title: "Murakaza neza kuri Nyunganira 💚",
        home_subtitle: "Ahantu hizewe aho ijwi ryawe rifite agaciro, amateka yawe arinzwe, kandi imibereho yawe ihabwa umwanya wa mbere.",
        hero_description: "Muri Nyunganira, twemera ko buri rubyiruko rufite uburenganzira bwo kubona amakuru, ubufasha, n'ubuvuzi bikwiye—nta bwoba, akato, cyangwa gucirwa urubanza. Waba ushaka kumenya ibyerekeye ubuzima bw'imyororokere, kwiga uko wakirinda agakoko gatera SIDA, gusobanukirwa n'ubuzima bw'imihango, cyangwa kwita ku buzima bwo mu mutwe, uri ahantu heza.",
        notifications_title: "Integuza",
        notif_assistant: "Umwunganizi yashyize igitekerezo ku butumwa bwawe.",
        notif_reaction: "Hari uwashyize ikimenyetso ku butumwa bwawe.",
        video_1_title: "Imibereho myiza mu buryo bw'ibyentimba n'ubuzima bwo mu mutwe",
        video_1_desc: "Video yakozwe na NCERT OFFICIAL. Iki kiganiro kiribanda ku mibereho myiza n'ubuzima bwo mu mutwe ku rubyiruko.",
        video_2_title: "Inama ku buzima bwo mu mutwe",
        video_2_desc: "Video yakozwe na Psych Hub. Iyi video isangiza inama zifatika zo kwitaho ku buzima bwo mu mutwe n'ibyiyumvo mu buzima bwa buri munsi.",
        video_3_title: "Ubuzima bw'imyororokere ku rubyiruko",
        video_3_desc: "Video yakozwe na Penn State PRO Wellness. Umuyoboro w'amakuru ku rubyiruko ku buzima bw'imyororokere, imibanire, n'umutekano.",
        video_4_title: "Kuvura SIDA: Kugera ku ntego yawe | Ubuzima bwiza",
        video_4_desc: "Video yakozwe na A Positive Life Starts with You. Gusobanukirwa intego zo kwivuza SIDA n'uko wabaho neza, ufite intego kandi ushoboye.",
        search_placeholder: "Shakisha",
        btn_search: "Shakisha",
        opinions_title: "Ibitekerezo by'Abanyamuryango",
        opinions_subtitle: "Sangiza abandi ibibazo wahuye na byo mu buryo bw'ibanga.",
        btn_post: "Tangaza mu buryo bw'ibanga",
        post_placeholder: "Andika ikibazo cyawe hano...",
        anon_user: "Umukoresha w'ibanga",
        assistant_tag: "Igisubizo cy'Umwunganizi:",
        assistant_sample_msg: "Muraho! Mushobora kuduhamagara kuri numero itishyurwa iri mu gice cy'Ibijyanye natwe...",
        comment_placeholder: "Andika igitekerezo...",
        btn_send: "Ohereza",
        about_title: "Ibijyanye na Nyunganira",
        about_mission: "Inshingano zacu ni uguha buri wese amakuru ku buzima nta mbogamizi.",
        contact_us: "Twandikire",
        contact_phone: "Terefoni: +250 791 184 249",
        write_to_us_title: "Twandikire mu nyandiko",
        social_media_title: "Imbuga nkoranyambaga",
        btn_help: "Gufashwa",
        help_alert: "Waba ufite ikibazo cyo gukoresha urubuga? Twandikire kuri help@nyunganira.org kugira ngo ufashe.",
        help_examples_title: "Twagufasha mu buryo ki?",
        help_item_1: "Ibibazo bya tekiniki mu kwinjira cyangwa gufungura konti.",
        help_item_2: "Gutanga amakuru ku butumwa cyangwa ibitekerezo bitari byiza.",
        help_item_3: "Ibibazo mu kureba amavideo y'inyigisho.",
        help_item_4: "Ibibazo bijyanye n'umutekano n'ibanga ryawe.",
        help_item_5: "Ibibazo rusange ku mikoreshereze y'urubuga.",
        help_contact_reminder: "Ucyeneye ubufasha bwisumbuye? Twandikire: help@nyunganira.org",
        profile_title: "Umwirondoro wanjye",
        btn_logout: "Sohoka"
    },
    fr: {
        login_title: "Bienvenue sur Nyunganira",
        login_subtitle: "Veuillez vous connecter pour accéder à la communauté.",
        label_username: "Nom d'utilisateur",
        label_password: "Mot de passe",
        btn_login: "Se connecter",
        disclaimer: "Votre identité est protégée sur la plateforme.",
        signup_title: "Créer un compte",
        signup_subtitle: "Rejoignez la communauté pour partager et apprendre.",
        label_email: "Email",
        btn_signup: "S'inscrire",
        label_select_avatar: "Choisir un avatar",
        auth_toggle_signup: "Vous n'avez pas de compte ? S'inscrire",
        auth_toggle_login: "Vous avez déjà un compte ? Se connecter",
        signup_success: "Compte créé avec succès ! Veuillez vous connecter.",
        nav_home: "Accueil",
        nav_opinions: "Opinions",
        nav_notifications: "Notifications",
        nav_about: "À propos",
        nav_profile: "Profil",
        home_title: "Bienvenue sur Nyunganira 💚",
        home_subtitle: "Un espace sûr où votre voix compte, votre histoire est protégée et votre bien-être passe avant tout.",
        hero_description: "Chez Nyunganira, nous croyons que chaque jeune mérite d'avoir accès aux bonnes informations, au soutien et aux soins—sans peur, stigmatisation ou jugement. Que vous recherchiez des connaissances sur la santé sexuelle et reproductive, appreniez à vous protéger du VIH, compreniez la santé menstruelle ou preniez soin de votre bien-être mental, vous êtes au bon endroit.",
        notifications_title: "Notifications",
        notif_assistant: "Un assistant a commenté votre publication.",
        notif_reaction: "Quelqu'un a réagi à votre message anonyme.",
        video_1_title: "Bien-être émotionnel et santé mentale",
        video_1_desc: "Vidéo par NCERT OFFICIAL. Cette session couvre les aspects fondamentaux du bien-être émotionnel et de la santé mentale pour les jeunes.",
        video_2_title: "Conseils de bien-être mental",
        video_2_desc: "Vidéo par Psych Hub. Cette vidéo partage des conseils pratiques pour maintenir le bien-être mental et la santé émotionnelle au quotidien.",
        video_3_title: "Santé sexuelle des adolescents",
        video_3_desc: "Vidéo par Penn State PRO Wellness. Un guide informatif pour les adolescents sur la santé sexuelle, les relations et la sécurité.",
        video_4_title: "Traitement du VIH : Atteindre votre objectif | Une vie positive",
        video_4_desc: "Vidéo par A Positive Life Starts with You. Comprendre les objectifs du traitement du VIH et comment vivre une vie saine, positive et autonome.",
        search_placeholder: "Rechercher",
        btn_search: "Rechercher",
        opinions_title: "Opinions de la Communauté",
        opinions_subtitle: "Partagez vos défis anonymement. Personne ne verra votre identité.",
        btn_post: "Publier anonymement",
        post_placeholder: "Tapez votre problème ici...",
        anon_user: "Utilisateur Anonyme",
        assistant_tag: "Réponse de l'assistant :",
        assistant_sample_msg: "Bonjour ! Vous pouvez nous contacter sur notre ligne gratuite listée dans la section À propos...",
        comment_placeholder: "Ajouter un commentaire...",
        btn_send: "Envoyer",
        about_title: "À propos de Nyunganira",
        about_mission: "Notre mission est de fournir des informations de santé sans barrières pour tous.",
        contact_us: "Contactez-nous",
        contact_phone: "Téléphone: +250 791 184 249",
        write_to_us_title: "Écrivez-nous",
        social_media_title: "Réseaux Sociaux",
        btn_help: "Obtenir de l'aide",
        help_alert: "Vous rencontrez des difficultés avec le site ? Veuillez nous envoyer un e-mail à help@nyunganira.org pour obtenir de l'aide.",
        help_examples_title: "Comment pouvons-nous vous aider ?",
        help_item_1: "Problèmes techniques lors de la connexion ou de la création de compte.",
        help_item_2: "Signaler du contenu ou des commentaires inappropriés.",
        help_item_3: "Difficultés à lire les vidéos éducatives.",
        help_item_4: "Problèmes de confidentialité ou de sécurité au sein de la communauté.",
        help_item_5: "Questions générales sur l'utilisation des fonctionnalités de la plateforme.",
        help_contact_reminder: "Vous avez encore besoin d'aide ? Écrivez-nous : help@nyunganira.org",
        profile_title: "Mon Profil",
        btn_logout: "Se déconnecter"
    }
};

function changeLanguage(lang) {
    // Update the HTML lang attribute for accessibility and SEO
    if (translations[lang]) {
        document.documentElement.lang = lang;
    }

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update Aria-Labels for accessibility (since buttons are now icons)
    const labelElements = document.querySelectorAll('[data-i18n-label]');
    labelElements.forEach(el => {
        const key = el.getAttribute('data-i18n-label');
        if (translations[lang][key]) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Update placeholders dynamically
    const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
    placeholders.forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });
    
    // Update all language dropdowns to match
    document.querySelectorAll('.lang-select').forEach(select => {
        select.value = lang;
    });
}

// Simple object to store "user data" for the session
let userSession = {
    username: '',
    avatar: 'profile.png',
    isLoggedIn: false
};

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent default form submission

    // In a real application, you would send username/password to a server
    // and validate them. For this example, we'll just simulate success.
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes only)
    if (username && password) { // Just check if they are not empty
        // Update session with the entered username
        userSession.isLoggedIn = true;
        userSession.username = username;
        
        // Update profile display with session data
        document.getElementById('profile-username-display').textContent = username;
        document.getElementById('profile-avatar-display').src = userSession.avatar;

        document.getElementById('login-screen').style.display = 'none'; // Hide login screen
        showPage('home'); // Show the home page by default after login
        console.log("User logged in successfully!");
    } else {
        alert("Please enter both username and password.");
    }
}

// Function to close the login modal
function closeLogin() {
    document.getElementById('login-screen').style.display = 'none';
}

// Function to toggle between Login and Signup
function toggleAuthMode(mode) {
    const loginContainer = document.getElementById('login-form-container');
    const signupContainer = document.getElementById('signup-form-container');
    
    if (mode === 'signup') {
        loginContainer.style.display = 'none';
        signupContainer.style.display = 'block';
    } else {
        loginContainer.style.display = 'block';
        signupContainer.style.display = 'none';
    }
}

// Function to handle signup
function handleSignup(event) {
    event.preventDefault();
    const username = document.getElementById('reg-username').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;
    const avatar = document.querySelector('input[name="avatar"]:checked').value;

    if (username && email && password) {
        // Save to session for the demo
        userSession.username = username;
        userSession.avatar = avatar;

        const lang = document.querySelector('.lang-select').value;
        alert(translations[lang].signup_success || "Account created successfully!");
        toggleAuthMode('login');
    } else {
        alert("Please fill in all fields.");
    }
}

// Twitter Interactions
function handleLike(btn) {
    btn.classList.toggle('liked');
    const countSpan = btn.querySelector('.count');
    let currentCount = parseInt(countSpan.innerText);
    
    if (btn.classList.contains('liked')) {
        countSpan.innerText = currentCount + 1;
    } else {
        countSpan.innerText = currentCount - 1;
    }
}

function toggleComments(btn) {
    const tweetContent = btn.closest('.tweet-content');
    const section = tweetContent.querySelector('.comments-section');
    section.style.display = section.style.display === 'none' ? 'block' : 'none';
}

function toggleAssistantInput(btn) {
    const tweetContent = btn.closest('.tweet-content');
    const section = tweetContent.querySelector('.comments-section');
    const assistantArea = tweetContent.querySelector('.assistant-input-area');
    section.style.display = 'block'; // Ensure section is visible
    assistantArea.style.display = assistantArea.style.display === 'none' ? 'block' : 'none';
}

function createNewPost() {
    const input = document.getElementById('post-input');
    const text = input.value.trim();
    
    if (!userSession.isLoggedIn) {
        document.getElementById('login-screen').style.display = 'flex';
        return;
    }
    if (!text) return;

    const feed = document.querySelector('.feed');
    const newPost = document.createElement('div');
    newPost.className = 'tweet fade-in'; // Explicitly add animation class
    newPost.innerHTML = `
        <img src="profile.png" alt="" class="tweet-avatar">
        <div class="tweet-content">
            <div class="tweet-header">
                <span class="tweet-author">Anonymous User</span>
                <span class="tweet-handle">@anonymous</span>
            </div>
            <p class="tweet-text">${text}</p>
            <div class="tweet-actions">
                <button class="action-btn comment-btn" onclick="toggleComments(this)">💬 <span class="count">0</span></button>
                <button class="action-btn like-btn" onclick="handleLike(this)">❤️ <span class="count">0</span></button>
            </div>
            <div class="assistant-action">
                <button class="action-btn assistant-btn" onclick="toggleAssistantInput(this)">⚕️ Assistant</button>
            </div>
            <div class="comments-section" style="display:none;">
                <div class="assistant-input-area" style="display: none;">
                    <textarea class="assistant-field" placeholder="Write your professional assistance here..."></textarea>
                    <button class="btn-primary" onclick="addAssistantComment(this)">Reply as Assistant</button>
                </div>
                <div class="comment-input-area">
                    <input type="text" class="comment-field" placeholder="Post your reply">
                    <button class="btn-send-comment" onclick="addComment(this)">Reply</button>
                </div>
            </div>
        </div>
    `;
    feed.prepend(newPost);
    input.value = '';
}

function addAssistantComment(btn) {
    const input = btn.previousElementSibling;
    const text = input.value.trim();
    if (!text) return;
    if (!userSession.isLoggedIn) {
        document.getElementById('login-screen').style.display = 'flex';
        return;
    }

    const section = btn.closest('.comments-section');
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `
        <span class="assistant-tag">Assistant Answer:</span>
        <p class="assistant-comment">${text}</p>
    `;
    
    // Insert after the assistant input area
    section.insertBefore(commentDiv, section.querySelector('.comment-input-area'));
    
    // Update comment count
    const tweetContent = btn.closest('.tweet-content');
    const countSpan = tweetContent.querySelector('.comment-btn .count');
    countSpan.innerText = parseInt(countSpan.innerText) + 1;
    
    input.value = '';
    btn.closest('.assistant-input-area').style.display = 'none';
}

function addComment(btn) {
    const input = btn.previousElementSibling;
    const text = input.value.trim();
    if (!text) return;
    if (!userSession.isLoggedIn) {
        document.getElementById('login-screen').style.display = 'flex';
        return;
    }

    const section = btn.closest('.comments-section');
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = `<p class="assistant-comment">${text}</p>`;
    section.insertBefore(commentDiv, btn.closest('.comment-input-area'));
    
    // Update comment count
    const tweetContent = btn.closest('.tweet-content');
    const countSpan = tweetContent.querySelector('.comment-btn .count');
    countSpan.innerText = parseInt(countSpan.innerText) + 1;
    
    input.value = '';
}

function handleHelpClick() {
    const helpDiv = document.getElementById('help-examples');
    if (helpDiv.style.display === 'none' || helpDiv.style.display === '') {
        helpDiv.style.display = 'block';
        helpDiv.scrollIntoView({ behavior: 'smooth' });
    } else {
        helpDiv.style.display = 'none';
    }
}

// Function to handle logout
function handleLogout() {
    userSession.isLoggedIn = false;
    userSession.username = '';
    showPage('home');
    // Clear input fields for security
    if(document.getElementById('username')) document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    console.log("User logged out.");
}

// Handle Enter/Space keys for the clickable logo
function handleLogoKeypress(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        showPage('home');
    }
}

// Initialize the application
window.onload = function() {
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    // Initially, hide the main content and header, show the login screen
    document.getElementById('main-header').style.display = 'block';
    document.getElementById('content').style.display = 'block';
    document.getElementById('login-screen').style.display = 'none';

    showPage('home');
    // Apply the initial translation so text appears correctly on load
    changeLanguage('en');
    console.log("Welcome to Nyunganira. Please ensure accessibility features are active.");
};
