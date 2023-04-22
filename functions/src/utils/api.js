async function get(url) {
    const response = await fetch(url, {method: "GET"});

    if (!response.ok) {
        throw 'Failed to get';
    }

    return await response.json();
}

async function post(url, body) {
    const response = await fetch(url, {method: "POST", body: body});

    if (!response.ok) {
        throw 'Failed to post';
    }

    return await response.json();
}

export async function sendEmail(body) {
    return await post("/api/email", body);
}

export async function fetchArticles() {
    return await get("/api/articles");
}
