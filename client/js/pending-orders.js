const application = {
	init: async function () {
		const orders = await this.getOrdersAsync()

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

      $('#order-list').append(itemElement)
		})
	},

	getOrderItemTemplate: function (title, body) {
		return `
      <div class="card bg-base-100 shadow-md mt-4">
        <div class="card-body">
          <h2 class="card-title">${title}</h2>
          <div>
            ${body}
          </div>

          <div class="card-actions justify-end">
            <button class="btn btn-primary">Accept</button>
          </div>
        </div>
      </div>  
    `
	},

	getOrdersAsync: async function () {
		const response = await fetch("https://n2t1ei2vci.execute-api.ap-southeast-1.amazonaws.com/prod")
		const result = (await response.text()).replace(/'/g, '"')
		return JSON.parse(result)
	},
}

application.init()
