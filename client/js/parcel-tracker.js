const application = {
	init: function () {
		$("#tracking-form").submit((event) => {
			event.preventDefault()
			this.onTrackSubmitted()
		})
	},

	onTrackSubmitted: async function () {
		const trackingNumber = $("#tracking-number").val()
		const orderDetail = await this.getParcelAsync(trackingNumber)

		const { orderId, merchantName, nextDestination, datetime, status } =
			orderDetail

		const itemElement = this.getOrderItemTemplate(
			`<div class="badge">${status}</div> #${orderId} - ${datetime}`,
			`
        <label class="font-bold">Destination</label>
        <p class="mb-4">${nextDestination}</p>

        <label class="font-bold">Merchant</label>
        <p>${merchantName}</p>
      `
		)

		$("#order-list").html(itemElement)
		$("#order-section").removeClass("hidden")

		document
			.getElementById("order-section")
			.scrollIntoView({ behavior: "smooth" })
	},

	getOrderItemTemplate: function (title, body) {
		return `
      <div class="card bg-base-100 shadow-md mt-4">
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

		return {
			orderId: "order-id-1",
			trackingId: "tracking-id-1",
			merchantId: "merchange-id-1",
			merchantName: "the merchant name",
			currentLocation: "current location",
			datetime: "the datetime",
			nextDestination: "the next destination",
			status: "pending",
		}
	},
}

application.init()
