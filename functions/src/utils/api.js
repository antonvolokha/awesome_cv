const CONTACT_FROM_WEBHOOK = "https://discord.com/api/webhooks/1083906304181010562/xEvSh1aeyhb8bD6AW_7f8pc_QOqawiT7VweufgobV4MHRB9b7siEOLlhSbQbBhBHXZWI";

async function get(url) {
    const response = await fetch(url, {method: "GET"});

    if (!response.ok) {
        throw 'Failed to get';
    }

    return await response.json();
}

async function post(url, body) {
    const response = await fetch(url, {
        method: "POST", body: JSON.stringify(body), headers: {
            "Content-Type": "application/json",
        }
    });

    if (!response.ok) {
        throw 'Failed to post';
    }

    return response;
}

export async function sendEmail(body) {
    return await post("/api/email", body);
}

export async function fetchArticles() {
    return await get("/api/articles");
}

export async function sendContactRequestWebhook({name, message, email}) {
    return await post(CONTACT_FROM_WEBHOOK,{
        username: `${name}: ${email}`,
        content: message,
    });
}
