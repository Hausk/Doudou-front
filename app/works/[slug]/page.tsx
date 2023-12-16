export async function getData(slug : any) {
    const res = await fetch('http://127.0.0.1:3333/works/' + slug)
    return res.json()
}
export default async function Page({ params }: { params: { id: string } }) {
    const work = await getData(params.id)
    console.log(work)
    return (
        <main>
            <h1>Page { work.title }</h1>
            <ul>
                
            </ul>
        </main>
    )
}