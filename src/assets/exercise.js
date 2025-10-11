fetch('/admin', {
    method: 'GET',
    credentials: 'include'
})
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        const csrfToken = doc.querySelector('input[name="_csrf"]').getAttribute('value');

        return fetch('/admin/users/edit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {"username":"alice"},
            credentials: 'include'
        });
    })
    .then(postResponse => {
        if (postResponse.ok) {
            console.log('POST successful');
        } else {
            console.error('POST failed');
        }
    })
    .catch(err => console.error('Error:', err));



