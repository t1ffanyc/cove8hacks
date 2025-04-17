export default function Quarter() {
    return (
      <div className="border rounded-md shadow-sm w-80">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="h-9 border-b last:border-b-0 flex items-center justify-center text-sm text-gray-700"
          >
            
          </div>
        ))}
      </div>
    );
  }