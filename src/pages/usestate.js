import { useState } from "react";
import { ButtonGroup, Container } from "react-bootstrap";

export default function UseState() {
    const [count, setCount] = useState(0)
    return <>
        <Container className="text-center" >
            <h1>UseState</h1>
            <p>{count}</p>
            <button onClick={() => {
                setCount(addCount(count));
            }}> Add Count </button>
        </Container>
    </>
}
function addCount(count) {
    setTimeout(() => {
        return count + 1;
    }, 1000);
}