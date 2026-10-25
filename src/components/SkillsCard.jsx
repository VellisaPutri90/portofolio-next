export default function Kartu({ judul, childern }) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm mb-4">
            <h2 className="mb-2 text-xl font-bold text-blue-900">{judul}</h2>
            <div>{childern}</div>
        </div>
    );
}