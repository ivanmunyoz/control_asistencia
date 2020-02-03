"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'Todo esto funciona' });
    }
}
exports.indexController = new IndexController();
