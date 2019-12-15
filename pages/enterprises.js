import Nav from '../components/nav'
import Link from 'next/link'

const data = [
    { id: 1, name: 'test' },
]

const Enterprises = () => (
    <div>
        <Nav />
        <table width={200}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th />
            </tr>
            {data.map(({ id, name }) => (
                <tr>
                    <th>{id}</th>
                    <th>{name}</th>
            <th><Link href={`/edit/enterprise?id=${id}`}>edit</Link></th>
                </tr>
            ))}
        </table>
    </div>
)

export default Enterprises
