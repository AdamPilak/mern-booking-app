type Props = {
	selectedPrice?: number
	onChange: (value?: number) => void
}

const PriceFilter = ({ selectedPrice, onChange }: Props) => {
	return (
		<div className="border-b border-slate-300 pb-5">
			<h4 className="text-md font-semibold mb-2">Max Price</h4>
			<label className="flex items-center space-x-2">
				<select
					className="rounded-md w-full border p-2"
					onChange={(event) => onChange(event.target.value ? parseInt(event.target.value) : undefined)}
					value={selectedPrice}
				>
					<option value="">Select Max Price</option>
					{["50", "100", "200", "300", "400", "500"].map(price => (
						<option value={price}>{price}</option>
					))}
				</select>
			</label>
		</div>
	)
}

export default PriceFilter
