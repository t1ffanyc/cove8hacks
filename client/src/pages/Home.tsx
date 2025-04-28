import { Planner, Requirements } from "../components";

export default function App() {
    return (
        <>
            <h1 className='text-2xl font-bold mb-6'>hello!</h1>
            <div className='flex items-start gap-6'>
                <div className='flex-1'>
                    <Planner />
                </div>
                <div className='w-64'>
                    <Requirements />
                </div>
            </div>
        </>
    );
}
