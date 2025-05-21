export default function Calc() {
    return (
        <div className="w-1/2 h-full bg-amber-500 p-8">

            <div className="flex justify-between mb-8">
                <h2>Mortgage Calculator</h2>
                <p>Clear All</p>
            </div>

            <div className="flex flex-col">
                <label htmlFor="amnt">Mortgage Amount</label>
                <input type="text" name="amnt" id="amnt" className="border-2 border-black" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="amnt">Mortgage Term</label>
                <input type="text" name="amnt" id="amnt" className="border-2 border-black" />
            </div>

            <div className="flex flex-col">
                <label htmlFor="amnt">Mortgage Type</label>
                <input type="text" name="amnt" id="amnt" className="border-2 border-black" />
            </div>

        </div >
    );
}
