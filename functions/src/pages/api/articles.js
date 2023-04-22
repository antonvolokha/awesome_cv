import {findAll} from "../../reposiotry/ArticlesRepositpry";

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(404);
    }

    return res.status(200).json(findAll());
}
