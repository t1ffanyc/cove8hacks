import Year from './Year';

export default function Planner() {
    return (
        <div className="column" style={{ backgroundColor: 'white' }}>
            <h1 className="mb-6">freshman</h1>
            <Year />
            <h1 className="mb-6">sophomore</h1>
            <Year />
            <h1 className="mb-6">junior</h1>
            <Year />
            <h1 className="mb-6">senior</h1>
            <Year />
        </div>
    );
}