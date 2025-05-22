export default function Calc() {
    return (
        <div className="w-1/2 h-full bg-amber-500 p-8">

            <div className="flex justify-between mb-8">
                <h2>Mortgage Calculator</h2>
                <p>Clear All</p>
            </div>

            {/* AMOUNT */}
            <div className="flex flex-col">
                <label htmlFor="amnt">Mortgage Amount</label>
                <input type="text" name="amnt" id="amnt" className="border-2 border-black" />
            </div>
            {/* AMOUNT */}

            {/* TERM & RATE */}
            <div className="flex w-full mt-10 justify-between gap-8 mb-8">
                <div className="flex flex-col">
                    <label htmlFor="term">Mortgage Term</label>
                    <input type="text" name="term" id="term" className="border-2 border-black w-full" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="rate">Interest rate</label>
                    <input type="text" name="rate" id="rate" className="border-2 border-black w-full" />
                </div>
            </div>
            {/* TERM & RATE */}

            <div>
                <div className="flex flex-col">
                    <label htmlFor="amnt" className="text-white mb-4">Mortgage Type</label>
                    <div className="flex gap-2 items-center">
                        <input
                            type="radio"
                            id="repayment"
                            name="repaymentType"
                            value="repayment"
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="repayment" className="text-gray-700">Repayment</label>
                    </div>

                    <div className="flex gap-2 items-center">
                        <input
                            type="radio"
                            id="intrest"
                            name="repaymentType"
                            value="intrest"
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                        />
                        <label htmlFor="intrest" className="text-gray-700">Intrest only</label>
                    </div>
                </div>
            </div>



        </div >
    );
}
