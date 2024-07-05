import { useFormContext } from "react-hook-form"
import { HotelFormData } from "./ManageHotelForm"

const GuestsSection = () => {
	const {
		register,
		formState: { errors },
	} = useFormContext<HotelFormData>()

	return (
		<div>
			<h2 className="text-2xl font-bold mb-3">Guests</h2>
			<div className="flex gap-5 p-6 bg-gray-300">
				<label className="flex-1 text-gray-700 text-sm font-semibold">
					Adults
					<input
						type="number"
						className="border rounded w-full px-3 py-2 font-normal"
						min={0}
						{...register("adultCount", { required: "This field is required" })}
					/>
					{errors.adultCount && <span className="text-red-500 text-sm font-bold">{errors.adultCount.message}</span>}
				</label>
				<label className="flex-1 text-gray-700 text-sm font-semibold">
					Children
					<input
						type="number"
						className="border rounded w-full px-3 py-2 font-normal"
						min={0}
						{...register("childCount", { required: "This field is required" })}
					/>
					{errors.childCount && <span className="text-red-500 text-sm font-bold">{errors.childCount.message}</span>}
				</label>
			</div>
		</div>
	)
}

export default GuestsSection
