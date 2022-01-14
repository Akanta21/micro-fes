import { createSignal } from "solid-js";

export default () => {
    const [count, setCount] = createSignal(0);

    return (
        <div className="bg-blue-500">
            <div>Count = {count()}</div>
            <button onClick={() => setCount(count() + 1)}>Add One</button>
        </div>
    )
}