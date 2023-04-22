import {sendContactRequestWebhook} from "../../utils/api";

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404);
    }

    await sendContactRequestWebhook(req.body);

    return res.status(200).json({status: 'OK'});
}
