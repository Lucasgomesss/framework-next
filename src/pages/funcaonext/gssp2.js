import { Container } from "react-bootstrap"

export async function getServerSideProps() {
    return { props: { repo: { "var1": "Info A", "var2": "Framework 1", "var3": "IFMS" } } }
}

export default function Gssp2({ repo }) {
    return (
        <>
            <Container className="text-center">
                <h1>Server Side Props - 2</h1>
                <p>{repo.var1}</p>
                <p>{repo.var2}</p>
                <p>
                    {Object.entries(repo).map(([key, value]) => (
                        <p>{key}: {value}</p>
                    ))}
                </p>
            </Container>
        </>
    )
}