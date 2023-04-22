export default function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(404);
    }

    console.log('I receive message', res.body);

    return res.status(200).json({status: 'OK'});
}
