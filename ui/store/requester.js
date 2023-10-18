const BASE = `https://ivcstandard.com`;

async function posttoserver({ body, token, path }) {
    try {
        let tkn = token ? token : '';
        let pth = path ? path : '';

        const url = `${BASE}/${pth}`;

        const response = await fetch(`${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tkn}`
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error;
    }
}

async function getfromserver({ token, path }) {
    try {
        let tkn = token ? token : '';
        let pth = path ? path : '';

        const url = `${BASE}/${pth}`;

        console.log(url)

        const response = await fetch(`${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tkn}`
            }
        });

        const data = await response.json();

        return data;
    } catch (error) {
        return error
    }
}

export default {
    posttoserver,
    getfromserver
};