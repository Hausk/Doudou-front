export async function getData(slug : any) {
    const res = await fetch('http://127.0.0.1:3333/works/' + slug)
    return res.json()
}