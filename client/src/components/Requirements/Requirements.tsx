
export default function Requirements() {

    const items = ["cs 31", "cs 32", "cs 33", "math 61"];

    return (
        <div className="flex justify-end w-full px-4 mt-6">
            <div className="w-full max-w-md border border-gray-300 rounded-md overflow-hidden">
                <div className="bg-gray-100 px-4 py-2 font-semibold border-b">
                    requirements
                </div>
                {items.map((item, index) => (
                <div key={index} className="px-4 py-2 border-b last:border-b-0 hover:bg-gray-50">
                    {item}
                </div>
                ))}
            </div>
        </div>
    );
}