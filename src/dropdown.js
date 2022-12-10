export const dropdown = () => {
    document.addEventListener('click', (element) => {
        const dropdownNodes = document.querySelectorAll('[data-dropdown]');
        const currentDropdown = element.target.nextElementSibling;

        if (element.target.matches('[data-dropdown-button]')) {
            if (currentDropdown.classList.contains('active')) {
                currentDropdown.classList.toggle('active');
            } else {
                dropdownNodes.forEach((item) => {
                    item.classList.remove('active');
                });

                currentDropdown.classList.toggle('active');
            }
        } else {
            dropdownNodes.forEach((item) => {
                item.classList.remove('active');
            });
        }
    })
}
