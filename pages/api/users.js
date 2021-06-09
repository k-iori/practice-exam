export default (req, res) => {
    // data
    const data = [{
        name: "山田 太郎",
        email: "taro1@example.com"
    }, {
        name: "山田 二郎",
        email: "taro2@example.com"
    }, {
        name: "山田 三郎",
        email: "taro3@example.com"
    }]
    res.status(200).json(data)
}