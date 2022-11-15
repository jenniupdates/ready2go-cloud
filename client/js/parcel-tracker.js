const application = {
	TRACK_PARCEL_ENDPOINT:
		"https://xphvj4owp3.execute-api.ap-southeast-1.amazonaws.com/prod",

	init: function () {
		$("#tracking-form").submit((event) => {
			event.preventDefault()
			this.onTrackSubmitted()
		})
	},

	onTrackSubmitted: async function () {
		const trackingNumber = $("#tracking-number").val()
		const orders = await this.getParcelAsync(trackingNumber)

		orders.forEach((order) => {
			const {
				trackingID,
				merchantOrderID,
				merchantName,
				orderStatusDescription,
				orderStatusDate,
				orderStatusTime,
			} = order

			const itemElement = this.getOrderItemTemplate(`<div class="badge">${orderStatusDescription}</div> #${trackingID}`, `
				<label class="font-bold">Merchant</label>
				<p class="mb-4">
					<span class="badge badge-outline">merchant-${merchantOrderID}</span>
					${merchantName}
				</p>

				<label class="font-bold">Order Date</label>
				<p class="mb-4">${orderStatusDate} - ${orderStatusTime}</p>
			`)

			$("#order-list").append(itemElement)
		})

		$("#order-section").removeClass("hidden")

		document
			.getElementById("order-section")
			.scrollIntoView({ behavior: "smooth" })
	},

	getOrderItemTemplate: function (title, body) {
		return `
      <div class="card bg-base-200 shadow-md mt-4">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <div>
            ${body}
          </div>
        </div>
      </div>  
    `
	},

	getParcelAsync: async function (trackingId) {
		try {
			const response = await fetch(
				`${this.TRACK_PARCEL_ENDPOINT}?trackingID=${trackingId}`
			)
			const result = (await response.text())
				.replace(/'/g, '"')
				.replace(/None/g, null)

			return JSON.parse(result)
		} catch (e) {
			console.error("an error has occurred", e)
		}
	},
}

application.init()
