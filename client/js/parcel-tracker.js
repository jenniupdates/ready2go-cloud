const application = {
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
			const { orderId, merchantName, nextDestination, datetime, status } = order

			const itemElement = this.getOrderItemTemplate(
				`<div class="badge">${status}</div> #${orderId} - ${datetime}`,
				`
					<label class="font-bold">Destination</label>
					<p class="mb-4">${nextDestination}</p>
	
					<label class="font-bold">Merchant</label>
					<p>${merchantName}</p>
				`
			)

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
		// TODO: Handle retrieval from endpoint

		const responseString = '[{"orderId":"order-id-1","merchantName":"merchant-id-1","nextDestination":"destination 1","datetime":"2021-01-01 12:00:00","status":"pending"},{"orderId":"order-id-2","merchantName":"merchant-id-2","nextDestination":"destination 2","datetime":"2021-01-01 12:00:00","status":"delivered"}]'
		return JSON.parse(responseString)
	},
}

application.init()
