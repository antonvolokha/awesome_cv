export default function handler(req, res) {
    res.status(200).json({
        name: 'anton website',
        version: '1.0',
    });
}
