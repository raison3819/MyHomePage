document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('#gnb a');
    const sections = document.querySelectorAll('.content');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const sectionId = this.getAttribute('data-section');
            
            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.add('active');
                } else {
                    section.classList.remove('active');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const skillLevels = document.querySelectorAll('.skill-level');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillLevel = entry.target;
                const width = skillLevel.getAttribute('data-skill-level') + '%';
                skillLevel.style.width = width;
                observer.unobserve(skillLevel);
            }
        });
    };

    const observer = new IntersectionObserver(callback, options);

    skillLevels.forEach(skillLevel => {
        observer.observe(skillLevel);
    });
});
