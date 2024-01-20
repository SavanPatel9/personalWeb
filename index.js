function redirectToPage(location) {
    if(location === 'git') {
        window.location.href = 'https://github.com/SavanPatel9';
    }
    else if(location === 'linkedin') {
        window.location.href = 'https://www.linkedin.com/in/savanapatel/';
    }
}

function downloadResume () {
    var fileUrl = 'Savan_Patel_Resume.pdf';

    var downloadLink = document.createElement('a');     // temporary child for download.

    downloadLink.download = fileUrl;
    downloadLink.href = fileUrl;

    document.body.appendChild(downloadLink);

    downloadLink.click();

    document.body.removeChild(downloadLink);
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});