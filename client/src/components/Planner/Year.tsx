import Quarter from './Quarter';

export default function Year() {
    return (
      <div className="p-4">
        <div className="flex gap-4">
          <Quarter />
          <Quarter />
          <Quarter />
        </div>
      </div>
    );
  }
