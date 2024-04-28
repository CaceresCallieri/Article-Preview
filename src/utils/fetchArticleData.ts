export const fetchArticleData = async () => {
    const response = await fetch('data/articleData.json')
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
}