document.addEventListener('DOMContentLoaded', function () {
    const allSectionHeaders = document.querySelectorAll('.sidebar-section-header, .sidebar-subsection-header');

    allSectionHeaders.forEach(header => {
        header.addEventListener('click', function (event) {
            event.stopPropagation();
            const targetId = this.dataset.target;
            const content = document.getElementById(targetId);

            this.classList.toggle('open');
            if (content) {
                content.classList.toggle('open');
            }
        });
    });

    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const closeSidebarButton = document.getElementById('closeSidebarButton');
    const leftSidebar = document.getElementById('leftSidebar');
    const body = document.body;

    if (mobileMenuButton && leftSidebar) {
        mobileMenuButton.addEventListener('click', function (event) {
            event.stopPropagation();
            leftSidebar.classList.remove('-translate-x-full');
            leftSidebar.classList.add('translate-x-0');
            body.classList.add('overflow-hidden');
        });
    }

    if (closeSidebarButton && leftSidebar) {
        closeSidebarButton.addEventListener('click', function (event) {
            event.stopPropagation();
            leftSidebar.classList.add('-translate-x-full');
            leftSidebar.classList.remove('translate-x-0');
            body.classList.remove('overflow-hidden');
        });
    }

    document.addEventListener('click', function (event) {
        if (leftSidebar && !leftSidebar.contains(event.target) && !mobileMenuButton.contains(event.target)) {
            if (leftSidebar.classList.contains('translate-x-0') && !leftSidebar.classList.contains('md:relative')) {
                leftSidebar.classList.add('-translate-x-full');
                leftSidebar.classList.remove('translate-x-0');
                body.classList.remove('overflow-hidden');
            }
        }
    });
});
